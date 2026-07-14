import { writeFileSync } from "node:fs";

const brand = "digitalescolombia.com";
const siteUrl = "https://digitalescolombia.com";
const whatsapp = "+573180435023";
const email = "[EMAIL]";

const services = [
  {
    slug: "agencia-google-ads-colombia",
    title: "Agencia Google Ads en Colombia",
    h1: "Agencia Google Ads en Colombia para empresas que necesitan pauta clara y medible",
    focus: "agencia de Google Ads en Colombia",
    type: "Servicio principal",
    intro:
      "Creamos, administramos y optimizamos campañas en Google Ads para empresas en Colombia que quieren invertir con más criterio, ordenar su pauta y entender qué está pasando con cada peso destinado a adquisición.",
    points: ["Estrategia de búsqueda, display, YouTube, remarketing y Performance Max según el caso.", "Configuración de conversiones y medición para decisiones comerciales más limpias.", "Optimización continua de términos, anuncios, pujas, presupuestos y landings."],
    audience: "empresas B2B, ecommerce, servicios profesionales y negocios locales",
  },
  {
    slug: "campanas-google-ads-colombia",
    title: "Campañas Google Ads Colombia",
    h1: "Campañas Google Ads en Colombia diseñadas para captar demanda real",
    focus: "campañas Google Ads Colombia",
    type: "Creación de campañas",
    intro:
      "Estructuramos campañas desde cero con investigación de mercado, segmentación, arquitectura de cuenta, anuncios y medición. El objetivo es evitar pauta improvisada y construir una base que pueda optimizarse con datos.",
    points: ["Investigación de intención de búsqueda por ciudad, industria y etapa de compra.", "Anuncios orientados a propuesta de valor, no solo a clics baratos.", "Estructura preparada para escalar cuando haya señales confiables."],
    audience: "empresas que van a iniciar o relanzar su pauta en Google",
  },
  {
    slug: "administracion-google-ads-colombia",
    title: "Administración Google Ads Colombia",
    h1: "Administración de Google Ads en Colombia con seguimiento constante",
    focus: "administración Google Ads Colombia",
    type: "Administración mensual",
    intro:
      "Administramos cuentas activas con revisión de rendimiento, control presupuestal, optimización de campañas y reportes ejecutivos para que la pauta deje de operar en piloto automático.",
    points: ["Monitoreo de presupuesto, términos de búsqueda, conversiones y calidad del tráfico.", "Ajustes por dispositivo, ubicación, horario, palabra clave y audiencia cuando aplica.", "Reportes claros con próximos pasos, aprendizajes y prioridades."],
    audience: "empresas con campañas activas que necesitan orden y mejora continua",
  },
  {
    slug: "auditoria-google-ads-colombia",
    title: "Auditoría Google Ads Colombia",
    h1: "Auditoría Google Ads en Colombia para encontrar fugas de presupuesto",
    focus: "auditoría Google Ads Colombia",
    type: "Auditoría",
    intro:
      "Revisamos cuentas existentes para detectar errores de configuración, medición incompleta, palabras irrelevantes, anuncios débiles, segmentación amplia o decisiones que pueden estar afectando la rentabilidad.",
    points: ["Diagnóstico de cuenta, conversiones, campañas, términos y landing pages.", "Priorización de hallazgos por impacto, urgencia y dificultad de implementación.", "Plan de acción para optimizar sin rehacer todo innecesariamente."],
    audience: "empresas que ya invierten y quieren saber si su cuenta está bien configurada",
  },
  {
    slug: "google-ads-para-ecommerce-colombia",
    title: "Google Ads para Ecommerce Colombia",
    h1: "Google Ads para ecommerce en Colombia con foco en rentabilidad",
    focus: "Google Ads para ecommerce",
    type: "Ecommerce",
    intro:
      "Desarrollamos campañas para tiendas online en Colombia considerando catálogo, márgenes, ticket promedio, feed de productos, remarketing y medición de compras para tomar mejores decisiones de inversión.",
    points: ["Estrategia para Shopping, búsqueda, remarketing y Performance Max según madurez del ecommerce.", "Revisión de feed, eventos de conversión y señales de valor de compra.", "Lectura de ROAS, CPA, margen y volumen para evitar conclusiones superficiales."],
    audience: "tiendas online y marcas D2C que venden en Colombia",
  },
  {
    slug: "google-ads-para-negocios-locales-colombia",
    title: "Google Ads para Negocios Locales Colombia",
    h1: "Google Ads para negocios locales en Colombia que quieren más consultas calificadas",
    focus: "Google Ads para negocios locales",
    type: "Negocios locales",
    intro:
      "Creamos campañas locales para empresas que atienden por zona, ciudad o sede. Priorizamos búsquedas con intención, llamadas, WhatsApp, formularios y visitas de usuarios cercanos al área de servicio.",
    points: ["Segmentación por cobertura real en Bogotá, Medellín, Cali, Barranquilla, Cartagena y otras ciudades.", "Campañas orientadas a llamadas, formularios, WhatsApp o agenda según el negocio.", "Control de términos para evitar clics informativos o de baja probabilidad comercial."],
    audience: "negocios con atención local, sedes físicas o cobertura por ciudad",
  },
  {
    slug: "consultor-google-ads-colombia",
    title: "Consultor Google Ads Colombia",
    h1: "Consultor Google Ads en Colombia para tomar mejores decisiones de pauta",
    focus: "consultor Google Ads Colombia",
    type: "Consultoría",
    intro:
      "Acompañamos a equipos internos, gerencias de marketing y dueños de negocio que necesitan criterio experto para revisar estrategia, medición, presupuesto, estructura y oportunidades de mejora.",
    points: ["Sesiones tácticas para resolver bloqueos de cuenta, medición o estrategia.", "Revisión de decisiones de pauta antes de aumentar inversión.", "Transferencia de criterio para que el equipo entienda qué optimizar y por qué."],
    audience: "equipos internos de marketing y empresas con operación propia",
  },
  {
    slug: "publicidad-en-google-colombia",
    title: "Publicidad en Google Colombia",
    h1: "Publicidad en Google Colombia para aparecer cuando tus clientes buscan soluciones",
    focus: "publicidad en Google Colombia",
    type: "Publicidad digital",
    intro:
      "Diseñamos publicidad en Google para capturar intención de búsqueda, fortalecer recordación y acompañar al usuario hasta la conversión con mensajes claros y seguimiento comercial.",
    points: ["Campañas de búsqueda para demanda activa y campañas de apoyo cuando el ciclo de compra lo exige.", "Mensajes alineados con oferta, ubicación, urgencia y diferenciales reales.", "Medición para distinguir entre clics, contactos y oportunidades de negocio."],
    audience: "empresas que quieren usar Google como canal de adquisición",
  },
];

