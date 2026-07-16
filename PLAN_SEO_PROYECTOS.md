# Plan SEO de todos los proyectos

Fecha de auditoría y primera implementación: 14 de julio de 2026  
Repositorio: `digitalescolombia`  
Alcance actualizado: 27 proyectos, 624 archivos HTML y sus sitemaps, metadatos, contenido, enlaces y recursos.

## Estado de ejecución al 14 de julio de 2026

La primera fase técnica ya está aplicada en el repositorio. El objetivo inmediato fue impedir que las plantillas, páginas duplicadas, datos ficticios y páginas programáticas débiles sigan compitiendo en buscadores mientras se prepara contenido verificable.

- [x] Se creó la portada raíz y los cinco hubs temáticos que antes generaban enlaces rotos.
- [x] Se creó `robots.txt`, `sitemap.xml` y `sitemap-index.xml` en la raíz.
- [x] Se regeneraron los sitemaps de los 27 proyectos para publicar solamente URLs autorizadas.
- [x] Se añadieron `noindex, follow` y canonicals de contención a las páginas excluidas.
- [x] Se creó `REDIRECTS_SEO.csv` con 32 decisiones de consolidación.
- [x] Se creó una configuración central y scripts reproducibles de aplicación y auditoría SEO.
- [x] Se corrigieron enlaces locales rotos repetidos y referencias HTTP conocidas.
- [x] Se retiró la copia externa de 6,7 MB del proyecto de glamping y se conservaron localmente solo los nueve recursos realmente utilizados.
- [x] Se rehicieron las portadas de glamping y hotel con contenido orientado al usuario.
- [x] La auditoría automática termina con **0 errores y 0 advertencias** sobre el conjunto actualmente indexable.

### Inventario controlado

| Estado | Cantidad | Decisión actual |
|---|---:|---|
| Páginas de proyecto indexables | 51 | Permanecen en sitemaps y pasan los controles técnicos. |
| Páginas de proyecto contenidas | 573 | Permanecen en el repositorio con `noindex, follow`; requieren reescritura, consolidación o retirada. |
| Páginas raíz indexables | 4 | Portada, marketing, servicios locales y alojamientos/turismo. |
| Hubs raíz en revisión | 2 | Salud y abogados tienen `noindex` hasta verificar profesionales y proyectos de destino. |
| Redirecciones documentadas | 32 | Nueve están listas para 301 y 23 esperan que el destino legal/odontológico sea publicable. |

`Noindex` es una medida de contención, no la finalización editorial del proyecto. No se deben reactivar páginas solo porque tengan title, descripción y H1: primero deben tener una oferta real, datos comprobables y una intención distinta.

### Proyectos que permanecen desactivados

Se mantienen completamente fuera de los sitemaps: cirujano maxilofacial, dentista en Kennedy, derecho penal, endocrinología infantil, entrenador en Salitre, los siete proyectos jurídicos, gastroenterología infantil, hemato-oncología pediátrica, neumología infantil, psicología en Salitre y reparación de electrodomésticos. Las causas son datos de contacto ficticios, identidades o credenciales ausentes, contenido demo, duplicación exacta o riesgo especial por tratar temas médicos y legales.

### Información necesaria para continuar

- Identidad real de cada profesional o empresa, NIT cuando corresponda y responsable editorial.
- Teléfono, correo, dirección, horarios y áreas reales de cobertura.
- En salud y derecho: registro profesional, especialidad, formación, experiencia, autor y revisor del contenido.
- Servicios realmente prestados, precios o forma de cotización, políticas y evidencia propia que permita diferenciar ciudades y servicios.
- Plataforma final de hosting para convertir el manifiesto `REDIRECTS_SEO.csv` en reglas HTTP 301 reales.
- Acceso a Search Console y analítica para medir indexación, canónicas, errores y conversiones después del despliegue.

### Comandos de mantenimiento

```bash
node scripts/apply-seo-indexing.mjs
node scripts/seo-audit.mjs --strict
```

El primer comando reaplica la política de indexación, canonicals, sitemaps y manifiesto de redirecciones. El segundo bloquea una entrega si reaparecen metadatos faltantes, duplicados, placeholders, referencias inseguras, enlaces locales rotos o URLs incorrectas en los sitemaps.

## Objetivo

Convertir el repositorio en una red de proyectos útil, rastreable y sostenible. El trabajo no consistirá en crear más páginas por ciudad o servicio hasta sanear el inventario actual, consolidar duplicados y demostrar que cada URL indexable responde a una intención distinta.

## Conclusiones generales de la auditoría inicial

