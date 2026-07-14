<?php
$currentPage = basename($_SERVER['PHP_SELF']);
$siteName = 'OPKLIM Abogados';
$pageConfig = [
    'index.php' => [
        'title' =&gt; 'Abogados en Bogotá | Derecho corporativo, laboral y civil | OPKLIM',
        'description' =&gt; 'Despacho jurídico en Bogotá, Colombia, con asesoría en derecho laboral, civil, comercial, societario y de familia para empresas y personas naturales.',
    ],
    'index-2.php' =&gt; [
        'title' =&gt; 'Firma de abogados en Bogotá | Consultoría jurídica | OPKLIM',
        'description' =&gt; 'Consultoría jurídica en Bogotá para empresas y familias: prevención de riesgos, conciliación, contratos y defensa legal con atención cercana.',
    ],
    'about.php' =&gt; [
        'title' =&gt; 'Nosotros | OPKLIM Abogados en Bogotá',
        'description' =&gt; 'Conoce a OPKLIM Abogados, un despacho jurídico en Bogotá enfocado en estrategia, prevención de riesgos y acompañamiento legal cercano.',
    ],
    'service-1.php' =&gt; [
        'title' =&gt; 'Áreas de práctica | OPKLIM Abogados en Bogotá',
        'description' =&gt; 'Explora nuestras áreas de práctica en Bogotá: laboral, civil, comercial, societario, familiar e inmobiliario.',
    ],
    'service-2.php' =&gt; [
        'title' =&gt; 'Servicios jurídicos | OPKLIM Abogados Bogotá',
        'description' =&gt; 'Servicios jurídicos para empresas y personas en Bogotá con enfoque en consulta inicial, negociación, conciliación y litigio.',
    ],
    'contact.php' =&gt; [
        'title' =&gt; 'Contacto | OPKLIM Abogados en Bogotá',
        'description' =&gt; 'Agenda una consulta con OPKLIM Abogados en Bogotá. Atención virtual y presencial para empresas y personas naturales.',
    ],
    'blog-classic.php' =&gt; [
        'title' =&gt; 'Blog jurídico | OPKLIM Abogados Bogotá',
        'description' =&gt; 'Artículos y guías de OPKLIM Abogados sobre derecho laboral, civil, comercial y decisiones legales para empresas y personas en Bogotá.',
    ],
    'blog-grid.php' =&gt; [
        'title' =&gt; 'Artículos legales | OPKLIM Abogados Bogotá',
        'description' =&gt; 'Recursos legales para entender contratos, conciliaciones, conflictos laborales y asuntos civiles con enfoque práctico para Colombia.',
    ],
    'blog-post.php' =&gt; [
        'title' =&gt; 'Guía jurídica para empresas y personas | OPKLIM Bogotá',
        'description' =&gt; 'Guía práctica de OPKLIM Abogados para tomar decisiones legales con claridad, prevención de riesgos y acompañamiento profesional.',
    ],
    'team-member.php' =&gt; [
        'title' =&gt; 'Equipo jurídico | OPKLIM Abogados en Bogotá',
        'description' =&gt; 'Conoce el equipo de OPKLIM Abogados en Bogotá y su enfoque en asesoría legal estratégica para empresas y personas naturales.',
    ],
];
$pageTitle = $pageConfig[$currentPage]['title'] ?? 'OPKLIM Abogados | Firma legal en Bogotá, Colombia';
$pageDescription = $pageConfig[$currentPage]['description'] ?? 'Despacho jurídico en Bogotá, Colombia, con foco en estrategia legal, prevención de riesgos y representación de alto nivel.';
$pageKeywords = 'abogados en Bogotá, firma legal Bogotá, derecho laboral Bogotá, derecho civil Bogotá, derecho comercial Bogotá, derecho societario, derecho de familia, asesoría jurídica Colombia';
$pageUrlMap = [
    'index.php' =&gt; 'index.php',
    'index-2.php' =&gt; 'index-2.php',
    'about.php' =&gt; 'about.php',
    'service-1.php' =&gt; 'service-1.php',
    'service-2.php' =&gt; 'service-2.php',
    'contact.php' =&gt; 'contact.php',
    'blog-classic.php' =&gt; 'blog-classic.php',
    'blog-grid.php' =&gt; 'blog-grid.php',
    'blog-post.php' =&gt; 'blog-post.php',
    'team-member.php' =&gt; 'team-member.php',
];
$pageUrl = $pageUrlMap[$currentPage] ?? 'index.php';
$scheme = (!empty($_SERVER['HTTPS']) &amp;&amp; $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'digitalescolombia.com';
$projectPath = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/estudio-abogados-bogota-colombia/index.php')), '/');
$baseUrl = $scheme . '://' . $host . ($projectPath === '/' ? '' : $projectPath);
$canonicalUrl = rtrim($baseUrl, '/') . '/' . $pageUrl;
$legalServiceSchema = [
    '@context' =&gt; 'https://schema.org',
    '@type' =&gt; 'LegalService',
    'name' =&gt; $siteName,
    'url' =&gt; $canonicalUrl,
    'areaServed' =&gt; [
        ['@type' =&gt; 'City', 'name' =&gt; 'Bogotá'],
        ['@type' =&gt; 'Country', 'name' =&gt; 'Colombia'],
    ],
    'serviceType' =&gt; [
        'Derecho laboral',
        'Derecho civil',
        'Derecho comercial',
        'Derecho societario',
        'Derecho de familia',
        'Conciliación y litigio',
    ],
    'address' =&gt; [
        '@type' =&gt; 'PostalAddress',
        'addressLocality' =&gt; 'Bogotá',
        'addressRegion' =&gt; 'Bogotá D.C.',
        'addressCountry' =&gt; 'CO',
    ],
];
$faqSchema = null;
if ($currentPage === 'index.php' || $currentPage === 'service-2.php') {
    $faqSchema = [
        '@context' =&gt; 'https://schema.org',
        '@type' =&gt; 'FAQPage',
        'mainEntity' =&gt; [
            [
                '@type' =&gt; 'Question',
                'name' =&gt; '¿Atienden empresas y personas naturales en Bogotá?',
                'acceptedAnswer' =&gt; [
                    '@type' =&gt; 'Answer',
                    'text' =&gt; 'Sí. Brindamos asesoría jurídica para empresas, emprendedores y personas naturales en Bogotá y de forma virtual en todo Colombia.',
                ],
            ],
            [
                '@type' =&gt; 'Question',
                'name' =&gt; '¿Ofrecen consulta inicial virtual?',
                'acceptedAnswer' =&gt; [
                    '@type' =&gt; 'Answer',
                    'text' =&gt; 'Sí. Podemos revisar tu caso por videollamada o por teléfono para definir el mejor camino jurídico desde el primer contacto.',
                ],
            ],
            [
                '@type' =&gt; 'Question',
                'name' =&gt; '¿En qué áreas se especializa el despacho?',
                'acceptedAnswer' =&gt; [
                    '@type' =&gt; 'Answer',
                    'text' =&gt; 'Trabajamos principalmente derecho laboral, civil, comercial, societario, de familia, inmobiliario y conciliación.',
                ],
            ],
            [
                '@type' =&gt; 'Question',
                'name' =&gt; '¿Cómo funciona el acompañamiento en un caso?',
                'acceptedAnswer' =&gt; [
                    '@type' =&gt; 'Answer',
                    'text' =&gt; 'Primero entendemos tu situación, luego definimos estrategia, documentación y pasos de negociación o litigio, según lo que tu caso requiera.',
                ],
            ],
        ],
    ];
}
$schemaData = [$legalServiceSchema];
if ($faqSchema) {
    $schemaData[] = $faqSchema;
}
?&gt;
<!DOCTYPE html>

<html lang="es">
<meta content="text/html;charset=utf-8" http-equiv="content-type"/>
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta content="ie=edge" http-equiv="X-UA-Compatible"/>
<title>Head | Estudio de abogados en Bogotá Colombia</title>
<meta content="&lt;?php echo htmlspecialchars($pageDescription, ENT_QUOTES, 'UTF-8'); ?&gt;" name="description"/>
<meta content="&lt;?php echo htmlspecialchars($pageKeywords, ENT_QUOTES, 'UTF-8'); ?&gt;" name="keywords"/>
<meta content="&lt;?php echo htmlspecialchars($siteName, ENT_QUOTES, 'UTF-8'); ?&gt;" name="author"/>
<meta content="index,follow,max-image-preview:large" name="robots"/>
<meta content="es_CO" property="og:locale"/>
<meta content="website" property="og:type"/>
<meta content="&lt;?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?&gt;" property="og:title"/>
<meta content="&lt;?php echo htmlspecialchars($pageDescription, ENT_QUOTES, 'UTF-8'); ?&gt;" property="og:description"/>
<meta content="&lt;?php echo htmlspecialchars($siteName, ENT_QUOTES, 'UTF-8'); ?&gt;" property="og:site_name"/>
<meta content="&lt;?php echo htmlspecialchars($canonicalUrl, ENT_QUOTES, 'UTF-8'); ?&gt;" property="og:url"/>
<meta content="assets/images/slider/slider-1-1.jpg" property="og:image"/>
<meta content="summary_large_image" name="twitter:card"/>
<meta content="&lt;?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?&gt;" name="twitter:title"/>
<meta content="&lt;?php echo htmlspecialchars($pageDescription, ENT_QUOTES, 'UTF-8'); ?&gt;" name="twitter:description"/>
<meta content="assets/images/slider/slider-1-1.jpg" name="twitter:image"/>
<link href="https://digitalescolombia.com/estudio-abogados-bogota-colombia/parts/layout/head.php" rel="canonical"/>
<!-- favicon -->
<link href="assets/images/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"/>
<link href="assets/images/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"/>
<link href="assets/images/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"/>
<link href="assets/images/favicon/site.webmanifest" rel="manifest"/>
<meta content="#e0a965" name="theme-color"/>
<meta content="#e0a965" name="msapplication-navbutton-color"/>
<!-- iOS Safari -->
<meta content="#e0a965" name="apple-mobile-web-app-status-bar-style"/>
<link href="https://fonts.googleapis.com/css?family=Oxygen:300,400,700&amp;display=swap" rel="stylesheet"/>
<!-- css files -->
<link href="assets/css/animate.css" rel="stylesheet"/>
<link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
<link href="assets/css/bootstrap-datepicker.min.css" rel="stylesheet"/>
<link href="assets/css/bootstrap-select.min.css" rel="stylesheet"/>
<link href="assets/css/hover-min.css" rel="stylesheet"/>
<link href="assets/css/magnific-popup.css" rel="stylesheet"/>
<link href="assets/css/owl.carousel.min.css" rel="stylesheet"/>
<link href="assets/css/owl.theme.default.min.css" rel="stylesheet"/>
<link href="assets/plugins/opklim-icons/style.css" rel="stylesheet"/>
<link href="assets/plugins/fontawesome-5/css/all.min.css" rel="stylesheet"/>
<link href="assets/css/nouislider.css" rel="stylesheet"/>
<link href="assets/css/nouislider.pips.css" rel="stylesheet"/>
<link href="assets/css/jquery.bootstrap-touchspin.min.css" rel="stylesheet"/>
<link href="assets/css/jquery.mCustomScrollbar.min.css" rel="stylesheet"/>
<link href="assets/css/style.css" rel="stylesheet"/>
<link href="assets/css/responsive.css" rel="stylesheet"/>
<?php foreach ($schemaData as $schemaItem): ?>
<script type="application/ld+json"><?php echo json_encode($schemaItem, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES); ?></script>
<?php endforeach; ?>
</head>
<body><h1 class="seo-h1">Head</h1>
<div class="preloader"><span><img alt="Awesome Image" src="assets/images/resources/preloader.png"/></span></div>
<div class="page-wrapper">
</div><section class="dc-seo-enhancement dc-legal-eeat" style="padding:32px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2>Orientación legal responsable</h2><p>La información de esta página es general y no reemplaza una consulta jurídica personalizada. Cada caso requiere revisar documentos, fechas, jurisdicción, pruebas disponibles y objetivos del cliente antes de definir una estrategia.</p><ul><li>Preparar contratos, comunicaciones, soportes y documentos relevantes ayuda a una primera evaluación más clara.</li><li>No se deben prometer resultados; el alcance depende de los hechos, la prueba y la normativa aplicable.</li><li>Una asesoría inicial permite ordenar riesgos, alternativas y próximos pasos.</li></ul></div></section>
<section class="dc-internal-links" style="padding:28px 0;background:#fff;border-top:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2 style="font-size:1.35rem;margin-bottom:12px;">Explorar servicios relacionados</h2><p style="margin-bottom:12px;">También podés revisar otros recursos del ecosistema Digitales Colombia:</p><p><a href="/marketing-digital-colombia.html">Marketing digital</a> · <a href="/salud-en-colombia.html">Salud en Colombia</a> · <a href="/abogados-en-colombia.html">Abogados en Colombia</a> · <a href="/servicios-locales-bogota.html">Servicios locales Bogotá</a> · <a href="/alojamientos-y-turismo-colombia.html">Alojamientos y turismo</a></p></div></section>
<a class="dc-floating-whatsapp" href="https://wa.me/573180435023" aria-label="Consultar por WhatsApp" style="position:fixed;right:18px;bottom:18px;z-index:9999;background:#22c55e;color:#07131f;padding:12px 16px;border-radius:999px;font-weight:700;text-decoration:none;box-shadow:0 10px 25px rgba(0,0,0,.18);">WhatsApp</a>
</body></html>