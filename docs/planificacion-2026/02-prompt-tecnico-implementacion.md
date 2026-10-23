# Prompt técnico de implementación · BeGamer Agency

**Versión 1.0 · 22 de octubre de 2026.** Este documento inicia la etapa de desarrollo después de la planificación. Es autocontenido. No implica que exista ya una web, un repositorio remoto o configuración de hosting.

## Misión y alcance

Implementa la web corporativa bilingüe ES/EN de BeGamer Agency, agencia de gaming marketing, esports, activaciones y experiencias interactivas para marcas, empresas, instituciones educativas y comunidades de Perú y Latinoamérica. Objetivo: explicar servicios, mostrar proyectos reales y captar consultas B2B.

Trabaja en `D:\BeGamer\BeGamer Web Page 2.0`. Usa esta carpeta como raíz del proyecto; inspecciona sus instrucciones y estado antes de modificarla. Conserva las imágenes originales en `brands`, `events`, `projects`, `services`, `studio` y los archivos de raíz. No sobrescribas, renombres ni muevas originales. Crea derivados en carpetas nuevas. Respeta las restricciones de escritura del entorno y solicita ampliación de permisos cuando sea necesaria; no cambies de ubicación para eludirlas.

El propietario confirmó el dominio **begamer.xyz** y un **hosting compartido Namecheap aún sin configurar**. No hay correo receptor confirmado, datos SMTP, repositorio GitHub, document root ni acceso de despliegue. Prepara el desarrollo local y los artefactos sin inventar esos datos. No reutilices configuración ni credenciales de Vialma Travel.

El alcance incluye Home, cuatro servicios individuales, índices, casos basados en contenido, Nosotros, Contacto, privacidad, ES/EN, 3D cuando exista maestro validado, SEO, backend de formulario, pruebas y documentación cPanel. No añadas blog, tienda, panel administrativo, login, adjuntos o nuevas marcas comerciales sin necesidad confirmada.

## Referencias y precedencia

1. Petición y aclaraciones directas del propietario.
2. Las correcciones y contenido de este prompt.
3. Imagen maestra de composición y manual de marca, con sus limitaciones expresas.

Archivos de referencia originales:

- Manual: `C:\Users\svfvi\Downloads\BeGamer_Manual_de_Marca_2026_V3_Modular_Minimal.pdf`.
- Imagen: `C:\Users\svfvi\AppData\Local\Temp\codex-clipboard-077ed55a-8f32-40a4-9c43-f3480e5ab06e.png`.
- Brief original: `C:\Users\svfvi\.codex\attachments\47a975c5-d9ba-443e-8c87-f927eac3e35c\Texto pegado.txt`.

Si existen copias en `docs/referencias`, preferirlas para evitar dependencia de archivos temporales. La información necesaria para implementar está resumida aquí. Si falta una referencia visual, no inventes su contenido; mantén las especificaciones y registra qué comparación no pudo hacerse.

La referencia presenta fondo negro azulado, tipografía fuerte, grandes fotos reales, composición asimétrica, botones con borde degradado, líneas diagonales discretas y navegación compacta. No la conviertas en una plantilla de tarjetas genéricas ni agregues estadísticas ficticias. El manual usa Inter / Inter Display y permite recursos geométricos secundarios; el logo nunca se reconstruye con tipografía.

Correcciones definitivas:

- Hero: conservar titular, descripción, CTA, fotografía principal y símbolo BG. Eliminar foto secundaria de escenario y bloque decorativo inferior repetido. Mantener la línea pequeña superior «GAMING · PEOPLE · BRANDS · RESULTS».
- Confianza: solo título, texto y barra compacta de logos. Sin gran foto de evento ni texto promocional adicional debajo.
- Contacto: sin gran mando 3D decorativo.
- Títulos sin números decorativos. Un solo protagonista 3D en el hero.

## Stack y organización

Usa Astro en generación estática, TypeScript estricto, React + ReactDOM únicamente donde aporten valor, Three.js y React Three Fiber para la isla 3D. CSS nativo con tokens y componentes. GSAP/ScrollTrigger solo para la secuencia de hero; navegación, filtros y revelados simples con APIs nativas. No instales otra biblioteca de scroll o animación. Imágenes optimizadas con el pipeline Astro/Sharp. Sitemap con integración oficial.

Consulta documentación vigente y fija versiones estables mutuamente compatibles al implementar. Conserva lockfiles, declara la versión de Node compatible y usa instalación reproducible. No supongas que Node estará disponible en Namecheap: producción será HTML/CSS/JS más PHP. Para correo usa PHPMailer con Composer, sujeto a verificación del PHP y extensiones disponibles.

Estructura esperada:

```text
src/components/     SiteHeader, LanguageSwitcher, ScrollProgressNavigation,
                    ServiceCard, TrustedByCarousel, ProjectCard, ProjectFilters,
                    ContactForm, SiteFooter, ResponsiveImage, ImageLightbox
src/layouts/        BaseLayout, DetailLayout
src/sections/       HeroSection, ServicesSection, TrustedBySection,
                    ProjectsSection, AboutSection, ContactSection
src/pages/          rutas físicas ES/EN y 404
src/content/        servicios y proyectos validados
src/i18n/           es, en, tipos de diccionario y equivalencias de rutas
src/styles/         tokens, global, layout, componentes
src/lib/            routes, seo, assets, analytics, content-validation
src/hooks/          solo hooks React realmente necesarios
src/three/          InteractiveBGLogo, escena, cargador y fallback
src/assets/         derivados para el pipeline de imágenes
public/assets/      fuentes, logos autorizados y modelos aprobados
server/public/api/  csrf.php, contact.php
server/private/     lógica, configuración de ejemplo y ubicación de storage
scripts/            inventario, validación, paquete, comprobación de release
tests/              recorridos, build y contrato backend
docs/               decisiones, contenido pendiente, QA, despliegue y rollback
```

No crees carpetas o componentes vacíos por cumplir una lista. Mantén las responsabilidades separadas. `dist/` es salida, no fuente. El build debe copiar al paquete solo los endpoints públicos PHP; configuración, dependencias privadas y storage se instalan fuera del document root siguiendo documentación.

## Assets reales y uso

Hay 29 imágenes originales. Reinspecciona por si el propietario agregó archivos.

| Archivo | Uso y condición |
|---|---|
| `logo.png` | Isotipo BG blanco, 150 × 150, RGBA. Confirmado por el propietario para el header. No contiene «BeGamer Agency». Úsalo intacto en tamaño pequeño con nombre accesible. No recompongas una firma falsa. |
| `hero-bg.jpg` | Foto 5758 × 3713 de participantes en evento; opción de hero con mejor resolución. |
| `projects/ascension.png` | 795 × 725, jugador con camiseta roja como en referencia; primera prueba de encuadre del hero y caso. No ampliar excesivamente. |
| `projects/ecup.jpg` | 4000 × 6000, fotografía de competencia. |
| `projects/nubyx.png` | 740 × 890, fotografía de jugadores. |
| `projects/upc.jpg` | 1536 × 2048, actividad universitaria. No presentarla como fotografía escolar. |
| `services/marketing.jpg` | 2258 × 3011, imagen de Corporate Gaming. |
| `services/production.jpeg` | 5423 × 3313, escenario/trofeos para Live Esports. |
| `services/immersive.png` | 1821 × 958, entorno virtual para Game Building. |
| `studio/roblox-main.png`, `roblox-sub1.png`, `roblox-sub2.png` | Galería Game Building. No inferir seis proyectos diferentes desde seis capturas. |
| `studio/minecraft-main.jpeg`, `minecraft-sub1.jpeg`, `minecraft-sub2.jpeg` | Galería Minecraft contextual. |
| `events/ascension.png`, `ignite.jpeg`, `mobilemasters.jpeg` | Artes de torneo; mostrar completos donde importe el texto. No tratarlos como fotos documentales. |
| `brands/logo1.png` | UTP |
| `brands/logo2.png` | Doritos |
| `brands/logo3.jpg` | Bonoxs |
| `brands/logo4.png` | Moonton |
| `brands/logo5.png` | Garena |
| `brands/logo6.png` | Real Plaza |
| `brands/logo7.png` | Volt |
| `brands/logo8.png` | Cifrut |
| `brands/logo9.png` | Xiaomi |
| `brands/logo.19.png` | Flori, identificación visual a confirmar editorialmente |
| `bonoxs-logo.png` | Variante adicional; no duplicar cliente. |

Las marcas de la carpeta fueron aportadas como clientes. Úsalas en la revisión local con nombres y estado de publicación configurables. No añadas otras marcas del mockup. No conviertas logos de publishers en prueba de una alianza oficial. Conserva colores originales salvo disponer de variantes monocromas autorizadas; no apliques un filtro blanco que destruya el arte.

Faltan firma completa y vector/GLB maestro. No generes un BG tridimensional de geometría inventada. Implementa el contenedor, carga y fallback, y completa el modelo al recibir el vector. Una imagen plana con rotación CSS no se declara como modelo 3D. Falta foto escolar: usa una card editorial sin foto durante revisión, coherente con la retícula. No inventes estudiantes.

Genera mapa de assets con dimensiones, peso, SHA-256, alt ES/EN, punto focal desktop/mobile y uso. Conserva identidad y características de personas. Recortes y overlays CSS no destructivos; no generación sintética sobre fotografías.

## Sistema visual

Tokens iniciales: noche `#080C13`, blanco `#FAFCFF`, violeta `#9B65DF`, azul `#6E92E2`, cian `#36CAE6`; degradado violeta 0 %, azul 49 %, cian 100 %. Son valores de trabajo del manual, no especificaciones oficiales certificadas.