Los puntos siguientes conservan el diagnóstico de partida. La sección de estado de ejecución indica cuáles ya fueron contenidos o resueltos técnicamente; el plan por proyecto describe el trabajo editorial que aún falta.

1. **La arquitectura raíz estaba incompleta.** Casi todos los proyectos enlazaban estas cinco páginas, pero ninguna existía en el repositorio:

   - `/marketing-digital-colombia.html`
   - `/salud-en-colombia.html`
   - `/abogados-en-colombia.html`
   - `/servicios-locales-bogota.html`
   - `/alojamientos-y-turismo-colombia.html`

   La portada, los hubs y el sitemap raíz ya fueron creados. Salud y abogados permanecen en `noindex` mientras no haya proyectos profesionales verificables a los que dirigir al usuario.

2. **Los `robots.txt` dentro de cada carpeta no sustituyen un `robots.txt` en la raíz del dominio.** Ya se crearon `/robots.txt` y `/sitemap-index.xml` centrales. Los robots internos pueden conservarse como documentación, pero no controlan el host completo.

3. **Los sitemaps contenían recursos que no son páginas de búsqueda.** Se encontraron archivos de PHPMailer, procesos de formularios, componentes PHP, APIs y demos. Los sitemaps regenerados listan solamente las URLs que la configuración central autoriza como indexables.

4. **Hay competencia interna grave entre proyectos jurídicos.** Se detectaron 13 grupos de contenido exactamente duplicado entre proyectos, que suman 32 páginas. Por ahora todos esos proyectos están en `noindex` y las consolidaciones propuestas están documentadas, pero no deben ejecutarse hacia destinos que todavía contienen información demo.

5. **Las páginas programáticas son el mayor riesgo SEO.** Hay clústeres con 80 % a 99 % de similitud en abogados, salud, hoteles, Shopify, Google Ads, diseño web, glamping, psicología y polarizados. Cambiar ciudad y palabra clave no constituye contenido distinto.

6. **Los proyectos médicos, legales y financieros necesitan señales reales de confianza.** No debemos publicar identidades, direcciones, teléfonos, credenciales, testimonios ni resultados que no estén verificados. El schema debe describir información real; no debe utilizarse para compensar contenido de plantilla.

7. **Hay recursos heredados de plantillas.** Existen Lorem Ipsum, ThemeForest, páginas alternativas, librerías antiguas, enlaces HTTP, capturas externas y miles de archivos de plugins. Debemos conservar únicamente lo que use el sitio final.

## Prioridades

- **P0 — Bloqueante:** contenido demo, duplicado exacto, datos falsos o sitemap inseguro. Resolver antes de impulsar indexación.
- **P1 — Alto impacto:** páginas programáticas demasiado similares, contenido insuficiente, arquitectura y enlaces rotos.
- **P2 — Mejora:** rendimiento, assets, schema, enlazado editorial y optimización de conversión.

## Reglas para todos los proyectos

- [ ] Definir una URL canónica por intención de búsqueda.
- [ ] Crear una matriz `conservar / reescribir / 301 / 410 / noindex` antes de editar metadatos.
- [ ] No redirigir páginas sin equivalente a la home. Usar 410 cuando se retire una demo sin sustituto.
- [ ] Excluir de sitemaps formularios, PHP, demos, resultados internos, cuentas, carritos y páginas de agradecimiento.
- [ ] Dejar en el sitemap únicamente URLs indexables con respuesta 200 y canonical hacia sí mismas.
- [ ] Verificar que cada página tenga title, descripción, un H1 y canonical únicos entre las URLs indexables.
- [ ] Corregir enlaces internos hacia destinos inexistentes.
- [ ] Verificar NAP, credenciales, autores, revisores, testimonios y afirmaciones comerciales.
- [ ] Actualizar o retirar dependencias antiguas y recursos HTTP.
- [ ] Medir similitud antes de publicar. Como control interno, revisar manualmente cualquier par con 65 % o más de similitud por shingles de cinco palabras. Este es un umbral de QA, no una regla de Google.
- [ ] Añadir pruebas automáticas para sitemap, canonical, metadatos, enlaces rotos y contenido duplicado.

## Arquitectura común que vamos a construir

### Capa raíz

- [x] Crear una página de entrada o índice del ecosistema.
- [x] Crear los cinco hubs enlazados actualmente o reemplazar esos enlaces por una arquitectura aprobada.
- [x] Crear `/robots.txt` en la raíz.
- [x] Crear `/sitemap-index.xml` con referencia a sitemaps depurados.
- [x] Definir una primera navegación y relación entre proyecto y categoría; los breadcrumbs internos se completarán durante cada reescritura.
- [x] Evitar que los hubs sean simples listados de enlaces: incluyen contexto, criterios y rutas útiles.

