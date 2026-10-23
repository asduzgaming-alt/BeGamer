# BeGamer Agency · Plan estratégico y técnico

**Primera entrega · 22 de octubre de 2026 · Estado: planificación, sin implementación ni publicación.**

Carpeta de trabajo: `D:\BeGamer\BeGamer Web Page 2.0`.
Dominio confirmado por el propietario: **begamer.xyz**.
Hosting confirmado: **Namecheap compartido, todavía sin configurar**. No se ha accedido a cPanel, DNS ni GitHub.

Este documento resuelve la primera etapa del master prompt. La segunda entrega es `02-prompt-tecnico-implementacion.md`. El inventario adjunto documenta los archivos que realmente existen; no acredita por sí solo nombres oficiales, resultados ni permisos de publicación.

## 1. Resumen ejecutivo del proyecto

Construir una web corporativa bilingüe que convierta el interés de marcas, empresas y centros educativos en solicitudes comerciales. El mensaje central es «Hacemos que las marcas sean parte del juego», expresamente elegido en el brief, aunque el manual lo identificaba como propuesta.

La experiencia combina seis secciones de inicio, cuatro páginas de servicio, portafolio, presentación de agencia y contacto. La estética conserva el fondo noche, la fotografía real, los acentos violeta/cian y la jerarquía de la referencia. La web no se limitará a mostrar torneos: explicará qué puede contratar cada público y cómo empezar.

**Decisión recomendada:** Astro con HTML estático por ruta, TypeScript, CSS con tokens y una isla React para el símbolo 3D. Formulario mediante PHP en el mismo hosting, sujeto a verificar sus capacidades y el correo receptor. No necesita Node en producción. El dominio canónico propuesto es `https://begamer.xyz`; esta URL es una configuración prevista, no una comprobación de que el dominio esté operativo.

La primera versión local puede avanzar con los recursos disponibles. La firma completa de marca, el arte vectorial 3D, la fotografía escolar, las fichas de casos y el correo receptor son dependencias concretas para terminar determinadas partes y lanzar.

## 2. Diagnóstico de la referencia visual

La imagen adjunta reúne seis vistas conceptuales; debe traducirse a una página continua y páginas internas, no a seis pantallas rígidas. No es necesario repetir el header dentro de cada sección.

| Elemento | Decisión para la web |
|---|---|
| Hero | Texto a la izquierda, fotografía a la derecha y símbolo BG superpuesto. Un solo recurso 3D protagonista. |
| Servicios | Composición 2 × 2, fotografía superior, título, capacidades y CTA. |
| Confianza | Franja horizontal compacta. Eliminar la fotografía grande inferior del mockup por instrucción expresa del brief. |
| Proyectos | Galería editorial asimétrica con las cuatro fotografías disponibles. |
| Nosotros | Imagen documental y tres pilares: comunidad, competencia y experiencia. |
| Contacto | Título y presentación a la izquierda; formulario a la derecha. Sin mando 3D adicional. |
| Ornamentación | Diagonales periféricas de baja opacidad, bordes finos y máximo dos acentos por marco. |
| Header | Fijo, compacto y legible, navegación, idiomas y CTA. |

También se eliminan la foto secundaria bajo el hero y el bloque inferior repetido «Gaming / People / Brands / Results». La línea pequeña sobre el titular sí se conserva.

**Conflictos resueltos:** el manual especifica Inter / Inter Display; el mockup tiene titulares más condensados. Se prioriza Inter Display Black con composición y saltos de línea controlados; no se deforma el texto con `scaleX`. Una fuente condensada adicional solo se incorporaría después de comparar y validar una muestra. Los HEX se usarán como tokens de trabajo: el propio manual aclara que son aproximaciones extraídas de raster, no especificaciones maestras oficiales.

**Logo real:** `logo.png` es un isotipo blanco RGBA de 150 × 150 px. Se revisó nuevamente tras la confirmación del usuario y sigue siendo el mismo archivo. Se utilizará como fue suministrado, sin inventar la firma tipográfica. La firma completa del mockup no está disponible como archivo maestro en esta carpeta. El isotipo sirve para un header provisional pequeño, pero no proporciona suficiente resolución ni geometría vectorial para un 3D definitivo grande.

## 3. Objetivos comerciales y públicos

| Público | Necesidad | Servicio / recorrido | Conversión |
|---|---|---|---|
| Marketing y marcas | Conectar con comunidades mediante participación | Home → Corporate Gaming / Game Building → caso → contacto | Brief de activación |
| RR. HH. y empresas | Experiencias colaborativas para equipos | Corporate Gaming → formatos → contacto | Solicitud de propuesta |
| Colegios e institutos | Programa gaming supervisado | Colegios → metodología y participación responsable → contacto | Conversación institucional |
| Productores e instituciones | Operar competencias y transmisiones | Live Esports → producción → caso → contacto | Cotización de evento |
| Comunidades | Encontrar un aliado de producción | Proyectos → Live Esports → contacto | Consulta cualificada |