Inter Regular para cuerpo; Inter Display Black para titulares. Fuentes locales WOFF2 con licencia. No comprimir letras para imitar la referencia. Titulares en mayúsculas, escalas con `clamp`, cuerpo 16–18 px. Evita transformar textos accesibles para lograr la apariencia. Layout máximo aproximado de 1280 px; espaciado consistente basado en 8 px, márgenes fluidos. Fondo dominante oscuro, subtítulos de alto contraste, bordes finos y esquinas discretas. CTA con borde degradado y flecha funcional. No uses brillos intensos detrás de texto.

Desktop ≥1200: header horizontal, hero asimétrico y servicios 2 × 2. Tablet 768–1199: ajustar composición y menú. Móvil <768: una columna, menú compacto y selector ES/EN accesible, imagen enfocada en sujetos sin tapar el titular, sin barra lateral superpuesta. Probar desde 320 px. Nada de secciones con altura fija que corte contenido.

## Rutas, i18n y navegación

Todas las rutas deben generar HTML completo y funcionar al abrirse directamente, sin JS.

| ID | ES | EN |
|---|---|---|
| home | `/es/` | `/en/` |
| services | `/es/servicios/` | `/en/services/` |
| corporate | `/es/servicios/corporate-gaming/` | `/en/services/corporate-gaming/` |
| schools | `/es/servicios/colegios/` | `/en/services/schools/` |
| building | `/es/servicios/game-building/` | `/en/services/game-building/` |
| esports | `/es/servicios/live-esports/` | `/en/services/live-esports/` |
| projects | `/es/proyectos/` | `/en/projects/` |
| project | `/es/proyectos/[slug]/` | `/en/projects/[slug]/` |
| about | `/es/nosotros/` | `/en/about/` |
| contact | `/es/contacto/` | `/en/contact/` |
| privacy | `/es/privacidad/` | `/en/privacy/` |
| terms | `/es/terminos/` | `/en/terms/` |

Terms es condicional a necesidad y contenido aprobado. Los proyectos usan IDs estables independientes del idioma. Una traducción publicada requiere su correspondiente contenido validado. Si falta, no producir links rotos ni mezclar idiomas silenciosamente.

Header: logo original, Inicio/Home, Servicios/Services, Proyectos/Projects, Nosotros/About Us, Contacto/Contact, ES/EN y Hablemos/Let's Talk. Logo enlaza a Home del idioma actual. Menú sticky/fixed con fondo suficientemente opaco. En Home, menú de secciones con anclas; desde internas, índices correspondientes. CTA siempre lleva a contacto. Botón de menú accesible, estado expandido, Escape, devolución de foco y cierre tras navegar.

Usa anclas estables `home`, `services`, `trusted`, `projects`, `about`, `contact` en ambos idiomas. El cambio de idioma conserva ruta equivalente y hash válido. Barra lateral con anchors nativos y nombres accesibles, sección activa mediante IntersectionObserver, progreso y `aria-current`. `scroll-margin-top` evita ocultar encabezados. No interceptes scroll nativo.

## Contenido centralizado ES/EN

Escribe diccionarios completos, tipados, sin traducción automática en tiempo real. Incluye UI, errores, metadata, alt, estados vacíos y accesibilidad. No disperses texto comercial por componentes.

### Home

**Hero ES**
- Eyebrow: GAMING · PEOPLE · BRANDS · RESULTS.
- Titular: HACEMOS / QUE LAS MARCAS / SEAN PARTE / DEL JUEGO.
- Descripción: Conectamos marcas, instituciones y comunidades mediante experiencias gaming, competencias, tecnología y entretenimiento.
- CTA: CONOCE NUESTROS SERVICIOS.

**Hero EN**
- Mismo eyebrow.
- Titular: WE MAKE / BRANDS PART / OF THE GAME.
- Descripción: We connect brands, institutions and communities through gaming experiences, competitions, technology and entertainment.
- CTA: EXPLORE OUR SERVICES.

**Servicios ES:** IDEAS, COMUNIDAD Y EXPERIENCIAS QUE CONECTAN. / Integramos estrategia, producción y comunidad para crear experiencias de gaming que generan impacto real entre jugadores, audiencias y marcas. / VER TODOS LOS SERVICIOS.

**Services EN:** IDEAS, COMMUNITIES AND EXPERIENCES THAT CONNECT. / We bring strategy, production and community together to create gaming experiences that connect players, audiences and brands. / VIEW ALL SERVICES.

**Confianza ES:** CONFÍAN EN NOSOTROS. / Trabajamos con marcas, instituciones y comunidades que apuestan por el gaming como una plataforma real de conexión.