### Datos y seguimiento

- [ ] Registrar el inventario inicial de Search Console: indexadas, no indexadas, canónica elegida y soft 404.
- [ ] Separar métricas por directorio y clúster temático.
- [ ] Medir leads reales, no solamente impresiones y posiciones.
- [ ] Revisar a 2, 4, 8 y 12 semanas después de publicar redirecciones y sitemaps nuevos.

---

## Plan por proyecto

### 1. `agencia-google-ads` — P1

**Estado:** 24 páginas HTML, metadatos completos y JSON-LD válido. El contenido es extenso, pero hay 30 pares con más de 75 % de similitud y un máximo de 96 %. Se repiten variantes como `google-ads-para-abogados.html` y `google-ads-para-abogados-colombia.html`. Las 24 páginas enlazan los hubs raíz inexistentes.

**Vamos a trabajar en:**

- [ ] Definir una página principal para cada intención duplicada: abogados, médicos y ecommerce.
- [ ] Aplicar 301 a variantes que no tengan una intención realmente diferente.
- [ ] Diferenciar páginas de ciudades con casos, cobertura, contexto comercial y oferta local comprobable.
- [ ] Reducir bloques repetidos de agencia, metodología y FAQ.
- [ ] Corregir los enlaces hacia hubs raíz y `/sitemap.xml`.
- [ ] Mantener el sitemap actual solo después de aprobar las 24 URLs como canónicas.

### 2. `agencia-seo-geo-colombia` — P1

**Estado:** 7 páginas técnicamente completas, pero 6 tienen menos de 250 palabras útiles después de retirar navegación y footer. Hay 15 pares con más de 75 % de similitud y un máximo de 97 %.

**Vamos a trabajar en:**

- [ ] Definir con claridad la diferencia entre SEO, GEO y posicionamiento en asistentes.
- [ ] Reescribir cada vertical con problemas, procesos, entregables y ejemplos propios.
- [ ] Consolidar páginas que solo cambien el sector.
- [ ] Añadir metodología, medición, limitaciones y casos verificables.
- [ ] Corregir los enlaces hacia los hubs raíz.

### 3. `alojamiento-glamping-lamesa` — P0

**Estado:** 18 páginas reales correctamente etiquetadas y 3 HTML técnicos dentro de `Glamping Realismo Mágico __files`. Esa captura pesa 6,7 MB, contiene 78 archivos y concentra las 47 imágenes con `alt` vacío. Entre las páginas reales hay 16 pares con más de 75 % de similitud; `glamping-con-jacuzzi` y `glamping-romantico` llegan a 98 %.

**Vamos a trabajar en:**

- [ ] Eliminar completamente `Glamping Realismo Mágico __files` del despliegue.
- [ ] No escribir alt para recursos de la captura: deben desaparecer.
- [ ] Definir la intención única de glamping privado, romántico, con jacuzzi y cerca de Bogotá.
- [ ] Consolidar mediante 301 las landing pages que no puedan diferenciarse con oferta real.
- [ ] Corregir cuatro enlaces hacia `contact.html`, que no existe.
- [ ] Añadir información real de tarifas, capacidad, ubicación, políticas, disponibilidad y experiencia.
- [ ] Validar `LodgingBusiness` o schema equivalente únicamente con datos comprobados.

### 4. `cirujano-maxilofacial-en-bogota` — P0

**Estado:** 26 HTML. Diez páginas conservan título y descripción de “Medical Pro”; once contienen señales de plantilla y diez contienen Lorem Ipsum. Diecinueve páginas cargan algún recurso por HTTP. El sitemap incluye `contact_process.php`.

**Vamos a trabajar en:**

- [ ] Retirar o devolver 410 para `index3`, `index4`, `shortcode`, `blog2`, `single-post`, `single-service` y demos equivalentes.
- [ ] Conservar `about` y `doctors` solo si se completan con identidad, registro, formación y experiencia reales.
- [ ] Eliminar `contact_process.php` del sitemap.
- [ ] Corregir los enlaces hacia `book-appointment.html`, que no existe.
- [ ] Sustituir fuentes, mapas y dependencias HTTP por HTTPS o recursos locales actualizados.
- [ ] Revisar médicamente las páginas de cordales, ATM, implantes, trauma y lesiones orales.
- [ ] Garantizar que `404.html` devuelva HTTP 404 y quede fuera del sitemap.

### 5. `dentista-bogota-kennedy` — P0

