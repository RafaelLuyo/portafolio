---
paths:
  - "src/**/*.astro"
  - "src/styles/**"
---

# Estilos y diseño

- Usar los tokens de `:root` en `src/styles/global.css` (`--bg-*`, `--text-*`, `--signal-*`, `--line*`, `--r-*`, `--transition-*`, `--container-max`) en lugar de colores, radios o duraciones hardcodeados. Si falta un valor reutilizable, añadirlo como token.
- CSS plano: estilos globales en `global.css`, estilos de componente en su propio `<style>` (con scope). No añadir Tailwind, preprocesadores ni librerías de componentes.
- Reutilizar las clases compartidas existentes (`section-header`, `card`, `btn btn-primary` / `btn-secondary`, `segmented` (control con píldora deslizante; la lógica de la píldora vive en `BaseLayout.astro`), `tag`, `font-mono`) antes de crear variantes nuevas.
- Tono por scroll (estilo Mercury): hero oscuro, secciones intermedias claras, contacto y footer oscuros. Cada `<section>` declara `data-tone="light|dark"`; la paleta cambia sola vía tokens registrados con `@property`. Todo color de componente debe salir de tokens para funcionar en ambos tonos; los bloques que siempre son oscuros (pantallas de producto, tarjetas de credenciales) llevan la clase `.tone-dark`. Inspiración: Mercury (tono), Raycast (navbar y fondo del hero), Linear (entrada), Apple/Stripe (tipografía). Titulares grandes y apretados (Instrument Sans), JetBrains Mono solo para datos técnicos, el gradiente aurora para hero, eyebrows, foco y luz de tarjetas.
- Movimiento: entrada lenta y escalonada del hero; `h2` partidos en palabras (`.split-w`), grupos `[data-stagger]` (y `data-stagger="clip"`), bloques con `block-settle` por `animation-timeline: view()` y luz que sigue al cursor en `.card`. La lógica vive en `global.css` y `BaseLayout.astro`; reutilizarla en vez de crear observers nuevos. Toda animación debe respetar `prefers-reduced-motion`.
- Para trabajo de diseño o rediseño usar la skill `frontend-design`. Las referencias a "taste-skill" en comentarios del código son históricas. Las especificaciones de `.kiro/` (paleta púrpura-rosa, iconos 3D flotantes) están obsoletas en lo visual.
- Logos de tecnologías: SVG en `public/assets/icons/`; logos de empresas en `public/assets/logos/`. Referenciar con rutas absolutas (`/assets/...`). Mantener el aviso de marcas del footer si se añaden logos de terceros.
- El layout debe funcionar en móvil; el breakpoint principal del proyecto es `max-width: 1024px`.