const cities = [
  ["agencia-google-ads-bogota", "Bogotá", "empresas B2B, ecommerce, educación, salud, tecnología y servicios profesionales"],
  ["agencia-google-ads-medellin", "Medellín", "marcas en crecimiento, negocios de servicios, ecommerce y compañías con equipos comerciales"],
  ["agencia-google-ads-cali", "Cali", "empresas regionales, clínicas, inmobiliarias, educación y negocios locales"],
  ["agencia-google-ads-barranquilla", "Barranquilla", "empresas de servicios, comercio, salud, construcción y turismo"],
  ["agencia-google-ads-cartagena", "Cartagena", "hoteles, servicios turísticos, salud, inmobiliarias y negocios de alto valor"],
].map(([slug, city, audience]) => ({
  slug,
  title: `Agencia Google Ads ${city}`,
  h1: `Agencia Google Ads en ${city} para empresas que quieren pauta mejor administrada`,
  focus: `agencia Google Ads ${city}`,
  type: "Landing por ciudad",
  intro: `Ayudamos a empresas en ${city} a crear, administrar y optimizar campañas en Google Ads con estrategia, medición y seguimiento comercial. Adaptamos la pauta a la intención local, la competencia y el proceso de venta de cada negocio.`,
  points: [`Segmentación por zonas, cobertura de servicio y búsquedas relevantes en ${city}.`, "Anuncios conectados con WhatsApp, formularios, llamadas o agenda comercial.", "Optimización con lectura de conversiones, calidad de leads y presupuesto disponible."],
  audience,
}));