**Trust EN:** TRUSTED BY. / We work with brands, institutions and communities that see gaming as a platform for meaningful connections.

**Proyectos ES:** IDEAS REALES, COMUNIDADES REALES. / Explora nuestras experiencias, torneos y activaciones gaming. / VER TODOS LOS PROYECTOS.

**Projects EN:** REAL IDEAS, REAL COMMUNITIES. / Explore our gaming experiences, tournaments and brand activations. / VIEW ALL PROJECTS.

**Nosotros ES:** UNA AGENCIA NACIDA EN LA COMUNIDAD. / Conectamos el mundo gaming con marcas, instituciones y audiencias mediante experiencias reales, dentro y fuera de la pantalla. / CONOCE MÁS SOBRE NOSOTROS.

**About EN:** AN AGENCY BORN FROM THE COMMUNITY. / We connect the gaming world with brands, institutions and audiences through real experiences, on and off screen. / MORE ABOUT US.

Pilares: COMUNIDAD / Personas que comparten una misma pasión. → COMMUNITY / People who share the same passion. COMPETENCIA / Experiencias que impulsan talento y participación. → COMPETITION / Experiences that encourage talent and participation. EXPERIENCIA / Soluciones que conectan marcas y audiencias. → EXPERIENCE / Solutions that connect brands and audiences.

**Contacto ES:** HABLEMOS DE TU PRÓXIMO PROYECTO. / Cuéntanos tu idea, tu marca o tu comunidad. Estamos listos para crear algo increíble juntos.

**Contact EN:** LET'S TALK ABOUT YOUR NEXT PROJECT. / Tell us about your idea, your brand or your community. We're ready to create something great together.

### Servicios y páginas internas

**Corporate Gaming**

- ES: GAMING QUE CONECTA EQUIPOS Y MARCAS. Diseñamos experiencias gaming para empresas, instituciones y marcas que buscan conectar con sus públicos mediante entretenimiento, colaboración y tecnología.
- EN: GAMING THAT CONNECTS TEAMS AND BRANDS. We design gaming experiences for companies, institutions and brands looking to connect with their audiences through entertainment, collaboration and technology.
- Capacidades ES: Activaciones de marca; Torneos corporativos; Team building gaming; Experiencias presenciales y digitales.
- EN: Brand activations; Corporate tournaments; Gaming team building; In-person and digital experiences.
- CTA ES/EN: EXPLORAR CORPORATE GAMING / EXPLORE CORPORATE GAMING.
- Interna: destinatarios, formatos de activación, personalización, producción y beneficios potenciales sin cifras prometidas. Proceso: entender objetivo → diseñar experiencia → producir/operar → evaluar con indicadores acordados. Proponer entregables concretos según alcance, no paquetes de precio inventados.

**Colegios / Schools**

- ES: TU ECOSISTEMA GAMING ESCOLAR. Para colegios e institutos: ligas, clubes de esports y experiencias que motivan a tus estudiantes y fortalecen tu propuesta educativa.
- EN: YOUR SCHOOL'S GAMING ECOSYSTEM. For schools and educational institutes: leagues, esports clubs and experiences that engage students and strengthen your educational offering.
- Capacidades ES: Ligas internas e interescolares; Club de esports con entrenadores; Talleres para docentes y familias; Experiencias educativas en Roblox.
- EN: Internal and interschool leagues; Esports clubs with coaches; Workshops for teachers and families; Educational Roblox experiences.
- CTA ES exacto: QUIERO UN ECOSISTEMA PARA MI COLEGIO.
- CTA EN: BUILD A GAMING ECOSYSTEM FOR MY SCHOOL.
- Interna: propuesta para directores, programas, implementación, acompañamiento, bienestar digital, reglas de participación, privacidad y coordinación con familias. No afirmar mejoras académicas demostradas. El formulario comercial se dirige a representantes de instituciones, no a captar datos de estudiantes. No añadir perfiles o testimonios de menores.

**Game Building**

- ES: CREAMOS EXPERIENCIAS QUE SE JUEGAN. Desarrollamos experiencias interactivas y mundos digitales para marcas y comunidades.
- EN: WE BUILD EXPERIENCES MADE TO BE PLAYED. We develop interactive experiences and digital worlds for brands and communities.
- Capacidades ES: Desarrollo de experiencias en Roblox; Experiencias en Minecraft; Minijuegos personalizados; Activaciones gamificadas.
- EN: Roblox experience development; Minecraft experiences; Custom minigames; Gamified activations.
- CTA ES/EN: EXPLORAR GAME BUILDING / EXPLORE GAME BUILDING.
- Interna: tipos de experiencias, diseño, prototipado, desarrollo, pruebas y preparación de publicación. Galería de `studio` y `immersive`. No inventar títulos de proyectos, resultados, clientes o afiliaciones oficiales con Roblox/Minecraft. Mostrar capturas como material de portafolio sujeto a contexto verificado.