**Estado:** 43 HTML. Veintiocho páginas usan “Medcity” como title y descripción; dos páginas de contacto comparten title; una página no tiene H1. Se detectaron nueve páginas exactamente duplicadas dentro del proyecto y más de 500 referencias internas rotas únicas. El sitemap contiene ocho archivos PHP de PHPMailer.

**Vamos a trabajar en:**

- [ ] Retirar homes alternativos, tienda, carrito, demos de doctores, departamentos, pricing y páginas genéricas de plantilla.
- [ ] Elegir entre `contact-us.html` y `contacto.html` y redirigir la variante.
- [ ] Elegir entre `services.html` y `servicios.html`.
- [ ] Revisar individualmente los artículos con slugs útiles antes de decidir si se reescriben o eliminan.
- [ ] Corregir referencias repetidas a `department-single.html`; el archivo existente se llama `departments-single.html`.
- [ ] Retirar los ocho PHP del sitemap y revisar si PHPMailer debe estar expuesto públicamente.
- [ ] Verificar o retirar el teléfono `300 123 4567` y otros datos con apariencia de placeholder.
- [ ] Revisar cada tratamiento por un profesional odontológico identificado.

### 6. `derecho-penal-bogota` — P0

**Estado:** 27 páginas con metadatos completos y contenido más diferenciado que otros proyectos jurídicos. Sin embargo, las 27 contienen el mismo dato de contacto con apariencia de placeholder. `gracias.html` está incluida como página indexable.

**Vamos a trabajar en:**

- [ ] Sustituir todos los datos de contacto por información real y consistente.
- [ ] Identificar abogado responsable, tarjeta profesional, alcance del servicio y jurisdicción.
- [ ] Retirar `gracias.html` del sitemap y marcarla `noindex`.
- [ ] Revisar afirmaciones sobre urgencias, resultados, confidencialidad y disponibilidad.
- [ ] Añadir fecha, autor y revisión legal a los artículos.
- [ ] Mantener la estructura de servicios solo donde cada página responda a un escenario jurídico diferente.

### 7. `digital-growth` — P2

**Estado:** una landing de 865 palabras útiles, con metadatos y JSON-LD completos. Su problema principal son los cinco hubs raíz inexistentes.

**Vamos a trabajar en:**

- [ ] Definir su papel frente a `agencia-google-ads`, `agencia-seo-geo-colombia`, `shopify-studio` y `web`.
- [ ] Evitar que compita con páginas de agencia más específicas.
- [ ] Corregir los cinco enlaces de arquitectura.
- [ ] Añadir casos, oferta y CTA verificables si será una página comercial indexable.

### 8. `endocrinologo-infantil-colombia` — P0

**Estado:** 15 páginas de contenido más un archivo de verificación. El sitemap tiene 24 URLs e incluye ocho archivos de PHPMailer. Las páginas por ciudad producen 15 pares con más de 75 % de similitud, con un máximo de 85 %. La carpeta pesa 19 MB y contiene 746 archivos.

**Vamos a trabajar en:**

- [ ] Retirar PHPMailer y el archivo de verificación del sitemap.
- [ ] Auditar si las seis ciudades tienen atención, profesional o cobertura real.
- [ ] Consolidar ciudades sin evidencia local en una página nacional sólida.
- [ ] Añadir profesional, registro, formación, revisor y fuentes médicas.
- [ ] Mantener artículos de crecimiento, diabetes y pubertad solo después de revisión clínica.
- [ ] Limpiar assets y scripts no utilizados de la plantilla.

### 9. `entrenador-salitre` — P0

**Estado:** 50 HTML, 18 con menos de 250 palabras útiles y al menos 11 páginas demo o de cuenta. Hay carrito, checkout, login, pedidos, tienda, búsquedas, homes alternativos y páginas de plantilla. Se detectaron más de 300 referencias rotas.

**Vamos a trabajar en:**

- [ ] Retirar o bloquear indexación de cuenta, login, pedidos, carrito, checkout, búsqueda y páginas de error.
- [ ] Eliminar `index1`, `index2`, demos, Lorem Ipsum y páginas sin función final.
- [ ] Elegir entre `contact.html` y `contacto.html`, y entre `precios.html` y `pricing.html`.
- [ ] Corregir referencias a `career.html` y otros destinos inexistentes.
- [ ] Verificar identidad, certificaciones, experiencia y zonas reales de atención del entrenador.
- [ ] Diferenciar servicios por objetivo y modalidad, no solo por barrio.
- [ ] Regenerar el sitemap con páginas comerciales y artículos aprobados.

### 10. `estetica-barcelona` — P2

**Estado:** 10 páginas técnicamente completas, contenido amplio, sin duplicados importantes y con similitud máxima de 23 %. Es uno de los proyectos más sanos del repositorio. Mantiene los cinco enlaces raíz rotos.