const niches = [
  ["google-ads-para-abogados-colombia", "abogados", "firmas y profesionales legales", "consultas legales calificadas, especialidades, ciudad de atención y confianza profesional"],
  ["google-ads-para-medicos-colombia", "médicos", "consultorios y especialistas médicos", "agenda, ubicación, especialidad, cumplimiento publicitario y calidad del paciente potencial"],
  ["google-ads-para-clinicas-colombia", "clínicas", "clínicas y centros médicos", "servicios de alto valor, agenda, sedes, trazabilidad y experiencia del paciente"],
  ["google-ads-para-odontologos-colombia", "odontólogos", "clínicas odontológicas y especialistas", "tratamientos, ubicación, urgencia, financiación y seguimiento por WhatsApp o formulario"],
  ["google-ads-para-inmobiliarias-colombia", "inmobiliarias", "constructoras, inmobiliarias y brokers", "proyectos, zonas, presupuesto del comprador, formularios y velocidad de respuesta comercial"],
].map(([slug, niche, audience, variables]) => ({
  slug,
  title: `Google Ads para ${capitalize(niche)} Colombia`,
  h1: `Google Ads para ${niche} en Colombia con campañas enfocadas en prospectos reales`,
  focus: `Google Ads para ${niche} Colombia`,
  type: "Landing por nicho",
  intro: `Gestionamos campañas de Google Ads para ${audience} en Colombia, cuidando la intención de búsqueda, la claridad de la oferta, la medición y la calidad del contacto generado.`,
  points: [`Estrategia basada en ${variables}.`, "Anuncios y landings alineados con objeciones, intención y momento de decisión.", "Optimización orientada a oportunidades comerciales, no solo a volumen de formularios."],
  audience,
}));

const pages = [...services, ...cities, ...niches];

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function cleanPhoneHref(number) {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}

function pageUrl(slug = "") {
  const path = slug ? `/${slug}.html` : "/";
  return `${siteUrl}${path}`;
}

function jsonLd(page, isHome = false) {
  const faqs = faqItems(page);
  return JSON.stringify(
    [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: brand,
        url: siteUrl,
        email,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: whatsapp,
            areaServed: "CO",
            availableLanguage: "es",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: isHome ? "Gestión de Google Ads en Colombia" : page.title,
        serviceType: "Gestión, creación, auditoría y optimización de campañas en Google Ads",
        provider: { "@type": "Organization", name: brand, url: siteUrl },
        areaServed: { "@type": "Country", name: "Colombia" },
        audience: { "@type": "Audience", audienceType: page?.audience || "Empresas en Colombia" },
        description: isHome
          ? "Servicio de gestión, creación, auditoría y optimización de campañas en Google Ads para empresas en Colombia."
          : page.intro,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: isHome
          ? [{ "@type": "ListItem", position: 1, name: "Inicio", item: pageUrl() }]
          : [
              { "@type": "ListItem", position: 1, name: "Inicio", item: pageUrl() },
              { "@type": "ListItem", position: 2, name: page.title, item: pageUrl(page.slug) },
            ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: isHome ? `${brand} | Agencia Google Ads en Colombia` : `${page.title} | ${brand}`,
        url: isHome ? pageUrl() : pageUrl(page.slug),
        inLanguage: "es-CO",
        description: isHome
          ? "Agencia Google Ads en Colombia para gestión, creación, auditoría y optimización de campañas para empresas."
          : page.intro,
      },
    ],
    null,
    2,
  );
}

function faqItems(page) {
  const focus = page ? "este servicio" : "una Agencia Google Ads en Colombia";
  return [
    {
      q: `¿Cuánto cuesta contratar ${focus}?`,
      a: "El costo depende del alcance, número de campañas, inversión publicitaria, complejidad de medición y nivel de acompañamiento. Primero revisamos el caso para proponer una gestión proporcional al objetivo.",
    },
    {
      q: "¿Pueden garantizar ventas o leads?",
      a: "No prometemos cierres comerciales automáticos. Los resultados dependen del presupuesto, la competencia, la oferta, la landing page, la medición y el proceso comercial de la empresa.",
    },
    {
      q: "¿Trabajan con empresas fuera de Bogotá?",
      a: "Sí. Atendemos empresas en Colombia, incluyendo Bogotá, Medellín, Cali, Barranquilla, Cartagena, Bucaramanga y otras ciudades con operación nacional o local.",
    },
    {
      q: "¿También hacen auditoría de campañas existentes?",
      a: "Sí. Podemos revisar una cuenta activa para identificar problemas de configuración, medición, segmentación, palabras clave, anuncios, presupuesto y oportunidades de optimización.",
    },
  ];
}

