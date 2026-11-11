# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Portafolio personal estático (Astro 5) de un DevOps & Cloud Platform Engineer, desplegado en `https://rafaelmao.is-a.dev` (configurado como `site` en `astro.config.mjs`, usado por `@astrojs/sitemap`). Sin framework de UI: solo componentes `.astro`, CSS plano y JS vanilla.

## Comandos

```sh
npm install          # dependencias
npm run dev          # servidor local en http://localhost:4321
npm run build        # build de producción en ./dist (minificado con terser)
npm run preview      # sirve ./dist localmente
npx astro check      # verificación de tipos (tsconfig extiende astro/tsconfigs/strict)
```

No hay tests ni linter configurados.

## Arquitectura

- **Página única por secciones**: `src/pages/index.astro` solo compone las secciones de `src/components/sections/*` dentro de `BaseLayout`. `projects.astro` y `contact.astro` reutilizan `ProjectsSection` / `ContactSection` de forma aislada.
- **`src/layouts/BaseLayout.astro`** concentra todo lo global: metadatos SEO/OG, JSON-LD `Person`, header fijo, drawer móvil, footer y un `<script is:inline>` con el motor de idioma, scroll spy, scroll suave entre anclas y animaciones `.reveal` (IntersectionObserver). Al agregar una sección nueva, hay que añadir su enlace tanto en la nav de escritorio, el drawer móvil y el footer, y darle la clase `portfolio-section` + un `id` que coincida con `data-section` para que el scroll spy la detecte.
- **Bilingüe ES/EN sin librería de i18n**: todo texto visible se duplica en elementos hermanos con `data-lang="es"` y `data-lang="en"`. `global.css` (sección "Bilingual (i18n) Engine") oculta el idioma inactivo según `html[lang]`; el toggle del header cambia `document.documentElement.lang` y lo persiste en `localStorage('lang')` (por defecto `es`). Cualquier texto nuevo debe escribirse en ambos idiomas siguiendo este patrón. En datos de componentes se usan pares de campos `xxxEs` / `xxxEn`.
- **Datos embebidos en componentes**: el contenido (proyectos, experiencia, stack, certificaciones) está definido como arrays tipados en el frontmatter de cada sección (p. ej. `const projects: Project[]` en `ProjectsSection.astro`). La colección `src/content/projects/*.md` y su schema en `src/content/config.ts` **no se usan** en ninguna página (contenido de ejemplo del scaffold); editar los datos reales en los componentes.
- **Estilos y tono por scroll**: tokens en `:root` de `src/styles/global.css` (`--bg-*`, `--text-*`, `--aurora*`, `--signal-*`, `--line*`, `--fill-1/2/3`, `--r-*`, `--transition-*`; fuentes Instrument Sans + JetBrains Mono vía Google Fonts). Los colores están registrados con `@property` y transicionan: la página cambia de tono al hacer scroll (estilo Mercury) según la sección con `data-tone` que cruza el centro del viewport (observer en `BaseLayout.astro`, fija `html[data-tone]`). Hero oscuro → Trayectoria…Credenciales claras → Contacto/footer oscuros. La clase `.tone-dark` fija la paleta oscura en un bloque (hero, `.pc-stage` de proyectos, `.pass` de certificaciones, contacto, footer). En CSS de componentes usar tokens (`var(--fill-2)`, `color-mix(... var(--text-primary) ...)`) en vez de `rgba(255,255,255,…)`, salvo dentro de islas `.tone-dark`. Logos monocromos: `filter: var(--icon-mono)` / `var(--logo-mono)`. Cada componente lleva su propio `<style>` con scope.
- **Interactividad**: scripts por componente como `<script is:inline>` (JS vanilla, sin bundling). El hero (`HeroSection.astro`) es texto centrado sobre un campo de láminas de luz en CSS (estilo Raycast, tonos aurora) con entrada lenta escalonada (estilo Linear). El header es una barra flotante redondeada estilo Raycast. Animaciones de scroll en `global.css` + `BaseLayout.astro`: los `h2` se parten en palabras que suben una a una (`.split-w`, excluir con `.no-split`), `[data-stagger]` hace entrar los hijos en secuencia (`data-stagger="clip"` = revelado con clip-path estilo Mercury), líneas finas que se dibujan arriba de cada sección y el marquee de Stack se acelera con la velocidad del scroll. `src/components/ui/ClusterTopologyConsole.astro` y `public/assets/hero-datacenter.webp` / `devops-hero-avatar*.webp` quedaron sin uso. `three` está en dependencias pero no se importa.
- **Assets estáticos** en `public/` (`assets/` para imágenes y logos de tecnologías, `manifest.json` PWA, `robots.txt`).

## Contexto adicional

- Para trabajo de diseño o rediseño usar la skill `frontend-design`. Los comentarios del código que mencionan "taste-skill" / "House Rules" son históricos (esa skill fue eliminada); no tomarlos como guía de estilo.
- `.kiro/specs/astro-portfolio/` (requirements, design, tasks) y `ACCESSIBILITY.md` describen la especificación original; están parcialmente desactualizados (mencionan Tailwind, Framer Motion y paleta púrpura-rosa, que no se usan). El código es la fuente de verdad.
- `README.md` es el boilerplate del starter de Astro.