**Vamos a trabajar en:**

- [ ] Corregir la arquitectura raíz.
- [ ] Verificar profesional, centro, dirección, licencias y alcance de tratamientos.
- [ ] Añadir evidencia real, contraindicaciones y expectativas responsables.
- [ ] Revisar si el dominio y la orientación geográfica comunican correctamente Barcelona/España.
- [ ] Preservar la diferenciación actual y evitar generar variantes innecesarias por barrio.

### 11. `estudio-abogados-bogota-colombia` — P0

**Estado:** solo contiene seis páginas, todas por debajo de 250 palabras útiles. Las seis son copias exactas de páginas presentes en `estudio-juridico-bogota` y `firma-abogados-bogota`. El sitemap contiene 66 URLs, 59 de ellas PHP o componentes de plantilla, e incluso referencia páginas que no existen.

**Vamos a trabajar en:**

- [ ] No seguir desarrollando esta carpeta hasta decidir cuál proyecto jurídico de Bogotá será canónico.
- [ ] Si no existe una marca o negocio diferente, aplicar 301 hacia el proyecto elegido y retirar la carpeta.
- [ ] Si se conserva, crear home, contacto, firma real y contenido completamente propio antes de indexar.
- [ ] Eliminar los 59 PHP del sitemap y no exponer componentes `parts/` como resultados de búsqueda.
- [ ] Corregir enlaces a `index.html` y `contact.html`, actualmente inexistentes.

### 12. `estudio-juridico-bogota` — P0

**Estado:** 27 HTML, 12 con menos de 250 palabras útiles. Incluye tienda, checkout, registro, galerías y páginas demo. Cuatro páginas contienen Lorem Ipsum y cinco datos de contacto de ejemplo. Sus seis servicios son copias exactas de otros dos proyectos de Bogotá.

**Vamos a trabajar en:**

- [ ] Participar en la decisión de consolidación de los tres proyectos jurídicos de Bogotá.
- [ ] Retirar tienda, checkout, login, galerías y páginas de plantilla sin función legal.
- [ ] Eliminar `sendemail.php` del sitemap.
- [ ] Reemplazar Lorem Ipsum y datos de ejemplo.
- [ ] Conservar servicios únicamente si pertenecen a una firma real y pueden reescribirse desde su experiencia.
- [ ] Regenerar sitemap y enlazado después de la consolidación.

### 13. `estudio-juridico-medellin` — P0

**Estado:** 24 HTML. Trece páginas conservan la descripción “Rexlaw - Law Attorney HTML Template” y contenido demo. Sus seis servicios son copias exactas de `firma-abogados-medellin`. El sitemap incluye `mail.php`.

**Vamos a trabajar en:**

- [ ] Elegir entre este proyecto y `firma-abogados-medellin` como destino canónico.
- [ ] Retirar `index-2`, `index-3`, `index-4`, case demos, pricing, team demos y blog de plantilla.
- [ ] Eliminar `mail.php` del sitemap.
- [ ] Reescribir o redirigir los seis servicios según la decisión de marca.
- [ ] Verificar firma, abogados, tarjetas profesionales, dirección y experiencia.

### 14. `finanzas-personales` — P1

**Estado:** actualmente quedan 6 HTML canónicos y no hay duplicados de metadatos. La copia `/web/` aparece eliminada en el árbol de trabajo, pero el sitemap todavía contiene sus seis URLs, ahora inexistentes.

**Vamos a trabajar en:**

- [ ] Mantener la eliminación de `/web/` si fue la consolidación aprobada.
- [ ] Configurar 301 desde cada URL antigua `/finanzas-personales/web/...` hacia su equivalente sin `/web/`.
- [ ] Retirar las seis URLs antiguas del sitemap.
- [ ] Añadir autor, fecha de revisión, fuentes y política editorial a los artículos.
- [ ] Reemplazar schema genérico de servicio por tipos adecuados para sitio, blog y artículos.
- [ ] Aclarar que el contenido es educativo y no asesoría financiera personalizada.

### 15. `firma-abogados-barranquilla` — P0

**Estado:** 33 HTML. Veintidós conservan señales demo; 18 contienen Lorem Ipsum. Hay páginas de carreras, eventos, noticias, headers alternativos, shortcodes y políticas de plantilla. El sitemap incluye seis PHP/API. Los seis servicios jurídicos alcanzan cerca de 98 % de similitud entre sí.

**Vamos a trabajar en:**

