import fs from "node:fs";
import path from "node:path";
import { isExcluded, projects, siteUrl } from "./seo-indexing.config.mjs";

const root = process.cwd();

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

function htmlFiles(project) {
  return walk(path.join(root, project))
    .filter((file) => /\.html?$/i.test(file))
    .map((file) => path.relative(path.join(root, project), file).split(path.sep).join("/"))
    .sort();
}

function urlFor(project, relativePath) {
  const pathname = relativePath === "index.html"
    ? `/${project}/`
    : `/${project}/${relativePath.replace(/index\.html$/i, "")}`;
  return `${siteUrl}${pathname}`;
}

function addNoindex(source) {
  const tag = '<meta name="robots" content="noindex, follow">';
  if (/<meta\b[^>]*name\s*=\s*["']robots["'][^>]*>/i.test(source)) {
    return source.replace(/<meta\b[^>]*name\s*=\s*["']robots["'][^>]*>/i, tag);
  }
  return source.replace(/<head([^>]*)>/i, `<head$1>\n${tag}`);
}

function canonicalTarget(project, target) {
  if (target.startsWith("/")) return `${siteUrl}${target}`;
  return `${siteUrl}/${project}/${target.replace(/^\.\//, "")}`;
}

function setCanonical(source, href) {
  const canonical = `<link rel="canonical" href="${href}">`;
  const existing = /<link\b(?=[^>]*\brel\s*=\s*["'][^"']*canonical[^"']*["'])[^>]*>/i;
  if (existing.test(source)) return source.replace(existing, canonical);
  return source.replace(/<\/head>/i, `  ${canonical}\n</head>`);
}

function writeIfChanged(file, content) {
  const previous = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  if (previous !== content) fs.writeFileSync(file, content);
}

function redirectStatus(targetPath) {
  const targetProject = targetPath.split("/").filter(Boolean)[0];
  return projects[targetProject]?.disabled ? "PLANNED_TARGET_NOINDEX" : "301";
}

function sitemap(project, urls) {
  const body = urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}${body ? "\n" : ""}</urlset>\n`;
}

const redirectRows = [["source", "target", "status"]];
const activeSitemaps = ["/sitemap.xml"];

for (const [project, config] of Object.entries(projects)) {
  const files = htmlFiles(project);
  const included = [];

  for (const relativePath of files) {
    const file = path.join(root, project, relativePath);
    const redirectedTo = config.redirects?.[relativePath];
    const excluded = isExcluded(project, relativePath);

    if (excluded) {
      let source = addNoindex(fs.readFileSync(file, "utf8"));
      if (redirectedTo) {
        const target = canonicalTarget(project, redirectedTo);
        source = setCanonical(source, target);
        const targetPath = new URL(target).pathname;
        redirectRows.push([`/${project}/${relativePath}`, targetPath, redirectStatus(targetPath)]);
      }
      writeIfChanged(file, source);
    } else {
      included.push(urlFor(project, relativePath));
    }
  }

  for (const [source, target] of Object.entries(config.externalRedirects || {})) {
    redirectRows.push([source, target, redirectStatus(target)]);
  }

  writeIfChanged(path.join(root, project, "sitemap.xml"), sitemap(project, included));
  if (included.length) activeSitemaps.push(`/${project}/sitemap.xml`);
}

const redirectCsv = redirectRows.map((row) => row.map((value) => `"${value.replaceAll('"', '""')}"`).join(",")).join("\n") + "\n";
writeIfChanged(path.join(root, "REDIRECTS_SEO.csv"), redirectCsv);

const indexBody = activeSitemaps.map((item) => `  <sitemap><loc>${siteUrl}${item}</loc></sitemap>`).join("\n");
writeIfChanged(
  path.join(root, "sitemap-index.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexBody}\n</sitemapindex>\n`
);

console.log(`Processed ${Object.keys(projects).length} projects.`);
console.log(`Generated ${redirectRows.length - 1} redirect mappings in REDIRECTS_SEO.csv.`);