**Live Esports**

- ES: DE LA COMPETENCIA A LA EXPERIENCIA. Diseñamos, organizamos y producimos competencias gaming para comunidades, marcas e instituciones.
- EN: FROM COMPETITION TO EXPERIENCE. We design, organize and produce gaming competitions for communities, brands and institutions.
- Capacidades ES: Organización de torneos; Producción de eventos esports; Streaming y broadcast; Gestión de comunidades competitivas.
- EN: Tournament organization; Esports event production; Streaming and broadcasting; Competitive community management.
- CTA ES/EN: EXPLORAR LIVE ESPORTS / EXPLORE LIVE ESPORTS.
- Interna: formatos presenciales/online, operación, participantes, coordinación y broadcast. Resultados únicamente verificados. Artes de `events` como galería complementaria cuando su contexto esté aprobado, nunca como torneos vigentes con registro ficticio.

CTA final de servicio: SOLICITAR UNA PROPUESTA / REQUEST A PROPOSAL. Enlace a contacto con `?service=<id>` validado por allowlist, seleccionando el tipo adecuado.

### Proyectos

Filtros ES/EN: Todos/All; Torneos/Tournaments; Activaciones/Activations; Game Building/Game Building; Corporate Gaming/Corporate Gaming; Educación/Education.

Hay cuatro fotografías base: ascension, ecup, nubyx y upc. Usa esos IDs para borradores; no conviertas automáticamente el filename en nombre oficial ni atribuyas cliente o resultado. Si falta ficha, muestra en revisión local un rótulo editorial explícito y mantenlo fuera del build público. No publiques tarjetas vacías ni enlaces muertos.

Cada caso aprobado incluye nombre oficial, categoría(s), imagen y resumen, hero, cliente cuando esté confirmado, contexto, objetivo, rol de BeGamer, servicios aplicados, ejecución, galería, resultados solo con evidencia, CTA «HAGAMOS UN PROYECTO SIMILAR / LET'S CREATE A SIMILAR PROJECT» y siguiente caso. La secuencia siguiente usa solo casos publicables y excluye el actual; si hay uno solo, omitirla.

Filtros mediante botones accesibles `aria-pressed`, anuncio del número de resultados y mensaje de vacío ES/EN («Aún no hay proyectos publicados en esta categoría» / «There are no published projects in this category yet»). Todos los casos visibles en HTML inicial, filtros como mejora progresiva. Sin JS se ve la lista. Si se sincroniza categoría en URL, aceptar solo valores del catálogo y conservarla en historial.

### Nosotros, legales y footer

Nosotros desarrolla filosofía, creatividad, especialización y metodología coherentes con los servicios. No inventar antigüedad, premios, personal o biografías. Usar una foto documental disponible y los tres pilares. Footer con logo original, enlaces, privacidad y año dinámico; redes solo si hay URLs confirmadas.

Privacidad debe identificar al responsable, datos recogidos, finalidad, destinatarios/proveedores, transferencias cuando existan, retención, mecanismo de derechos y contacto. Mantén estos datos como pendientes editoriales hasta que el propietario los proporcione. No publiques un texto legal pretendidamente aprobado con nombres o correos inventados. No se necesita banner de cookies si no se incorporan tecnologías no esenciales; evalúa consentimiento al configurar analítica real. La sesión de seguridad del formulario debe explicarse según su uso efectivo.

## Contratos de componentes e interacción

- `BaseLayout`: recibe locale, routeId, title, description, canonical path, alternate paths y OG; genera lang, landmarks, skip link, header/footer y SEO. No duplicar metadatos.
- `ResponsiveImage`: width/height conocidos, srcset/sizes, alt traducido y loading explícito. Nunca entregar originales enormes por defecto.
- `ServiceCard`: datos del servicio y enlace real, imagen opcional; la ausencia de foto escolar no rompe la retícula.
- `TrustedByCarousel`: lista filtrada por estado de publicación, scroll nativo, controles anterior/siguiente, foco visible; sin autoplay. No duplicar logos accesibles para simular infinito.
- `ProjectsGallery`: lista desde contenido y filtros; no codificar las cuatro cards individualmente.
- `ImageLightbox`: solo si aporta a la galería; dialog accesible, Escape, foco contenido y devuelto al disparador. Sin autoplay. No crear modal de brief redundante: usar la página de contacto.
- `ContactForm`: máquina de estados idle/validating/submitting/success/error; validación y mensajes localizados; nunca éxito simulado en modo real.

### 3D y secuencia de scroll

Geometría desde SVG/GLB maestro validado. Extrusión con huecos correctos, biseles pequeños y materiales controlados. No inventar contornos del logo. Un único canvas decorativo detrás o al lado del texto, sin interceptar el CTA. Fallback de imagen en caja reservada desde el primer HTML.