- [ ] Retirar demos, headers alternativos, shortcodes y páginas sin operación real.
- [ ] Conservar carreras, eventos o noticias solo si existe contenido verdadero y mantenimiento editorial.
- [ ] Eliminar los seis PHP/API del sitemap.
- [ ] Corregir referencias repetidas a `single-post.html`, que no existe.
- [ ] Reescribir los seis servicios desde casos, procesos y experiencia de una firma real.
- [ ] Verificar datos de contacto y responsables profesionales.

### 16. `firma-abogados-bogota` — P0

**Estado:** 35 HTML, 17 páginas con Lorem Ipsum y múltiples homes, blogs y posts alternativos. El sitemap solo incluye 19 URLs, tres de ellas PHP, mientras deja 19 HTML fuera. Sus seis servicios son copias exactas de otros proyectos de Bogotá.

**Vamos a trabajar en:**

- [ ] Decidir si esta será la marca canónica de abogados en Bogotá.
- [ ] Retirar homes alternativos, shortcodes, typography, posts demo y páginas Lorem Ipsum.
- [ ] Eliminar los tres procesos PHP del sitemap.
- [ ] Consolidar las seis páginas legales duplicadas.
- [ ] Definir qué páginas de firma, abogados, práctica y contacto son reales.
- [ ] Regenerar completamente el sitemap después de cerrar el inventario.

### 17. `firma-abogados-cartagena` — P0

**Estado:** 25 HTML. `index2`, `index3` e `index4` comparten una descripción de “versión alternativa”. Hay 12 páginas con menos de 250 palabras útiles, 15 pares muy similares y referencias a perfiles `jone-doe` inexistentes.

**Vamos a trabajar en:**

- [ ] Conservar un solo index y retirar las tres variantes de prueba.
- [ ] Eliminar perfiles y casos de demostración.
- [ ] Corregir enlaces a `/lawyers/jone-doe.html`.
- [ ] Diferenciar los seis servicios jurídicos con práctica real en Cartagena.
- [ ] Revisar las 13 páginas que hoy no aparecen en el sitemap y decidir su disposición.
- [ ] Validar firma, abogados, dirección y jurisdicción.

### 18. `firma-abogados-medellin` — P0

**Estado:** 45 HTML. Hay 16 páginas demo, 14 con Lorem Ipsum y siete con identidades “John Doe”. Sus seis servicios son copias exactas de `estudio-juridico-medellin`. Se detectaron 39 pares con más de 75 % de similitud.

**Vamos a trabajar en:**

- [ ] Elegir este proyecto o `estudio-juridico-medellin` como canónico.
- [ ] Retirar homes, headers, attorneys, casos y pricing de demostración.
- [ ] Eliminar `include/contact-process.php` del sitemap.
- [ ] Reemplazar identidades y testimonios demo por información comprobable o eliminar las secciones.
- [ ] Consolidar los seis servicios duplicados mediante 301 o reescritura real.
- [ ] Reducir el sitemap a la arquitectura aprobada.

### 19. `gastroenterologo-infantil-colombia` — P0

**Estado:** 12 páginas de contenido amplio y una diferenciación entre ciudades mejor que la mayoría de proyectos. Sin embargo, el sitemap incluye ocho archivos de PHPMailer. `blog-single-post.html` es una copia exacta de una demo en endocrinología. La carpeta pesa 19 MB y contiene 742 archivos.

**Vamos a trabajar en:**

- [ ] Eliminar los ocho PHP del sitemap.
- [ ] Retirar `blog-single-post.html` si continúa siendo una demo compartida.
- [ ] Verificar que las seis ciudades representen cobertura o profesionales reales.
- [ ] Añadir autor, revisor, registro profesional y fuentes médicas.
- [ ] Revisar clínicamente dolor abdominal, estreñimiento y reflujo.
- [ ] Limpiar assets duplicados o no utilizados.

### 20. `hemato-oncologia-pediatra-colombia` — P0

**Estado:** 10 páginas, contenido amplio, pero 21 pares superan 75 % de similitud entre ciudades, con máximo de 83 %. El sitemap incluye `form-process.php`. Existe un enlace interno repetido a `ganglios inflamados-recurrente-ninos.html`, pero el archivo real se llama `ganglios-inflamados-ninos.html`.

**Vamos a trabajar en:**

- [ ] Corregir el enlace roto sobre ganglios en todas las páginas.
- [ ] Eliminar `form-process.php` del sitemap.
- [ ] Consolidar ciudades sin servicio o especialista real.
- [ ] Someter todo el contenido a revisión de hemato-oncología pediátrica.
- [ ] Añadir señales claras para urgencias y evitar diagnósticos o promesas.
- [ ] Diferenciar páginas locales mediante disponibilidad y red asistencial verificables.

