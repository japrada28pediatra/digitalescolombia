import fs from "node:fs";
import path from "node:path";
import { isExcluded, projects, siteUrl } from "./seo-indexing.config.mjs";

const root = process.cwd();
const strict = process.argv.includes("--strict");
let errors = 0;
let warnings = 0;

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, "i"));
  return match ? match[1].trim() : "";
}

function field(source, name) {
  if (name === "title") return source.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].replace(/<[^>]+>/g, "").trim() || "";
  if (name === "h1") return source.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() || "";
  if (name === "description") {
    const tag = (source.match(/<meta\b[^>]*>/gi) || []).find((item) => attr(item, "name").toLowerCase() === "description");
    return tag ? attr(tag, "content") : "";
  }
  const tag = source.match(/<link\b(?=[^>]*\brel\s*=\s*["'][^"']*canonical[^"']*["'])[^>]*>/i)?.[0];
  return tag ? attr(tag, "href") : "";
}

function report(kind, message) {
  if (kind === "ERROR") errors++;
  else warnings++;
  console.log(`${kind}: ${message}`);
}

for (const [project] of Object.entries(projects)) {
  const projectRoot = path.join(root, project);
  const rows = walk(projectRoot)
    .filter((file) => /\.html?$/i.test(file))
    .map((file) => {
      const relativePath = path.relative(projectRoot, file).split(path.sep).join("/");
      return { file, relativePath, source: fs.readFileSync(file, "utf8") };
    })
    .filter((row) => !isExcluded(project, row.relativePath));

  const values = { title: new Map(), description: new Map() };
  for (const row of rows) {
    for (const name of ["title", "description", "canonical", "h1"]) {
      const value = field(row.source, name);
      if (!value) report("ERROR", `${project}/${row.relativePath} has no ${name}`);
      if ((name === "title" || name === "description") && value) {
        const group = values[name].get(value) || [];
        group.push(row.relativePath);
        values[name].set(value, group);
      }
    }
    if (/(?:href|src)\s*=\s*["']http:\/\//i.test(row.source)) report("WARN", `${project}/${row.relativePath} loads an HTTP resource`);
    if (/lorem ipsum|themeforest|your onestop solution|john doe|jone doe|example@example\.com|300 123 4567|\[NOMBRE|\[EMAIL|XXXXXXXXXX|desde una perspectiva SEO|rutas SEO internas|por qué esta versión no duplica otra web/i.test(row.source)) {
      report("WARN", `${project}/${row.relativePath} contains a template or placeholder signal`);
    }
    for (const match of row.source.matchAll(/\b(?:href|src)\s*=\s*["']([^"'#]+)["']/gi)) {
      let reference = match[1].split(/[?#]/)[0];
      if (!reference || /^(?:https?:|mailto:|tel:|javascript:|data:|\/\/)/i.test(reference)) continue;
      try { reference = decodeURIComponent(reference); } catch {}
      const target = reference.startsWith("/")
        ? path.join(root, reference)
        : path.resolve(path.dirname(row.file), reference);
      if (!fs.existsSync(target)) report("ERROR", `${project}/${row.relativePath} links to missing ${reference}`);
    }
  }

  for (const [name, groups] of Object.entries(values)) {
    for (const [value, files] of groups) {
      if (files.length > 1) report("ERROR", `${project} duplicates ${name} in ${files.join(", ")} (${value})`);
    }
  }

  const sitemapFile = path.join(projectRoot, "sitemap.xml");
  const sitemapSource = fs.existsSync(sitemapFile) ? fs.readFileSync(sitemapFile, "utf8") : "";
  const sitemapUrls = [...sitemapSource.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => match[1]);
  if (sitemapUrls.length !== rows.length) report("ERROR", `${project} sitemap has ${sitemapUrls.length} URLs for ${rows.length} indexable HTML files`);
  if (sitemapUrls.some((url) => !url.startsWith(`${siteUrl}/${project}/`))) report("ERROR", `${project} sitemap contains an out-of-scope URL`);
}

const rootFiles = [
  "index.html", "marketing-digital-colombia.html", "salud-en-colombia.html",
  "abogados-en-colombia.html", "servicios-locales-bogota.html",
  "alojamientos-y-turismo-colombia.html"
];
const rootIndexable = [];
const rootValues = { title: new Map(), description: new Map() };
for (const relativePath of rootFiles) {
  const file = path.join(root, relativePath);
  const source = fs.readFileSync(file, "utf8");
  const noindex = /<meta\b[^>]*name\s*=\s*["']robots["'][^>]*content\s*=\s*["'][^"']*noindex/i.test(source);
  if (!noindex) rootIndexable.push(relativePath);
  for (const name of ["title", "description", "canonical", "h1"]) {
    const value = field(source, name);
    if (!value) report("ERROR", `${relativePath} has no ${name}`);
    if ((name === "title" || name === "description") && value) {
      const group = rootValues[name].get(value) || [];
      group.push(relativePath);
      rootValues[name].set(value, group);
    }
  }
  for (const match of source.matchAll(/\b(?:href|src)\s*=\s*["']([^"'#]+)["']/gi)) {
    let reference = match[1].split(/[?#]/)[0];
    if (!reference || /^(?:https?:|mailto:|tel:|javascript:|data:|\/\/)/i.test(reference)) continue;
    const target = reference.startsWith("/") ? path.join(root, reference) : path.resolve(path.dirname(file), reference);
    if (!fs.existsSync(target)) report("ERROR", `${relativePath} links to missing ${reference}`);
  }
}
for (const [name, groups] of Object.entries(rootValues)) {
  for (const [value, files] of groups) {
    if (files.length > 1) report("ERROR", `root duplicates ${name} in ${files.join(", ")} (${value})`);
  }
}
const rootSitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const rootSitemapUrls = [...rootSitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => match[1]);
if (rootSitemapUrls.length !== rootIndexable.length) {
  report("ERROR", `root sitemap has ${rootSitemapUrls.length} URLs for ${rootIndexable.length} indexable HTML files`);
}

console.log(`\nAudit finished with ${errors} errors and ${warnings} warnings.`);
if (strict && errors) process.exitCode = 1;