Mouse fino: yaw ±8°, pitch ±5°, interpolación suave independiente de FPS. Scroll de salida del hero: foto hasta -48 px; BG hasta 12° de rotación, 60 px de desplazamiento y escala 1 → 0,9. Estos límites son puntos de partida, ajustables tras capturas y medición. Controlar scroll y puntero en grupos anidados o composición única, sin dos bucles escribiendo sobre la misma propiedad.

No pin prolongado, scroll-jacking, partículas densas, iluminación parpadeante, bloom de pantalla completa ni sombras costosas por defecto. Revelados cortos 350–500 ms y 16 px como máximo. Todo contenido debe quedar visible si el script no carga.

Cargar WebGL después del contenido, solo con condiciones adecuadas. DPR ≤1,5; pausar fuera del hero y pestaña oculta; renderizar por demanda; liberar geometrías, materiales, texturas, observers y listeners. Ante pérdida de contexto, falta de WebGL, `prefers-reduced-motion`, ahorro de datos o rendimiento insuficiente, activar fallback. Móvil puede usar fallback por defecto. Medir el coste real; no afirmar fluidez sin prueba en dispositivos y perfil.

## Formulario: frontend, backend y entrega

Campos con labels visibles, límites y mensajes traducidos:

| Campo | ES / EN | Validación |
|---|---|---|
| name | Nombre / Name | Requerido, 2–100 caracteres Unicode, trim. |
| email | Correo electrónico / Email | Requerido, formato válido, ≤254 caracteres; rechazar CR/LF. |
| company | Empresa o institución / Company or institution | Requerido, 2–150 caracteres. |
| projectType | Tipo de proyecto / Project type | corporate-gaming, schools, game-building, live-esports, other. |
| message | Mensaje / Message | Requerido, 20–3000 caracteres. |
| privacy | Acepto la política de privacidad / I accept the privacy policy | Boolean true, checkbox sin marcar por defecto y enlace real. |

Opciones: Corporate Gaming; Colegios / Gaming escolar (Schools / School gaming); Game Building; Live Esports; Otro (Other). CTA: ENVIAR MENSAJE / SEND MESSAGE. Durante envío: ENVIANDO… / SENDING…

Éxito: «Tu solicitud fue enviada. Gracias por contarnos tu proyecto.» / «Your request has been sent. Thank you for telling us about your project.» Solo mostrar tras aceptación SMTP real. No garantizar tiempo de respuesta. Error temporal: «No pudimos enviar tu solicitud. Tus datos siguen en el formulario; inténtalo de nuevo.» / «We couldn't send your request. Your details are still in the form; please try again.» Estado sin configuración: «El formulario todavía no está habilitado.» / «The form is not available yet.» No mostrar un correo de contacto inventado.

El servidor retorna códigos de error estables y fieldErrors; el frontend los traduce. Limita body a 16 KB y rechaza campos/tipos inesperados. No renderices texto enviado como HTML. `textContent` para errores. Haz validación real de límites en PHP aunque el navegador haya validado.

Diseño del protocolo:

1. `GET /api/csrf.php`, no-store, mismo origen. Sesión con cookie HttpOnly, Secure en HTTPS, SameSite Lax y token aleatorio con expiración. Limitar también solicitudes de tokens. No preconstruir tokens en HTML estático.
2. `POST /api/contact.php` recibe JSON, token CSRF en header, request ID único y datos. Verifica origen permitido, sesión/token, content type, tamaño y esquema. Mantener token válido para reintentos controlados; no romper el formulario por doble clic.
3. Honeypot, límite por IP pseudonimizada y global, con almacenamiento privado y operación atómica. Inicio propuesto: 5 solicitudes/10 min por IP; ajustar al hosting, no confiar en headers de proxy no verificados. Expirar registros para no crecer sin límite.
4. Deduplicar request ID por sesión durante una ventana breve para impedir doble envío. Si SMTP ya aceptó, reintento devuelve el mismo resultado sin reenviar. Los fallos transitorios deben poder reintentarse.
5. PHPMailer con SMTP TLS verificado, remitente y receptor fijos desde configuración privada, visitante solo Reply-To validado. No adjuntos ni destinatarios controlados por usuario. No autorrespuesta al visitante.
6. HTTP 200 tras aceptación SMTP; 422 validación; 403 CSRF/origen; 413 tamaño; 429 con Retry-After; 503 servicio no configurado o indisponible. Respuesta JSON mínima con request ID, sin stack traces ni credenciales.

Separar transporte simulado para pruebas de la configuración real. No enviar correos de prueba a terceros sin autorización. Sin credenciales: UI verificable y tests simulados, backend real devuelve no disponible; documentar qué resta. Logs solo de estado, hora y request ID, sin nombre/email/mensaje. Registrar consentimiento/versionado donde corresponda con la solicitud, sin convertir analítica en base de datos personal.