Cada página tendrá una acción principal y una secundaria. El formulario preguntará por el servicio para facilitar clasificación. No se publicarán métricas de trayectoria, conversiones o participantes sin fuente verificable.

## 4. Arquitectura de información

Home: Inicio → Servicios → Confían en nosotros → Proyectos → Nosotros → Contacto. La barra lateral navega por estas seis secciones y refleja la sección activa. En el Home, el menú superior puede usar anclas para un recorrido continuo; los CTA de sección abren las páginas completas. Desde una página interna, el menú lleva a los índices correspondientes.

Las páginas de servicio explican destinatarios, formatos, proceso, alcance y ejemplos pertinentes. Los casos muestran contexto, objetivo, papel de BeGamer, ejecución y evidencia. La página Nosotros profundiza en la filosofía y metodología sin inventar historia o equipo.

El cambio ES/EN conserva la entidad consultada y, en Home, la sección mediante anclas estables. No se traduce una URL por sustitución de palabras: se utiliza un mapa explícito de equivalencias.

## 5. Sitemap completo ES/EN

Se utilizará una convención de URL con barra final. `/` tendrá redirección HTTP 301 a `/es/`.

| Español | Inglés | Función |
|---|---|---|
| `/es/` | `/en/` | Home |
| `/es/servicios/` | `/en/services/` | Índice de servicios |
| `/es/servicios/corporate-gaming/` | `/en/services/corporate-gaming/` | Empresas y marcas |
| `/es/servicios/colegios/` | `/en/services/schools/` | Ecosistema escolar |
| `/es/servicios/game-building/` | `/en/services/game-building/` | Mundos y experiencias |
| `/es/servicios/live-esports/` | `/en/services/live-esports/` | Competencias y producción |
| `/es/proyectos/` | `/en/projects/` | Portafolio filtrable |
| `/es/proyectos/[slug]/` | `/en/projects/[slug]/` | Casos aprobados |
| `/es/nosotros/` | `/en/about/` | Agencia |
| `/es/contacto/` | `/en/contact/` | Solicitud comercial |
| `/es/privacidad/` | `/en/privacy/` | Tratamiento de datos |
| `/es/terminos/` | `/en/terms/` | Condicional al alcance legal aprobado |

Además: `/404.html` con estado HTTP 404 real; `/robots.txt`; `/sitemap-index.xml` y los sitemaps generados; `/api/contact.php` y `/api/csrf.php`, sin indexación.

Los IDs locales iniciales de casos serán `ascension`, `ecup`, `nubyx`, `upc`, derivados del inventario. No equivalen a nombres comerciales aprobados. Con cuatro casos aprobados habrá 28 páginas de contenido contando privacidad y sin términos; 30 si se incluyen términos. Los borradores se excluyen de producción.

## 6. Inventario de contenidos y recursos

Auditoría: **29 imágenes**, sin aplicación, repositorio `.git`, fuentes, modelos 3D ni archivos de configuración existentes en la carpeta inspeccionada. No se encontraron instrucciones `AGENTS.md` en la raíz indicada ni en sus padres examinados. Se conservarán todos los originales y sus nombres.

| Recurso | Medidas / cantidad | Uso propuesto y limitación |
|---|---|---|
| `logo.png` | 150 × 150, transparente | Isotipo blanco para header provisional; no firma completa. |
| `hero-bg.jpg` | 5758 × 3713 | Dos participantes sentados en un evento. Alternativa de hero con buena resolución; no muestra al jugador del mockup. |
| `projects/ascension.png` | 795 × 725 | Jugadores con camiseta roja, coincide mejor con la dirección del hero. Su tamaño limita ampliaciones. |
| `projects/ecup.jpg` | 4000 × 6000 | Escena de competencia, permite detalle y recortes. |
| `projects/nubyx.png` | 740 × 890 | Fila de jugadores; usar con límites de tamaño. |
| `projects/upc.jpg` | 1536 × 2048 | Actividad en espacio universitario. No presentar como colegio. |
| `services/marketing.jpg` | 2258 × 3011 | Corporate Gaming, por instrucción del brief; encuadre cuidado. |
| `services/production.jpeg` | 5423 × 3313 | Trofeos y escenario de competencia; Live Esports. |
| `services/immersive.png` | 1821 × 958 | Entorno virtual; Game Building. |
| `studio/*` | 6 imágenes | Tres recursos Minecraft y tres Roblox; galería contextual, no seis casos nuevos. |
| `events/*` | 3 imágenes | Piezas promocionales de Ascension, Ignite y Mobile Masters; son artes, no fotografías documentales. |
| `brands/*` | 10 logos | Identificados visualmente: UTP, Doritos, Bonoxs, Moonton, Garena, Real Plaza, Volt, Cifrut, Xiaomi y Flori. |
| `bonoxs-logo.png` | 512 × 512 | Variante adicional del logo Bonoxs; no cuenta como un cliente adicional. |