function nav(current = "") {
  const serviceLinks = services.slice(1, 8).map((p) => `<a href="${p.slug}.html">${p.title.replace(" Colombia", "")}</a>`).join("");
  return `<header class="site-header">
    <a class="brand" href="index.html" aria-label="${brand} inicio">
      <span class="brand-mark" aria-hidden="true">DC</span>
      <span>${brand}</span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
      <span class="sr-only">Abrir navegación</span>
      <span></span><span></span><span></span>
    </button>
    <nav class="main-nav" id="main-nav" aria-label="Navegación principal">
      <a href="index.html#servicios" ${current === "home" ? "aria-current=\"page\"" : ""}>Servicios</a>
      <a href="agencia-google-ads-colombia.html">Agencia</a>
      <a href="auditoria-google-ads-colombia.html">Auditoría</a>
      <a href="google-ads-para-ecommerce-colombia.html">Ecommerce</a>
      <a href="agencia-google-ads-bogota.html">Ciudades</a>
      <a href="index.html#contacto" class="nav-cta">Diagnóstico</a>
    </nav>
  </header>
  <div class="quick-links" aria-label="Accesos rápidos a servicios">${serviceLinks}</div>`;
}

function footer() {
  const cityLinks = cities.map((p) => `<li><a href="${p.slug}.html">${p.title}</a></li>`).join("");
  const serviceLinks = services.map((p) => `<li><a href="${p.slug}.html">${p.title}</a></li>`).join("");
  const nicheLinks = niches.map((p) => `<li><a href="${p.slug}.html">${p.title}</a></li>`).join("");
  return `<footer class="site-footer">
    <div class="footer-grid">
      <div>
        <a class="brand footer-brand" href="index.html"><span class="brand-mark" aria-hidden="true">DC</span><span>${brand}</span></a>
        <p>Gestión, creación, auditoría y optimización de campañas en Google Ads para empresas en Colombia.</p>
        <p class="small">Los resultados dependen del presupuesto, la competencia, la oferta, la landing y el proceso comercial.</p>
      </div>
      <div><h2>Servicios</h2><ul>${serviceLinks}</ul></div>
      <div><h2>Ciudades</h2><ul>${cityLinks}<li><a href="index.html#colombia">Bucaramanga y cobertura nacional</a></li></ul></div>
      <div><h2>Nichos</h2><ul>${nicheLinks}</ul></div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${brand}. Colombia.</span>
      <a href="mailto:${email}">${email}</a>
    </div>
  </footer>`;
}

function ctas(label = "Solicitar auditoría") {
  return `<div class="cta-row">
    <a class="btn primary" href="${cleanPhoneHref(whatsapp)}" target="_blank" rel="noopener">Hablar por WhatsApp</a>
    <a class="btn secondary" href="index.html#contacto">${label}</a>
  </div>`;
}

function head({ title, description, canonical, isHome = false }) {
  return `<!doctype html>
<html lang="es-CO">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${siteUrl}/assets/hero-google-ads-colombia.png">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="styles.css" as="style">
  <link rel="stylesheet" href="styles.css">
  <script type="application/ld+json">${jsonLd(isHome ? null : pageByTitle(title), isHome)}</script>
</head>`;
}

function pageByTitle(title) {
  return pages.find((p) => title.includes(p.title)) || pages[0];
}