Config privada fuera de docroot: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, MAIL_FROM, MAIL_TO, ALLOWED_ORIGIN, RATE_LIMIT_SECRET y STORAGE_PATH. Ningún secreto usa prefijo `PUBLIC_`. `.env.example` contiene nombres y ejemplos neutros, nunca secretos reales. Verificar PHP soportado, mbstring, openssl y capacidad de storage antes de elegir implementación final. No asumir que Composer está instalado en producción: preparar dependencias privadas de forma compatible.

## SEO y indexación

Configura origen esperado `https://begamer.xyz` y trailing slash consistente. Titles y descriptions por página/idioma; canonical propio, hreflang recíproco ES/EN, OG y Twitter Cards. Incluye el contenido comercial en HTML estático, no dentro de un canvas ni solo después de hidratar.

Ejemplos de intención: Home «BeGamer Agency | Gaming marketing y esports»; Corporate «Corporate Gaming para empresas | BeGamer Agency»; Colegios «Ecosistemas gaming para colegios | BeGamer Agency»; Game Building «Experiencias Roblox y Minecraft | BeGamer Agency»; Live «Producción de eventos esports | BeGamer Agency». Redacta equivalentes ingleses y metadescripciones únicas sin promesas medibles.

JSON-LD Organization/WebSite, Service y BreadcrumbList según página; sin estrellas, reseñas, direcciones ni redes inventadas. Sitemap solo con páginas publicadas, sin drafts, API, 404 o resultados de filtro. OG solo con recursos autorizados. Un H1 por página y jerarquía correcta. `/` redirige 301 a `/es/` mediante hosting; no solo JavaScript. URLs inexistentes devuelven 404 real. Enlaces internos conectan servicios, casos y contacto.

Staging protegido con autenticación y noindex; no confiar en robots para seguridad. Producción debe fallar validación si conserva dominio de ejemplo, emails placeholder o indexación de borradores. No ejecutar cambios DNS ni publicar por confundir este prompt con credenciales o autorización de acceso inexistentes.

## Seguridad, rendimiento y accesibilidad

Prepara HTTPS, `nosniff`, Referrer-Policy, Permissions-Policy, protección de frames y CSP compatible con los assets. Prueba CSP en report-only; evita `unsafe-eval` y usa hashes para inline imprescindible. No activar HSTS preload/includeSubDomains sin comprobar alcance. Bloquea acceso a dotfiles, logs, backups y configuración; la defensa principal es no incluirlos en el paquete público.

Presupuestos de diseño: hero móvil ≤250 KB, desktop ≤450 KB; JS crítico sin 3D ≤70 KB gzip; isla 3D objetivo ≤300 KB gzip; modelo ≤500 KB y <20k triángulos; primera carga móvil ≤1 MB. Mide y reporta desviaciones. Objetivos de campo p75 LCP≤2,5 s, INP≤200 ms, CLS≤0,1; no los declares cumplidos por un único Lighthouse.

Derivados AVIF/WebP con fallback y srcset, sin upscaling injustificado. Hero eager/fetchpriority high; lazy debajo del pliegue. Dimensiones reservadas. Fuentes WOFF2 locales con licencia y swap. Caché larga solo para nombres con hash. WebGL y GSAP separados del código crítico; no cargar React en páginas que no lo necesitan.

WCAG 2.2 AA como referencia: contraste 4,5:1 texto normal, 3:1 texto grande y UI pertinente; foco visible, landmarks, skip link, teclado completo, etiquetas/errores asociados, 44 px de objetivo de diseño para controles, `aria-live` para estados, reduced-motion, layout sin scroll horizontal a 320 px y reflow. Texto útil y navegación funcionan sin WebGL y contenido principal sin JS. Menús y lightbox con foco correcto. No uses solo color para activos/errores.

## Modelo editorial y analítica

Valida Service, Project, Brand y SiteConfig con esquemas. Todos tienen textos por idioma; Project incluye `status` draft/review/published y evidencia por resultado; Brand tiene aprobación de publicación separada de su existencia en el inventario. Filtra borradores antes del build público y no copies al paquete público datos internos. No uses CSS para ocultar información privada.

No inventes cifras, casos, premios o testimonios. No publiques placeholders. Los campos faltantes permanecen en documentación de pendientes y vistas de revisión identificadas. Un build de revisión puede incluir drafts con noindex; uno de producción no.

Implementa helper de eventos que no envía nada a terceros mientras no se configure analítica y consentimiento. Eventos: view_service, click_service_cta, view_project, click_contact, start_contact_form, submit_contact_form, contact_form_success, change_language, click_social_link. Parámetros permitidos: ids de contenido, locale, placement y ruta normalizada. Jamás nombre, correo, empresa, texto libre ni URL con datos personales. Emitir éxito únicamente por respuesta real del backend y una sola vez.