### 21. `hotel-en-guaduas` — P1

**Estado:** 22 páginas. Hay 20 pares con más de 75 % de similitud y un máximo de 99 % entre páginas comerciales. Cinco páginas tienen menos de 250 palabras útiles. Se repiten intenciones como hotel, finca hotel, piscina, parejas, familias, pasadía y escapada.

**Vamos a trabajar en:**

- [ ] Crear un mapa de intención: alojamiento, pasadía, eventos, familias, parejas y contenidos informativos.
- [ ] Consolidar variantes que describan la misma oferta.
- [ ] Corregir enlaces hacia `contact.html`, que no existe.
- [ ] Añadir habitaciones, capacidad, precios, políticas, ubicación y servicios reales.
- [ ] Usar fotografías propias, disponibilidad y schema de alojamiento verificable.
- [ ] Conservar artículos solo si aportan información turística original.

### 22. `neumologia-infantil-colombia` — P0

**Estado:** 10 páginas completas. Las páginas por ciudad generan 15 pares con más de 75 % de similitud y máximo de 80 %. El sitemap incluye `form-process.php`.

**Vamos a trabajar en:**

- [ ] Eliminar el PHP del sitemap.
- [ ] Verificar cobertura y profesional en cada ciudad.
- [ ] Consolidar las ciudades sin evidencia local.
- [ ] Revisar médicamente asma, bronquiolitis y tos persistente.
- [ ] Añadir identidad profesional, fuentes, fecha y revisión clínica.
- [ ] Mantener recomendaciones de urgencia claras y responsables.

### 23. `polarizados-nanoceramico-bogota` — P1

**Estado:** 37 páginas con contenido largo y metadatos completos. Sin embargo, hay 193 pares con más de 75 % de similitud y un máximo de 89 %. La expansión por zonas, marcas y modelos es altamente programática.

**Vamos a trabajar en:**

- [ ] Separar páginas de servicio, zonas y vehículos en una jerarquía navegable.
- [ ] Consolidar marcas o modelos sin producto, compatibilidad o trabajo demostrable propio.
- [ ] Exigir fotos, referencias, especificaciones y casos reales para cada página de vehículo.
- [ ] Exigir cobertura, tiempos y condiciones locales para cada zona.
- [ ] Evitar repetir el mismo texto largo cambiando únicamente marca o barrio.
- [ ] Corregir los cinco enlaces a hubs raíz.

### 24. `psicologo-salitre-bogota` — P0

**Estado:** 16 HTML, pero la carpeta contiene 1.702 archivos y pesa 11 MB por plugins, fuentes y demos. El sitemap tiene 27 URLs, incluidas 11 PHP de Revolution Slider y `sendemail.php`. Las páginas de servicios llegan a 98 % de similitud. Hay demos HTML dentro de `fonts/` y `plugins/`.

**Vamos a trabajar en:**

- [ ] Eliminar los 11 PHP y cualquier demo de fuentes/plugins del sitemap y del despliegue público.
- [ ] Auditar y reducir Revolution Slider y demás plugins heredados.
- [ ] Identificar psicólogo, tarjeta profesional, enfoque, modalidad y límites de atención.
- [ ] Diferenciar ansiedad, duelo, estrés, adultos y pareja con procesos y criterios clínicos reales.
- [ ] Añadir orientación de crisis y dejar claro que el sitio no reemplaza atención de emergencia.
- [ ] Corregir CSS, recursos HTTP y enlaces internos rotos.

### 25. `reparacion-electrodomesticos-medellin` — P0

**Estado:** 35 páginas con metadatos completos. Las 35 contienen un dato de contacto con apariencia de placeholder. Hay 15 páginas con menos de 250 palabras útiles y 12 pares muy similares. La expansión por comunas puede convertirse en doorway si todas llevan al mismo servicio sin información local.

**Vamos a trabajar en:**

- [ ] Sustituir teléfono, dirección y demás datos de ejemplo por información real.
- [ ] Retirar `gracias.html` del sitemap y marcarla `noindex`.
- [ ] Verificar cobertura real en las ocho zonas publicadas.
- [ ] Consolidar páginas de zona si no hay diferencias operativas demostrables.
- [ ] Añadir marcas atendidas, diagnóstico, garantías, horarios y condiciones reales.
- [ ] Mejorar las páginas cortas de servicio y los artículos que aporten intención informativa.

### 26. `shopify-studio` — P1

**Estado:** 6 páginas técnicamente completas, pero cinco tienen menos de 250 palabras útiles. Hay 10 pares con más de 75 % de similitud y un máximo de 98 %. Desarrollo, Plus, SEO, velocidad y migración comparten casi toda la estructura.