La carpeta `brands` fue aportada expresamente como logos de clientes y puede alimentar la propuesta local. Antes de exposición pública se registrará el nombre exacto y estado de publicación de cada marca, de acuerdo con el brief. No se importarán Claro, Samsung, Redragon o TikTok desde el mockup.

`events/ascension.png` y `projects/ascension.png` son imágenes diferentes; sus hashes lo confirman. No se intercambiarán por compartir nombre. `inventario-assets.json` incluye ruta, dimensiones, tamaño, modo y SHA-256. `inventario-visual.jpg` permite revisar el conjunto.

Elección del hero: ensayar primero la fotografía del jugador en `projects/ascension.png`, manteniendo su escala útil; comparar con `hero-bg.jpg` si el recorte no alcanza calidad suficiente. No fabricar una foto de gran tamaño ni separar personas con generación sintética. Solicitar el original de mayor resolución para la versión final si se necesita ese mismo encuadre.

## 7. Auditoría de información faltante

| Dato / recurso | Estado | Qué bloquea | Avance posible |
|---|---|---|---|
| Dominio | Confirmado: begamer.xyz | Nada para la arquitectura | Usarlo en configuración y SEO previsto. |
| Hosting | Namecheap compartido; sin configuración | Prueba real y despliegue | Build estático y backend portable. |
| Correo receptor y remitente | Pendiente | Entrega efectiva del formulario | UI, validación y pruebas con transporte simulado. |
| Firma blanca completa | No encontrada | Fidelidad exacta del header | Isotipo original pequeño, sin recomponer letras. |
| Vector BG / modelo GLB | No encontrado | Geometría 3D definitiva | Componente con fallback 2D, contrato de carga y controles. |
| Foto de actividad escolar | No identificada | Imagen específica del servicio | Card editorial sin foto, con estilo consistente. |
| Fichas de cuatro casos | Pendientes | Casos públicos y categorías verificadas | Templates y borradores con campos explícitos. |
| Datos empresariales y privacidad | Pendientes | Texto legal y formulario público | Estructura legal y lista de datos a completar. |
| Redes sociales | No confirmadas | Enlaces reales | Omitir enlaces sin destino. |
| Publicación de logos y fotografías | Según registro del propietario | Exposición pública | Vista local con inventario suministrado. |
| Repositorio GitHub | No definido | Push / CI remoto | Estructura Git y workflow localmente preparados. |

No solicitar contraseñas en documentos o en el chat. Los accesos se configurarán mediante mecanismos seguros cuando corresponda. La espera de estos datos no impide construir las piezas independientes.

## 8. Comparativa de stacks tecnológicos

| Alternativa | Ventaja para BeGamer | Coste / restricción | Conclusión |
|---|---|---|---|
| Astro + React Islands | HTML estático y JS limitado a interacciones | Integrar una isla WebGL y endpoint PHP separado | **Recomendada** para contenido, SEO y cPanel. |
| React + Vite + SSG | Modelo React uniforme y familiar | Debe añadirse y probarse el prerenderizado de todas las rutas | Válida, con más decisiones de infraestructura. |
| Next.js con export estático | Rutas y ecosistema amplio | Las funciones que necesitan servidor no se incluyen en la exportación | Viable, pero aporta complejidad no necesaria aquí. |