## Git, cPanel y release

Inspecciona Git antes de inicializar. Proyecto independiente, rama de trabajo `codex/begamer-web`, `main` estable si se crea nuevo repositorio. No alteres remotes ni subas originales grandes sin revisar política. Excluir secretos, `.env`, leads, node_modules, dist y temporales. Conservar lockfiles y licencias. Repo remoto pendiente de propietario/visibilidad: no inventar URL.

Primera estrategia: build local/CI y subida de archivos compilados. GitHub Actions + SFTP/SSH puede automatizarse después de verificar cuenta, host key y secretos. Git cPanel con `.cpanel.yml` es alternativa; no generar comandos contra un document root ficticio. No depender de Node permanente ni instalar servidor SSR.

Genera documentos con pasos para:

1. Inventario de cuenta, document root exclusivo, PHP/SMTP, cuotas, SSL, SSH y Git.
2. Registro de `begamer.xyz` en cPanel y revisión de DNS existentes antes de cambios; preservar servicios de correo existentes.
3. Staging protegido en ubicación separada, build reproducible y paquete con manifiesto/checksum.
4. Instalación pública de dist + endpoints y privada de configuración/PHPMailer/storage.
5. Redirecciones HTTP/host/raíz, 404 real, caché y headers adaptados al servidor.
6. Validación de URLs profundas, traducciones, contacto, SMTP y assets en staging.
7. Release con backup, cambio atómico si está soportado y prueba posterior.
8. Rollback a paquete anterior y configuración compatible sin eliminar contenido de otras webs.

No incluyas comandos destructivos de sincronización con destino no verificado. No subas `.git`, documentación, originales ni paquetes Node a web pública. Separa build y deploy en CI; no conviertas un push cualquiera en publicación automática antes de configurar el destino.

## Pruebas y orden de ejecución

Ejecuta por fases sin detenerte para permisos rutinarios ya cubiertos por la petición. Solicita únicamente datos que realmente falten y continúa con el trabajo independiente.

1. Auditar carpeta y assets; registrar decisiones y pendientes.
2. Crear proyecto, sistema visual, rutas e i18n.
3. Construir seis secciones y páginas de servicio/índices, usando contenido real.
4. Implementar filtros, navegación y formulario con backend verificable localmente.
5. Integrar 3D con vector disponible; si falta, completar fallback y dejar esa dependencia explícita.
6. Completar casos autorizados, legales y SEO; optimizar assets.
7. Ejecutar QA, corregir problemas y preparar release/documentación.
8. Configurar staging/producción solo cuando exista acceso, destino verificado y contenido necesario.

Scripts mínimos: dev, build, preview, check, validate:content, test:e2e, test:backend y package:release. No escribas tests que solo repitan markup; cubre riesgos reales.

Pruebas obligatorias:

- Build limpio y todas las rutas físicas, enlaces y assets sin 404 inesperados.
- ES↔EN en cada detalle y hash de Home, sin perder entidad.
- Navegación por teclado, menú móvil, foco y reduced-motion.
- Filtros: todas las categorías, cero resultados, historial si se implementa y sin JS.
- Formulario: validación servidor, CSRF inválido, doble envío, 429, SMTP fallido, timeout, servicio sin configurar y éxito simulado de transporte de test. Prueba real de entrega solo autorizada y con receptor confirmado.
- No secretos, drafts, datos internos o originales innecesarios en dist.
- HTML semántico, canonical, hreflang, JSON-LD y sitemap coherentes; 404 real en hosting.
- Capturas desktop 1440, tablet 1024/768, móviles 390/320; revisar recortes, solapamientos, contraste y tipografía.
- Lighthouse móvil en tres pasadas, axe y revisión manual de teclado/zoom/lector. Registrar configuración y límites de cada prueba.
- WebGL apagado, contexto perdido, móvil modesto y pestaña oculta; sin render costoso cuando no corresponde.
- Probar rollback y rutas profundas en el hosting antes de considerar terminado el lanzamiento.

## Definición de terminado y entrega

Entrega código mantenible, preview local, documentación de comandos, decisiones, datos faltantes, resultados de QA y paquete de release. Reporta pruebas realmente ejecutadas y evidencia; separa resultados observados de objetivos.

El desarrollo local puede quedar listo para revisión sin acceso al hosting. El lanzamiento solo está terminado con contenido confirmado, logo/3D acordes al alcance final, seis secciones completas, cuatro páginas de servicio, portafolio navegable, traducciones completas, formulario con entrega real probada, legales completos, SEO implementado, responsive probado, secretos protegidos, Git preparado y despliegue/rollback verificados.

No presentes como «listo para producción» un formulario simulado, un 3D pendiente, casos inventados o configuración de hosting no comprobada. Si falta un dato externo, termina todo lo independiente y enumera exactamente lo que resta, su impacto y la forma de resolverlo.
