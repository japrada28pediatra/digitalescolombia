export const siteUrl = "https://digitalescolombia.com";

export const projects = {
  "agencia-google-ads": {
    exclude: [
      "agencia-google-ads-barranquilla.html", "agencia-google-ads-bogota.html",
      "agencia-google-ads-cali.html", "agencia-google-ads-cartagena.html",
      "agencia-google-ads-medellin.html"
    ],
    redirects: {
      "google-ads-para-abogados.html": "google-ads-para-abogados-colombia.html",
      "google-ads-para-ecommerce.html": "google-ads-para-ecommerce-colombia.html",
      "google-ads-para-medicos.html": "google-ads-para-medicos-colombia.html"
    },
    excludeRegex: [/^google-ads-para-.+\.html$/]
  },
  "agencia-seo-geo-colombia": {
    include: ["index.html"],
    exclude: [
      "seo-para-abogados-colombia.html", "seo-para-ecommerce-colombia.html",
      "seo-para-hoteles-colombia.html", "seo-para-medicos-colombia.html"
    ]
  },
  "alojamiento-glamping-lamesa": {
    include: ["index.html"],
    excludePrefixes: ["Glamping Realismo Mágico __files/"],
    exclude: [
      "glamping-cerca-de-bogota.html", "glamping-con-jacuzzi-la-mesa.html",
      "glamping-romantico-la-mesa.html", "planes-de-pareja-la-mesa.html"
    ]
  },
  "cirujano-maxilofacial-en-bogota": {
    disabled: true,
    exclude: [
      "404.html", "about.html", "blog2.html", "doctor-details.html", "doctors.html",
      "index3.html", "index4.html", "shortcode.html", "single-post.html",
      "single-service.html", "time-table.html"
    ]
  },
  "dentista-bogota-kennedy": {
    disabled: true,
    exclude: [
      "about-us.html", "appointment.html", "blog-single-post.html", "departments-single.html",
      "departments.html", "doctors-grid.html", "doctors-modern.html", "doctors-single-doctor1.html",
      "doctors-single-doctor2.html", "doctors-standard.html", "doctors-timetable.html", "faqs.html",
      "gallery.html", "home-classic.html", "home-dentist.html", "home-modern.html",
      "home-pharmacy.html", "pricing.html", "services-single.html", "shop-single-product.html",
      "shop.html", "shopping-cart.html"
    ],
    redirects: {
      "contact-us.html": "contacto.html",
      "services.html": "servicios.html",
      "blanqueamiento-dental-kennedy.html": "blanqueamiento-kennedy.html"
    }
  },
  "derecho-penal-bogota": { disabled: true, exclude: ["gracias.html"] },
  "digital-growth": {},
  "endocrinologo-infantil-colombia": {
    disabled: true,
    exclude: ["blog-single-post.html", "googleb59b86c76d0ff306.html"]
  },
  "entrenador-salitre": {
    disabled: true,
    exclude: [
      "about.html", "account.html", "blog-detail.html", "blog-list.html", "cart.html",
      "checkout.html", "coming-soon.html", "contact.html", "error.html", "index1.html",
      "index2.html", "login.html", "orders.html", "password-change.html", "password-lost.html",
      "personal-info.html", "pricing.html", "program-detail.html", "search.html", "shop-detail.html",
      "shop.html", "signup.html", "testimonial.html", "trainer-detail.html", "trainer-list.html"
    ]
  },
  "estetica-barcelona": {},
  "estudio-abogados-bogota-colombia": {
    disabled: true,
    redirects: {
      "abogado-civil-bogota.html": "/firma-abogados-bogota/abogado-civil-bogota.html",
      "abogado-comercial-bogota.html": "/firma-abogados-bogota/abogado-comercial-bogota.html",
      "abogado-de-familia-bogota.html": "/firma-abogados-bogota/abogado-de-familia-bogota.html",
      "abogado-inmobiliario-bogota.html": "/firma-abogados-bogota/abogado-inmobiliario-bogota.html",
      "abogado-laboral-bogota.html": "/firma-abogados-bogota/abogado-laboral-bogota.html",
      "abogado-penal-bogota.html": "/firma-abogados-bogota/abogado-penal-bogota.html"
    }
  },
  "estudio-juridico-bogota": {
    disabled: true,
    redirects: {
      "abogado-civil-bogota.html": "/firma-abogados-bogota/abogado-civil-bogota.html",
      "abogado-comercial-bogota.html": "/firma-abogados-bogota/abogado-comercial-bogota.html",
      "abogado-de-familia-bogota.html": "/firma-abogados-bogota/abogado-de-familia-bogota.html",
      "abogado-inmobiliario-bogota.html": "/firma-abogados-bogota/abogado-inmobiliario-bogota.html",
      "abogado-laboral-bogota.html": "/firma-abogados-bogota/abogado-laboral-bogota.html",
      "abogado-penal-bogota.html": "/firma-abogados-bogota/abogado-penal-bogota.html",
      "index.html": "/firma-abogados-bogota/"
    }
  },
  "estudio-juridico-medellin": {
    disabled: true,
    redirects: {
      "abogado-civil-medellin.html": "/firma-abogados-medellin/abogado-civil-medellin.html",
      "abogado-comercial-medellin.html": "/firma-abogados-medellin/abogado-comercial-medellin.html",
      "abogado-de-familia-medellin.html": "/firma-abogados-medellin/abogado-de-familia-medellin.html",
      "abogado-inmobiliario-medellin.html": "/firma-abogados-medellin/abogado-inmobiliario-medellin.html",
      "abogado-laboral-medellin.html": "/firma-abogados-medellin/abogado-laboral-medellin.html",
      "abogado-penal-medellin.html": "/firma-abogados-medellin/abogado-penal-medellin.html",
      "index.html": "/firma-abogados-medellin/"
    }
  },
  "finanzas-personales": {
    externalRedirects: {
      "/finanzas-personales/web/": "/finanzas-personales/",
      "/finanzas-personales/web/blog/": "/finanzas-personales/blog/",
      "/finanzas-personales/web/blog/gastos-invisibles.html": "/finanzas-personales/blog/gastos-invisibles.html",
      "/finanzas-personales/web/blog/habitos-ahorro.html": "/finanzas-personales/blog/habitos-ahorro.html",
      "/finanzas-personales/web/blog/metas-financieras.html": "/finanzas-personales/blog/metas-financieras.html",
      "/finanzas-personales/web/blog/presupuesto-mensual.html": "/finanzas-personales/blog/presupuesto-mensual.html"
    }
  },
  "firma-abogados-barranquilla": {
    disabled: true,
    exclude: [
      "careers.html", "events-calendar.html", "events-grid.html", "events-list.html", "header-style2.html",
      "header-style3.html", "news-grid.html", "news-list.html", "payment-terms.html", "privacy-policy.html",
      "shortcodes.html", "single-event.html", "single-news.html", "single-service.html", "staff-single.html",
      "testimonials.html", "trainee-solicitors.html", "typography.html", "vacancies.html", "website-terms.html"
    ]
  },
  "firma-abogados-bogota": {
    disabled: true,
    include: [
      "index.html", "abogado-civil-bogota.html", "abogado-comercial-bogota.html",
      "abogado-de-familia-bogota.html", "abogado-inmobiliario-bogota.html",
      "abogado-laboral-bogota.html", "abogado-penal-bogota.html"
    ],
    exclude: [
      "404page.html", "attorney-single-page.html", "attorneys-list-page.html", "bank-financial.html",
      "blog-fullwidth.html", "blog-masonry-fullwidth.html", "blog-masonry-with-sidebar.html",
      "blog-masonry-without-sidebar.html", "blog-with-left-sidebar.html", "blog-with-right-sidebar.html",
      "business-law.html", "coming-soon.html", "family-law.html", "index-2.html", "index-3.html",
      "index-4.html", "post-with-image.html", "post-with-slideshow.html", "post-with-video.html",
      "post-with-vimeo-video.html", "shortcodes.html", "typography.html"
    ]
  },
  "firma-abogados-cartagena": {
    disabled: true,
    exclude: [
      "404.html", "blog-details.html", "coming-soon.html", "index2.html", "index3.html", "index4.html"
    ]
  },
  "firma-abogados-medellin": {
    disabled: true,
    include: [
      "index.html", "abogado-civil-medellin.html", "abogado-comercial-medellin.html",
      "abogado-de-familia-medellin.html", "abogado-inmobiliario-medellin.html",
      "abogado-laboral-medellin.html", "abogado-penal-medellin.html"
    ],
    exclude: [
      "about-me.html", "about-us-2.html", "attorneys-2-cols.html", "attorneys-4-cols.html",
      "attorneys-single-page.html", "attorneys.html", "blog-single-post.html", "cases-single-page.html",
      "contact-2.html", "contact-3.html", "home-2.html", "home-3.html", "home-4.html", "home-video.html",
      "practice-single-page.html", "pricing.html", "top-header-2.html", "top-header-3.html"
    ]
  },
  "gastroenterologo-infantil-colombia": { disabled: true, exclude: ["blog-single-post.html"] },
  "hemato-oncologia-pediatra-colombia": { disabled: true },
  "hotel-en-guaduas": {
    include: ["index.html"],
    exclude: [
      "escapada-cerca-de-bogota.html", "hotel-con-piscina-en-guaduas.html",
      "hotel-familiar-en-guaduas.html", "hotel-romantico-en-guaduas.html",
      "pasadia-en-guaduas.html"
    ]
  },
  "neumologia-infantil-colombia": { disabled: true },
  "polarizados-nanoceramico-bogota": {
    excludeRegex: [
      /^vehiculos\/(?!index\.html$).+\/index\.html$/,
      /^zonas\/(?!index\.html$).+\/index\.html$/
    ]
  },
  "psicologo-salitre-bogota": {
    disabled: true,
    excludePrefixes: ["fonts/", "plugins/"],
    exclude: ["blog-single.html", "service-details.html"]
  },
  "reparacion-electrodomesticos-medellin": { disabled: true, exclude: ["gracias.html"] },
  "shopify-studio": {
    exclude: [
      "desarrollo-shopify-colombia.html", "migracion-woocommerce-a-shopify.html",
      "optimizacion-velocidad-shopify.html", "seo-para-shopify.html",
      "shopify-plus-colombia.html"
    ]
  },
  "web": {
    exclude: ["agencia-seo-colombia.html", "diseno-wordpress-colombia.html"],
    excludeRegex: [
      /^diseno-web-(?:turismo-)?(?:armenia|barranquilla|bogota|bucaramanga|cali|cartagena|cucuta|ibague|leticia|manizales|medellin|mompox|monteria|neiva|pasto|pereira|popayan|san-andres|santa-marta|valledupar|villa-de-leyva|villavicencio)\.html$/
    ]
  }
};

export function isExcluded(project, relativePath) {
  const config = projects[project] || {};
  if (config.disabled) return true;
  if (config.include && !config.include.includes(relativePath)) return true;
  if ((config.exclude || []).includes(relativePath)) return true;
  if (Object.hasOwn(config.redirects || {}, relativePath)) return true;
  if ((config.excludeRegex || []).some((pattern) => pattern.test(relativePath))) return true;
  return (config.excludePrefixes || []).some((prefix) => relativePath.startsWith(prefix));
}