La comparación es una decisión de ingeniería para este proyecto, no un benchmark. Astro permite hidratar componentes interactivos de forma independiente ([arquitectura de islas](https://docs.astro.build/en/concepts/islands/)); Vite ofrece integración de renderizado que requiere elegir el mecanismo de aplicación ([documentación](https://vite.dev/guide/ssr.html)); Next.js documenta las capacidades y restricciones de su [exportación estática](https://nextjs.org/docs/app/guides/static-exports).

## 9. Arquitectura técnica recomendada

Generación estática en la máquina de desarrollo o CI; publicación exclusiva de `dist/` y del backend PHP empaquetado. El contenido y los metadatos existirán en el HTML sin JavaScript. No se implementará una SPA como sustituto de las rutas físicas.

Dependencias propuestas: Astro, TypeScript, integración React, React y ReactDOM, Three.js, React Three Fiber, GSAP/ScrollTrigger para una secuencia del hero, Sharp para derivados de imágenes y sitemap. CSS nativo organizado por tokens, sin Tailwind ni una segunda librería de animación. No añadir Drei, CMS, Lenis o estado global sin una necesidad concreta. Para calidad: Astro Check, Playwright, axe y validación de contenido. Para correo: PHPMailer mediante Composer; versiones estables compatibles se fijarán al implementar, con lockfiles y revisión de dependencias.

```text
BeGamer Web Page 2.0/
  brands/ events/ projects/ services/ studio/  # originales preservados
  logo.png hero-bg.jpg bonoxs-logo.png
  src/
    components/ layouts/ sections/
    pages/es/ pages/en/
    content/services/ content/projects/
    i18n/ styles/ lib/ hooks/ three/
    assets/                               # derivados que procesa el build
  public/assets/                          # logos autorizados, fallback, fuentes
  server/public/api/                      # endpoints públicos mínimos
  server/private/                         # ejemplos y lógica; fuera del docroot real
  scripts/ tests/ docs/
  .github/workflows/
  .env.example .gitignore
  astro.config.mjs package.json package-lock.json
  composer.json composer.lock
```

Los originales en raíz no irán automáticamente a `dist`. `asset-map.json` relacionará archivo fuente, derivados, alt ES/EN y punto focal. La configuración separará entorno de revisión y producción, dominio, contactos, marcas visibles y estado de publicación.

## 10. Estrategia de animaciones y 3D

Scroll nativo. Nada de capturar la rueda ni forzar escenas de pantalla completa. Los valores siguientes son límites de diseño iniciales y se ajustarán con medición.

| Momento | Transformación | Límite |
|---|---|---|
| Hero visible | BG responde a puntero fino | yaw ±8°, pitch ±5°; suavizado independiente del framerate. |
| Salida del hero, progreso 0 → 1 | Foto asciende hasta 48 px; BG rota hasta 12°, escala 1 → 0,9 y se desplaza hasta 60 px | Animar transform/opacity, sin mover la caja del layout. |
| Servicios | Aparición única y discreta | 16 px de desplazamiento, 350–500 ms; contenido visible si falla JS. |
| Franja de marcas | Scroll horizontal manual | Sin autoplay por defecto; controles anterior/siguiente y gesto táctil. |
| Galería | Filtrado sin navegación obligatoria | Mantener foco y anunciar cantidad; sin saltos sorpresivos del viewport. |
| Nosotros y contacto | Transición simple | Sin escenas 3D nuevas. |

El BG se modelará desde vector validado, extruyendo contornos con sus huecos y biseles; no dibujar una aproximación a ojo. Materiales violeta/azul/cian y luces controladas, sin bloom de pantalla completa ni sombras en tiempo real por defecto. Mientras falte el vector, la escena definitiva quedará pendiente y se mostrará el isotipo original en tamaño razonable.

La isla carga después del contenido principal. Reservar dimensiones antes de hidratar. Pausar render fuera del hero y al ocultarse la pestaña, liberar recursos al desmontar y gestionar pérdida de contexto. DPR máximo 1,5; en equipos modestos reducir a 1. Movimiento reducido, ahorro de datos, falta de WebGL o rendimiento sostenido insuficiente activan fallback estático. No esconder información al desactivar efectos.

MVP visual: fallback, navegación, filtros y franja manual. Versión de lanzamiento solicitada: 3D fiel y secuencia de hero probados, si llega el maestro. No marcar el 3D como terminado por tener únicamente un efecto CSS.

## 11. Estrategia SEO completa

El HTML de cada ruta llevará un H1, título y descripción únicos, canonical propio y alternates ES/EN recíprocos. `x-default` puede apuntar a la versión española por defecto. Incluir solo URLs publicables en sitemap. La documentación de Google describe cómo declarar [versiones localizadas](https://developers.google.com/search/docs/specialty/international/localized-versions).

Configuración prevista: `https://begamer.xyz/es/` y `https://begamer.xyz/en/`, sin redirección por IP. OG y Twitter Cards con imagen real autorizada. JSON-LD `Organization`, `WebSite`, `Service` y `BreadcrumbList` donde corresponda; no añadir reviews, estrellas, dirección o perfiles sociales ficticios. Breadcrumbs visibles y enlaces servicio ↔ caso ↔ contacto.

| Cluster ES / EN | Intención | Público | Destino |
|---|---|---|---|
| agencia gaming marketing / gaming marketing agency | Comercial | Marketing | Home |
| agencia esports Perú / esports agency Peru | Comercial | Marcas e instituciones | Live Esports |
| activaciones gaming para marcas / gaming brand activations | Comercial | Marketing | Corporate Gaming |
| gaming corporativo, team building gaming / corporate gaming, gaming team building | Comercial | RR. HH. | Corporate Gaming |
| clubes esports escolares, ligas escolares / school esports clubs, school esports leagues | Comercial | Directores | Colegios |
| experiencias Roblox para marcas / branded Roblox experiences | Comercial | Innovación | Game Building |
| desarrollo de juegos Roblox / Roblox game development | Comercial | Marcas | Game Building |
| producción de eventos esports / esports event production | Comercial | Productoras | Live Esports |
| cómo organizar un torneo empresarial / how to run a company esports tournament | Informativa | Empresas | Artículo futuro → Live Esports |
| consideraciones de un club escolar / school esports club considerations | Informativa | Educación | Artículo futuro → Colegios |

Son hipótesis de búsqueda, sin volúmenes, dificultad o posiciones inventadas. Validarlas después con Search Console y herramientas disponibles. Evitar páginas casi idénticas por ciudad o país. Lima/Perú y alcance LATAM son contexto comercial del brief; no implican una dirección física verificada.

Calendario editorial posterior: un artículo útil por mes como punto de partida, condicionado a material real. Secuencia: torneo corporativo; activación de marca documentada; club escolar y supervisión; proceso Roblox; producción presencial; relación con comunidades. Cada artículo necesita autor o responsable, ejemplos propios y revisión.

Medición: indexación y consultas relevantes por idioma, impresiones, clics, CTR, leads orgánicos por servicio. Crear propiedad de dominio en Search Console al disponer de DNS. Validar canonical, sitemap y 404 después de publicar. Staging con autenticación y `noindex`; robots no es control de acceso.

## 12. Estrategia de seguridad

Modelo de amenazas: spam y abuso SMTP, inyección en el mensaje, exposición de datos de contacto, secretos en el build, dependencias vulnerables y despliegues en el directorio equivocado. No se añadirán login, archivos adjuntos ni panel administrativo al MVP.

Validar campos en servidor además del navegador y aplicar escape según el contexto de salida. La [guía OWASP de validación](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) sirve como referencia, pero no sustituye las pruebas de esta implementación.

Contrato propuesto: endpoint same-origin PHP, sesión segura y token CSRF emitido por endpoint no cacheable, límites de cuerpo/campos, tipo de proyecto con allowlist, honeypot y limitación atómica por IP pseudonimizada. Como valores iniciales: 5 solicitudes/10 minutos por IP y límite global ajustado a la cuota SMTP verificada. Responder 429 con `Retry-After`; nunca confiar en un `X-Forwarded-For` arbitrario. Limitar también el endpoint que emite tokens.

Correo: destinatario y remitente definidos exclusivamente por configuración del servidor; correo validado del visitante solo como Reply-To, rechazando CR/LF. TLS SMTP verificado, timeout, manejo de fallos y registro mínimo por request ID. Mostrar éxito únicamente tras aceptación por el servidor de correo; eso no garantiza entrega a bandeja. Si falla, conservar el formulario en pantalla y ofrecer reintento sin duplicar envíos aceptados.

No se guardarán mensajes completos en logs por defecto. Credenciales, librerías privadas y almacenamiento de límites fuera del document root. Definir retención y responsables antes de recolectar datos reales. No enviar automáticamente copias al correo introducido por un visitante.

HTTPS con certificado verificado, CSP de mínimo alcance ensayada primero en report-only, `nosniff`, `Referrer-Policy`, `Permissions-Policy` y protección de frames. Evitar `unsafe-eval`; generar hashes cuando haya scripts inline necesarios. HSTS solo tras comprobar HTTPS y alcance; no activar preload o subdominios sin auditoría.

Checklist previa: secretos excluidos; auditoría npm/Composer revisada; endpoint inválido y rate limit probados; `.env`/`.git`/backups inaccesibles; TLS y redirects correctos; correo real recibido en prueba autorizada; datos legales completos; CSP sin bloquear UI; rollback ensayado. No declarar «sitio seguro» solo por cumplir una lista.

## 13. Estrategia de rendimiento

Objetivos de campo: LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1 al percentil 75, cuando exista tráfico suficiente. Son metas, no resultados medidos. [Web Vitals](https://web.dev/articles/vitals) distingue medición real y pruebas de laboratorio.

Presupuestos iniciales del proyecto: hero móvil ≤ 250 KB y escritorio ≤ 450 KB; JS crítico de navegación/formulario ≤ 70 KB gzip sin WebGL; isla 3D completa ≤ 300 KB gzip de JS como objetivo a verificar; modelo ≤ 500 KB, menos de 20.000 triángulos; carga inicial móvil ≤ 1 MB. Si las mediciones no permiten estos límites, reducir efectos y documentar el resultado, sin falsear cifras.

Imágenes con AVIF/WebP y fallback, tamaños 480/768/1200/1600 solo cuando la fuente tenga resolución suficiente. `srcset`, `sizes`, width/height y foco por dispositivo. Hero eager con prioridad alta; resto lazy. Fuentes locales WOFF2 con licencia, pocos pesos, `font-display: swap`, precarga únicamente de lo imprescindible. Caché larga para assets con hash; HTML con revalidación. Nada de videos de fondo automáticos. Comparar Lighthouse móvil con y sin WebGL para cuantificar su coste.

## 14. Accesibilidad y responsive

Objetivo de referencia: [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/); las comprobaciones automatizadas no equivalen a una certificación.

Desktop ≥ 1200 px: contenido máximo aproximado 1280 px, márgenes 48–80 px y barra lateral reservada. Tablet 768–1199 px: composición más corta, dos columnas cuando resulte legible, menú simplificado. Móvil < 768 px: una columna, header compacto, selector de idioma siempre alcanzable y sin barra lateral superpuesta. Probar desde 320 px; no imponer altura rígida a secciones con mucho texto.

Texto base 16–18 px, interlineado 1,5–1,65; titulares fluidos con `clamp`; botones de al menos 44 px como objetivo de diseño. Contraste 4,5:1 en texto normal y 3:1 en texto grande y componentes relevantes. Verificar sobre imágenes y gradientes, no solo sobre el fondo sólido.

Skip link, landmarks, foco visible, orden DOM lógico, `scroll-margin-top`, menú que devuelve el foco al cerrar, Escape funcional y no dependencia de hover. Formularios con labels visibles, errores asociados y resumen enfocable. Filtros con `aria-pressed`; cantidad de resultados anunciada. Las imágenes decorativas llevan alt vacío y el canvas no intercepta lectura ni clics. Probar teclado, lector de pantalla, zoom 200 % y reflow equivalente a 400 %, movimiento reducido y ausencia de JS/WebGL.

## 15. Modelo de contenido y mantenimiento

Archivos estructurados y colecciones validadas son suficientes para el MVP; un CMS se evaluará cuando exista un editor no técnico y frecuencia de actualización que lo justifique.

`Service`: id, slugs por idioma, títulos, resumen, destinatarios, capacidades, proceso, CTA, hero, alt, SEO. `Project`: id, slugs, nombre oficial, cliente opcional, categorías confirmadas, objetivos, rol, ejecución, servicios, medios, resultados con fuente, estado editorial y traducciones. `Brand`: id, nombre, archivo, alt, orden, relación y estado de publicación. `SiteConfig`: dominio, contactos, redes confirmadas, privacidad y entorno.

Estados: `draft`, `review`, `published`. Producción filtra antes de generar HTML y assets públicos; no basta con esconder contenido con CSS. Campos requeridos faltantes hacen fallar la validación del contenido publicado. Métricas solo con valor, unidad, fuente y autorización de uso. Campos internos de revisión no se serializan al frontend.

Proceso de alta de un caso: ficha y derechos → medios optimizados → traducciones → revisión → estado publicado → build y QA → release. El diseño de tarjetas no se modifica por cada caso nuevo.

## 16. Arquitectura Git/GitHub

Repositorio independiente de cualquier proyecto Vialma. Inicializar o inspeccionar Git antes de actuar; no reemplazar remotes existentes. `main` estable, ramas `codex/<cambio>`, PRs cuando se disponga del repositorio y releases etiquetadas. No crear un repositorio remoto sin definir propietario y visibilidad.

Versionar código, contenido aprobado, lockfiles, licencias y documentación. Excluir `.env` reales, credenciales, `node_modules`, `dist`, reportes temporales, backups y datos de leads. Definir tratamiento de originales grandes antes del primer push; mantener siempre copia local. No introducir Git LFS sin comprobar compatibilidad del flujo de despliegue.

CI propuesta: instalación reproducible → validación de contenido y tipos → build → tests → auditoría de dependencias → paquete con checksum. Separar construcción y despliegue; permisos mínimos en GitHub Actions, acciones fijadas y secretos específicos de BeGamer. Cada release registra commit, fecha, resultado de QA y cambios de configuración necesarios.

## 17. Estrategia de despliegue en cPanel

| Modelo | Ventaja | Condición / riesgo | Uso recomendado |
|---|---|---|---|
| Build local y subir compilados | No depende de Node en hosting | Más pasos manuales | Primera publicación y recuperación. |
| GitHub Actions + transferencia segura | Build repetible y trazable | SSH/SFTP, host key y secretos específicos | Evolución preferida después de validar hosting. |
| Git cPanel + `.cpanel.yml` | Despliegue desde interfaz cPanel | Repositorio fuera del público; necesita artefactos ya construidos o build compatible | Alternativa si el flujo de la cuenta lo permite. |

cPanel documenta el uso de `.cpanel.yml` para despliegues administrados ([guía oficial](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)); Namecheap también ofrece una [guía de Git Version Control](https://www.namecheap.com/support/knowledgebase/article.aspx/10113/2210/how-to-use-git-version-control-cpanel-plugin/). Estas funciones documentadas no verifican que estén habilitadas en la cuenta concreta.

Secuencia para esta cuenta sin configurar:

1. Inventariar plan, dominios existentes, document roots, cuotas, PHP soportado, extensiones, salida SMTP, SSL, SSH/SFTP y Git.
2. Añadir o identificar `begamer.xyz` con un document root exclusivo. No asumir que `public_html` está libre ni reutilizar el de otra web.
3. Revisar DNS actual y correo antes de cambiar nameservers o registros. Conservar MX/TXT que ya tengan una función. Obtener valores del hosting, sin inventar IP.
4. Preparar staging separado y protegido. El subdominio `staging.begamer.xyz` es una propuesta pendiente de creación.
5. Generar paquete estático más endpoints públicos. Instalar dependencias PHP y configuración privada fuera del document root. No subir repositorio, docs, originales o dependencias Node.
6. Configurar certificado, canonical host, redirección HTTPS y raíz → `/es/`, `DirectoryIndex`, 404 real y cachés. No convertir URLs desconocidas en respuestas 200 del Home.
7. Probar rutas profundas por URL directa, idiomas, formulario real, SMTP y cabeceras en staging. Verificar SPF/DKIM y política DMARC acordes al proveedor elegido, sin modificar registros ajenos a ciegas.
8. Registrar backup y release previa, subir a directorio de release y activar de forma atómica si el hosting lo permite. Si no, usar ventana de mantenimiento breve y procedimiento documentado.
9. Verificar producción; retirar `noindex` solo allí, enviar sitemap y observar errores y entrega de correo.

Rollback: restaurar el paquete anterior completo y su configuración compatible, conservar los archivos de assets que todavía referencien páginas cacheadas y repetir smoke tests. No ejecutar sincronización con borrado hasta validar el destino absoluto y el manifiesto. Mantener al menos dos releases recuperables fuera del público. Los paths reales del servidor quedarán pendientes hasta inspeccionar la cuenta.

## 18. Analítica y captación de leads

La primera versión puede funcionar sin trackers. Preparar una capa local de eventos con consentimiento y cargar GA4 solo cuando esté configurado y autorizado. No enviar nombre, email, empresa, mensaje ni query strings arbitrarias a analítica. El texto legal y el mecanismo de consentimiento deberán responder al tratamiento real; no se presenta este plan como dictamen jurídico.

| Evento | Cuándo | Parámetros no personales |
|---|---|---|
| `view_service` / `view_project` | Vista de detalle | id, locale, route |
| `click_service_cta` / `click_contact` | CTA comercial | service_id, placement, locale |
| `start_contact_form` | Primera interacción, una vez por vista | service_id, locale |
| `submit_contact_form` | Intento válido enviado | service_id, locale |
| `contact_form_success` | Confirmación real del backend | service_id, locale; sin contenido del lead |
| `change_language` | Cambio explícito | from, to, route_id |
| `click_social_link` | Perfil confirmado | platform, placement |

Conversión comercial: solicitudes aceptadas / sesiones elegibles, leads cualificados, servicio solicitado y fuente cuando sea lícito medirla. Calidad comercial se evalúa fuera de GA4, mediante seguimiento interno. Técnica: errores, tiempos y Core Web Vitals. SEO: consultas, clics y páginas indexadas. Establecer línea base durante el primer mes antes de fijar metas de mejora; no prometer un número de leads.

## 19. Roadmap de desarrollo

Estimación de planificación: 18–29 jornadas de una persona con capacidad frontend y apoyo puntual de diseño/backend; depende de assets y revisiones. No es una promesa de calendario ni una medida de ejecución de agentes.

| Fase | Objetivo y tareas | Dependencias / entrega | Prioridad, riesgo y aceptación | Esfuerzo |
|---|---|---|---|---|
| 1. Descubrimiento | Inventario, confirmar contenido y auditar hosting | Plan presente + accesos para auditoría pendiente | P0. Riesgo: capacidades desconocidas. Cierre: mapa de assets y ficha real del hosting. | 1–2 días |
| 2. Sistema visual | Tokens, tipografía, grid, header, botones | Referencia + manual | P0. Riesgo: logo incompleto. Cierre: componentes legibles en 3 tamaños. | 2–3 |
| 3. MVP visual | Seis secciones y layout de índices | Fase 2, fotos | P0. Riesgo: crop móvil. Cierre: home completo sin desbordes; no datos inventados. | 3–4 |
| 4. Interacciones | Filtros, barra, secuencia y 3D | MVP + vector/modelo validado | P1 para 3D, P0 controles. Cierre: fallback y performance probados. | 2–4 |
| 5. Contenido interno | Servicios, casos, ES/EN y legales | Fichas, traducciones y datos responsables | P0. Riesgo: casos sin validar. Cierre: rutas físicas y contenido aprobado. | 3–5 |
| 6. Calidad técnica | Backend, SEO, accesibilidad y optimización | Entorno PHP/SMTP y contenido | P0. Cierre: formulario, metadata y pruebas sin fallos críticos. | 3–4 |
| 7. Infraestructura | GitHub, staging, dominio, SSL y rollback | Cuenta/configuración confirmada | P0 para lanzamiento. Cierre: release trazable y recuperable. | 2–3 |
| 8. Lanzamiento | QA final, publicación y seguimiento inicial | Fases previas y cierre de pendientes | P0. Cierre: smoke tests reales y contenido revisado. | 2–4 |

Las fases 4 y 5 pueden avanzar por partes; no se bloqueará la maquetación por esperar el 3D. La publicación depende de la configuración y validación reales.

## 20. Matriz de QA y criterios de aceptación

| Área | Prueba | Criterio verificable |
|---|---|---|
| Build | Instalación limpia y producción | Sin errores; HTML físico para cada ruta publicable. |
| Contenido | Validación de schemas | Nada publicado con campos obligatorios pendientes; ningún resultado sin fuente. |
| Visual | Capturas 1440, 1024, 768, 390 y 320 px | Seis secciones, jerarquía de referencia y eliminación de bloques solicitados. |
| Navegación | Header, anclas, barra y menú con teclado | Foco visible, destinos correctos, Escape y retorno de foco. |
| Idiomas | Cada pareja de páginas y sección Home | Equivalencia conservada; títulos, errores y alt traducidos. |
| Proyectos | Cada filtro, cero resultados, recarga y volver | Conteo correcto, estado accesible y links de detalle válidos. |
| Formulario | Válidos, inválidos, timeout, doble clic, CSRF, abuso | Sin falso éxito, mensajes legibles, 422/403/429/503 adecuados y campos preservados. |
| Entrega | Envío de prueba autorizado en staging | SMTP acepta y destinatario confirma recepción; logs sin cuerpo del mensaje. |
| Seguridad | Peticiones a secretos, headers y payloads | Archivos privados no accesibles; escapes y límites efectivos. |
| SEO | HTML fuente, sitemap, canonical, alternates y 404 | Metadatos únicos, enlaces recíprocos, no soft 404 ni borradores indexados. |
| Accesibilidad | axe + revisión manual | Sin problemas serios/críticos detectados; teclado, lector y zoom funcionales. |
| 3D | WebGL apagado, contexto perdido, reduce motion y móvil real | Fallback inmediato, sin pérdida de contenido, sin render perpetuo fuera de vista. |
| Rendimiento | 3 pasadas Lighthouse móvil y perfil GPU | Registrar medianas y configuración, cumplir o justificar presupuestos. INP real pendiente de tráfico. |
| Hosting | URLs profundas, HTTPS, caché y rollback | Navegación directa correcta, errores reales y reversión ensayada. |

Automatizar recorridos críticos con Playwright, metadatos y contenido con pruebas de build, y validación de backend con pruebas de integración. La aceptación visual y la entrega de correo requieren observación real. No se han ejecutado estas pruebas de aplicación: todavía no se ha construido el sitio.

## 21. Riesgos y mitigaciones

1. **3D no fiel:** falta vector. Mitigar con fallback original y tarea pendiente explícita; no inventar geometría.
2. **Header distinto a referencia:** solo isotipo pequeño. Usarlo provisionalmente como indicó el usuario y sustituirlo al recibir la firma completa.
3. **Fotos de baja resolución o proporción vertical:** recortes por dispositivo y límites de ampliación; solicitar original del hero si hace falta.
4. **Categorías y casos no documentados:** publicar únicamente fichas completas, mantener drafts fuera del build público.
5. **Credenciales/correo no configurados:** pruebas simuladas claramente identificadas y despliegue bloqueado para captación real hasta verificar entrega.
6. **Hosting compartido desconocido:** compilar fuera del hosting, inspeccionar PHP/SMTP y usar frontend estático.
7. **Exceso de animación:** presupuestos, render por demanda y degradación controlada.
8. **Identidad o derechos pendientes:** registro por asset; no asumir afiliaciones de publishers a partir de logos de juegos.
9. **Divergencia ES/EN:** validación de claves y parejas de rutas en CI.
10. **Publicación sobre otra web:** document root exclusivo, manifiesto, backup y verificación de destino.

## 22. PROMPT TÉCNICO FINAL PARA IMPLEMENTAR LA WEB

El documento `02-prompt-tecnico-implementacion.md` es la segunda entrega, autocontenida y lista para ejecutar. Incluye las decisiones de este plan, el contenido ES/EN, los contratos de componentes, la preparación del formulario, las rutas y los criterios de terminado. Su ejecución constituye la tercera etapa; esta entrega no declara que la web o el hosting ya estén implementados.

### Referencias revisadas

- Brief maestro aportado por el usuario, versión 3.0, y collage visual adjunto.
- Manual de marca V3: páginas 5–11 para firma, isotipo, paleta y tipografía; 12–16 para geometría y fotografía; 19–22 para aplicaciones y estado de validación.
- Documentación oficial enlazada en los apartados técnicos, consultada el 22 de octubre de 2026. Las decisiones propuestas se distinguen de las capacidades efectivamente verificadas en la cuenta.