function home() {
  const description = "Agencia Google Ads en Colombia para empresas: creación, administración, auditoría y optimización de campañas con enfoque comercial, medición y SEO.";
  const serviceCards = services.slice(1).map((p) => `<article class="card">
    <span class="eyebrow">${p.type}</span>
    <h3>${p.title}</h3>
    <p>${p.intro}</p>
    <a class="text-link" href="${p.slug}.html">Ver servicio</a>
  </article>`).join("");
  const cityCards = cities.map((p) => `<a class="pill-link" href="${p.slug}.html">${p.title}</a>`).join("");
  const nicheCards = niches.map((p) => `<a class="pill-link" href="${p.slug}.html">${p.title}</a>`).join("");
  const faqs = faqItems().map((item) => `<details><summary>${item.q}</summary><p>${item.a}</p></details>`).join("");
  return `${head({ title: `${brand} | Agencia Google Ads en Colombia`, description, canonical: pageUrl(), isHome: true })}
<body>
${nav("home")}
<main>
  <section class="hero">
    <div class="hero-content">
      <span class="eyebrow">Agencia Google Ads en Colombia</span>
      <h1>Campañas en Google Ads con estrategia, medición y criterio comercial</h1>
      <p class="hero-copy">Creamos, administramos, auditamos y optimizamos pauta digital en Google para empresas en Colombia que necesitan más claridad sobre su inversión y mejores oportunidades comerciales.</p>
      <ul class="check-list">
        <li>Configuración de conversiones y lectura de datos.</li>
        <li>Campañas para búsqueda, ecommerce, negocios locales y servicios.</li>
        <li>Reportes claros, acciones priorizadas y seguimiento continuo.</li>
      </ul>
      ${ctas("Solicitar auditoría")}
    </div>
    <figure class="hero-media">
      <img src="assets/hero-google-ads-colombia.png" alt="Mesa de trabajo con tablero de campañas digitales para empresas en Colombia" width="1024" height="1024" fetchpriority="high">
    </figure>
  </section>

  <section class="trust-band" aria-label="Señales de confianza">
    <p>Sin promesas infladas</p><p>Enfoque en medición</p><p>Contenido para Colombia</p><p>Optimización continua</p>
  </section>

  <section class="section" id="servicios">
    <div class="section-heading">
      <span class="eyebrow">Servicios</span>
      <h2>Gestión de Google Ads según la etapa de tu empresa</h2>
      <p>La cuenta no se trabaja igual cuando estás lanzando, escalando, corrigiendo errores o buscando rentabilidad por ciudad, producto o nicho.</p>
    </div>
    <div class="card-grid">${serviceCards}</div>
  </section>

  <section class="split-section">
    <div>
      <span class="eyebrow">Beneficios</span>
      <h2>Menos improvisación, más decisiones con datos</h2>
      <p>Una buena administración de Google Ads no consiste en subir anuncios y esperar. Implica entender intención de búsqueda, calidad del tráfico, oferta, landing, presupuesto y capacidad comercial.</p>
    </div>
    <div class="feature-list">
      <article><h3>Control de presupuesto</h3><p>Priorizamos campañas, términos y ubicaciones con más sentido comercial para tu operación.</p></article>
      <article><h3>Medición útil</h3><p>Configuramos conversiones para distinguir clics, leads, compras, llamadas y oportunidades reales.</p></article>
      <article><h3>Optimización continua</h3><p>Revisamos anuncios, consultas, audiencias, horarios, dispositivos y landings con frecuencia.</p></article>
    </div>
  </section>

  <section class="section tint" id="colombia">
    <div class="section-heading">
      <span class="eyebrow">SEO nacional</span>
      <h2>Agencia de Google Ads para empresas en Colombia</h2>
      <p>Trabajamos campañas para negocios con cobertura nacional y local en Bogotá, Medellín, Cali, Barranquilla, Cartagena, Bucaramanga y otras ciudades. Cada mercado tiene competencia, costos y hábitos de búsqueda distintos.</p>
    </div>
    <div class="pill-grid">${cityCards}</div>
  </section>

  <section class="split-section">
    <div>
      <span class="eyebrow">Proceso</span>
      <h2>Cómo trabajamos las campañas</h2>
      <p>El proceso empieza por entender el negocio, no por activar anuncios. Revisamos oferta, competencia, presupuesto, medición y capacidad de respuesta comercial.</p>
    </div>
    <ol class="steps">
      <li><strong>Diagnóstico:</strong> objetivos, cuenta actual, mercado, landing y conversiones.</li>
      <li><strong>Estrategia:</strong> estructura de campañas, palabras clave, audiencias, mensajes y presupuesto.</li>
      <li><strong>Implementación:</strong> configuración técnica, anuncios, extensiones, eventos y formularios.</li>
      <li><strong>Optimización:</strong> pruebas, exclusiones, ajustes de puja, reportes y siguientes acciones.</li>
    </ol>
  </section>

  <section class="section">
    <div class="section-heading">
      <span class="eyebrow">Decisión</span>
      <h2>Cuándo contratar una agencia de Google Ads</h2>
      <p>Conviene buscar apoyo cuando la inversión crece, la cuenta no tiene medición confiable, llegan contactos de baja calidad o el equipo interno necesita criterio especializado.</p>
    </div>
    <div class="card-grid three">
      <article class="card"><h3>Pagas clics, pero no sabes qué convierten</h3><p>Sin medición, cada ajuste se vuelve una suposición costosa.</p></article>
      <article class="card"><h3>Los leads no están calificados</h3><p>El problema puede estar en términos, anuncios, landing, oferta o seguimiento.</p></article>
      <article class="card"><h3>Quieres escalar con más control</h3><p>Antes de aumentar presupuesto, la cuenta debe mostrar señales confiables.</p></article>
    </div>
  </section>

  <section class="section tint">
    <div class="section-heading">
      <span class="eyebrow">Nichos</span>
      <h2>Campañas para industrias con intención comercial distinta</h2>
      <p>No es lo mismo generar contactos para abogados, médicos, clínicas, odontólogos, inmobiliarias o ecommerce. Ajustamos mensajes, segmentación y medición según el ciclo de decisión.</p>
    </div>
    <div class="pill-grid">${nicheCards}</div>
  </section>

  <section class="split-section">
    <div>
      <span class="eyebrow">Testimonios</span>
      <h2>Espacio para evidencia real</h2>
      <p>Cuando tengas testimonios verificables, este bloque puede reemplazarse por citas reales con nombre, cargo y autorización. Por ahora mantenemos mensajes prudentes y responsables.</p>
    </div>
    <div class="quote-grid">
      <blockquote>“La auditoría nos ayudó a entender dónde se estaba yendo el presupuesto y qué debíamos medir mejor.” <span>Testimonio por validar</span></blockquote>
      <blockquote>“El reporte fue claro para marketing y ventas, no solo una tabla de métricas.” <span>Testimonio por validar</span></blockquote>
    </div>
  </section>

  <section class="cta-panel">
    <h2>¿Quieres revisar si tu cuenta de Google Ads está bien aprovechada?</h2>
    <p>Solicita una auditoría inicial o una conversación de diagnóstico para entender oportunidades, riesgos y prioridades de optimización.</p>
    ${ctas("Pedir auditoría")}
  </section>

  <section class="section faq" id="faq">
    <div class="section-heading"><span class="eyebrow">FAQs</span><h2>Preguntas frecuentes</h2></div>
    ${faqs}
  </section>

  <section class="contact-section" id="contacto">
    <div>
      <span class="eyebrow">Contacto</span>
      <h2>Cuéntanos qué necesitas mejorar en Google Ads</h2>
      <p>Completa el formulario o escríbenos por WhatsApp. Te responderemos con una ruta de diagnóstico clara.</p>
      <p><strong>WhatsApp:</strong> <a href="${cleanPhoneHref(whatsapp)}" target="_blank" rel="noopener">${whatsapp}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    </div>
    <form class="contact-form" action="mailto:${email}" method="post" enctype="text/plain">
      <label for="nombre">Nombre</label>
      <input id="nombre" name="nombre" autocomplete="name" required>
      <label for="empresa">Empresa</label>
      <input id="empresa" name="empresa" autocomplete="organization">
      <label for="email">Email</label>
      <input id="email" name="email" type="email" autocomplete="email" required>
      <label for="telefono">Teléfono o WhatsApp</label>
      <input id="telefono" name="telefono" autocomplete="tel">
      <label for="mensaje">¿Qué quieres lograr o corregir?</label>
      <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
      <button class="btn primary" type="submit">Enviar solicitud</button>
    </form>
  </section>
</main>
${footer()}
<script src="script.js" defer></script>
</body>
</html>`;
}