**Vamos a trabajar en:**

- [ ] Definir entregables, requisitos, proceso y perfil de cliente de cada servicio.
- [ ] Consolidar servicios que no puedan sostener una página propia.
- [ ] Añadir casos, métricas y limitaciones verificables.
- [ ] Corregir enlaces hacia hubs raíz y `/sitemap.xml`.
- [ ] Ampliar contenido desde experiencia real, no agregando bloques genéricos.

### 27. `web` — P1

**Estado:** 53 páginas extensas y técnicamente completas. No son páginas delgadas, pero existen 344 pares con más de 75 % de similitud y un máximo de 89 %. La combinación de diseño web por ciudad y diseño web para turismo por ciudad es el mayor clúster programático del repositorio.

**Vamos a trabajar en:**

- [ ] Definir una arquitectura nacional, páginas regionales prioritarias y verticales reales.
- [ ] No mantener una página por ciudad si solo cambia el nombre de la ubicación.
- [ ] Consolidar ciudades sin casos, oferta o contexto comercial propio.
- [ ] Revisar por separado el clúster `diseño web turismo × ciudad`, que presenta mayor riesgo doorway.
- [ ] Añadir portafolio, casos, precios orientativos, tiempos y testimonios verificables por mercado.
- [ ] Corregir los cinco hubs raíz inexistentes que aparecen en las 53 páginas.
- [ ] Usar el rendimiento en Search Console para decidir qué ciudades conservar, fusionar o retirar.

---

## Orden de ejecución recomendado

### Sprint 1 — Contención técnica

- [ ] Crear inventario de disposición de URL.
- [ ] Limpiar sitemaps con PHP, APIs, demos y utilidades.
- [ ] Crear robots y sitemap index raíz.
- [ ] Crear o retirar los cinco hubs rotos.
- [ ] Configurar 301 y 410 prioritarios.
- [ ] Terminar la consolidación de `/finanzas-personales/web/`.

### Sprint 2 — Demos y plantillas

- [ ] Limpiar dentista, cirujano, entrenador y psicólogo.
- [ ] Limpiar las cinco carpetas jurídicas con contenido demo.
- [ ] Retirar captura externa de glamping.
- [ ] Eliminar Lorem Ipsum, ThemeForest, John Doe y datos de ejemplo.

### Sprint 3 — Consolidación temática

- [ ] Elegir un proyecto jurídico canónico para Bogotá.
- [ ] Elegir un proyecto jurídico canónico para Medellín.
- [ ] Consolidar páginas por ciudad en salud que no tengan operación local.
- [ ] Reorganizar los clústeres de web, Google Ads, polarizados, hotel y glamping.

### Sprint 4 — Calidad y confianza

- [ ] Incorporar autores y revisores reales.
- [ ] Validar credenciales, NAP, cobertura y afirmaciones.
- [ ] Añadir fuentes y fechas de revisión.
- [ ] Corregir schema y enlazado interno.

### Sprint 5 — Rendimiento y automatización

- [ ] Eliminar assets y plugins sin uso.
- [ ] Actualizar librerías antiguas y recursos HTTP.
- [ ] Comprimir imágenes y aplicar carga diferida cuando corresponda.
- [ ] Añadir auditoría automática en CI.
- [ ] Recrawl completo antes del despliegue.

## Criterios de finalización

- [ ] Cero PHP, demos o utilidades en sitemaps.
- [ ] Cero enlaces internos hacia los cinco hubs inexistentes.
- [ ] Cero Lorem Ipsum, ThemeForest, John Doe o contactos de ejemplo en páginas indexables.
- [ ] Cero títulos y descripciones duplicados dentro del inventario indexable.
- [ ] Cero contenido exactamente duplicado entre proyectos.
- [ ] Todas las URLs de sitemap responden 200, son indexables y tienen canonical coherente.
- [ ] Todas las retiradas responden 301 o 410 según la matriz aprobada.
- [ ] Las páginas médicas, legales y financieras tienen responsable y revisión verificables.
- [ ] Las páginas por ciudad o servicio superan la revisión de utilidad y diferenciación.
- [ ] Search Console no reporta crecimiento de soft 404, duplicados o “rastreada, sin indexar” después de la migración.

## Referencias de criterio

- Google Search Central: [políticas de spam y abuso de páginas puerta/contenido escalado](https://developers.google.com/search/docs/essentials/spam-policies?hl=es-419)
- Google Search Central: [canonicalización de URLs duplicadas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=es)
- Google Search Central: [crear y enviar sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=es)
- Google Crawling Infrastructure: [ubicación y alcance de robots.txt](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec)
