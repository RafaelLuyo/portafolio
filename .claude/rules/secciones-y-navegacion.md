---
paths:
  - "src/components/sections/**"
  - "src/layouts/BaseLayout.astro"
  - "src/pages/**"
---

# Secciones y navegación

- Cada sección es un componente en `src/components/sections/` con raíz `<section id="..." class="portfolio-section" aria-labelledby="...">`. La clase `portfolio-section` es obligatoria: el scroll spy de `BaseLayout.astro` la usa para marcar el enlace activo.
- Al crear, renombrar o eliminar una sección, actualizar en `BaseLayout.astro` los **tres** lugares de navegación: `.nav-menu` (escritorio), `.mobile-nav__links` (drawer) y la lista del footer. El `data-section` de los enlaces debe coincidir con el `id` de la sección; los `href` son anclas (`#id`).
- Los `id` de sección existentes (`home`, `experience`, `modelo-operacion`, `projects`, `stack`, `certifications`, `contacto`) están enlazados desde varios sitios: no renombrarlos sin actualizar todas las referencias.
- El orden de la home se define solo en `src/pages/index.astro`.
- Los datos de contenido (proyectos, experiencia, stack, certificaciones) viven como arrays tipados en el frontmatter de cada sección. No migrar a `src/content/` salvo que se pida: esa colección es contenido de ejemplo sin uso.