function landing(page) {
  const description = `${page.title}: ${page.intro}`.slice(0, 158);
  const faqs = faqItems(page).map((item) => `<details><summary>${item.q}</summary><p>${item.a}</p></details>`).join("");
  const related = pages
    .filter((p) => p.slug !== page.slug)
    .slice(0, 6)
    .map((p) => `<a class="pill-link" href="${p.slug}.html">${p.title}</a>`)
    .join("");
  return `${head({ title: `${page.title} | ${brand}`, description, canonical: pageUrl(page.slug) })}
<body>
${nav()}
<main>
  <section class="subhero">
    <div>
      <nav class="breadcrumb" aria-label="Miga de pan"><a href="index.html">Inicio</a><span aria-hidden="true">/</span><span>${page.title}</span></nav>
      <span class="eyebrow">${page.type}</span>
      <h1>${page.h1}</h1>
      <p>${page.intro}</p>
      ${ctas("Solicitar diagnóstico")}
    </div>
  </section>

  <section class="split-section">
    <div>
      <span class="eyebrow">Enfoque</span>
      <h2>Qué incluye este servicio</h2>
      <p>Trabajamos con una metodología enfocada en intención de búsqueda, claridad de oferta, medición y optimización. La pauta debe conectarse con tu proceso comercial para que las métricas tengan sentido.</p>
    </div>
    <ul class="check-list large">
      ${page.points.map((point) => `<li>${point}</li>`).join("")}
      <li>Recomendaciones para landing, formularios, WhatsApp y seguimiento del equipo comercial.</li>
    </ul>
  </section>

  <section class="section tint">
    <div class="section-heading">
      <span class="eyebrow">Colombia</span>
      <h2>Campañas pensadas para empresas en Colombia</h2>
      <p>El costo por clic, la competencia y la intención cambian por ciudad e industria. Por eso revisamos Bogotá, Medellín, Cali, Barranquilla, Cartagena, Bucaramanga y otras zonas relevantes antes de definir presupuesto y estructura.</p>
    </div>
    <div class="card-grid three">
      <article class="card"><h3>Diagnóstico antes de invertir más</h3><p>Analizamos si la cuenta, la landing y la medición están listas para recibir presupuesto.</p></article>
      <article class="card"><h3>Mensajes con intención comercial</h3><p>Los anuncios deben filtrar mejor, responder objeciones y conectar con una oferta concreta.</p></article>
      <article class="card"><h3>Optimización responsable</h3><p>Evitamos promesas absolutas y buscamos mejorar decisiones con datos reales.</p></article>
    </div>
  </section>

  <section class="split-section">
    <div>
      <span class="eyebrow">Proceso</span>
      <h2>Ruta de trabajo</h2>
      <p>Podemos iniciar con auditoría, creación desde cero o administración mensual. La ruta depende del estado de la cuenta y del objetivo de negocio.</p>
    </div>
    <ol class="steps">
      <li><strong>Revisión:</strong> negocio, competencia, presupuesto, tracking y cuenta publicitaria.</li>
      <li><strong>Plan:</strong> prioridades, estructura, mensajes, landing y conversiones.</li>
      <li><strong>Ejecución:</strong> implementación, pruebas y ajustes iniciales.</li>
      <li><strong>Seguimiento:</strong> reportes, aprendizajes y optimización continua.</li>
    </ol>
  </section>

  <section class="notice">
    <h2>Resultados y expectativas</h2>
    <p>Google Ads puede ser un canal muy potente, pero los resultados dependen del presupuesto, la competencia, la oferta, la calidad de la landing, la configuración de conversiones y el proceso comercial. Por eso evitamos promesas absolutas y trabajamos con hipótesis, medición y mejora continua.</p>
  </section>

  <section class="section faq">
    <div class="section-heading"><span class="eyebrow">FAQs</span><h2>Preguntas frecuentes sobre ${page.title}</h2></div>
    ${faqs}
  </section>

  <section class="section">
    <div class="section-heading"><span class="eyebrow">Enlaces internos</span><h2>También te puede interesar</h2></div>
    <div class="pill-grid">${related}</div>
  </section>

  <section class="cta-panel">
    <h2>Solicita una revisión de tu pauta en Google</h2>
    <p>Cuéntanos tu ciudad, industria, presupuesto aproximado y objetivo. Te ayudaremos a definir el siguiente paso con claridad.</p>
    ${ctas("Ir al formulario")}
  </section>
</main>
${footer()}
<script src="script.js" defer></script>
</body>
</html>`;
}

writeFileSync("index.html", home());
for (const page of pages) {
  writeFileSync(`${page.slug}.html`, landing(page));
}
writeFileSync(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${pageUrl()}</loc></url>
${pages.map((page) => `  <url><loc>${pageUrl(page.slug)}</loc></url>`).join("\n")}
</urlset>
`,
);
writeFileSync(
  "robots.txt",
  `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
);
