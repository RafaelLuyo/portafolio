---
paths:
  - "src/**/*.astro"
---

# Accesibilidad y SEO

- Objetivo WCAG 2.1 AA (ver `ACCESSIBILITY.md`): HTML semántico, jerarquía de encabezados correcta (un solo `h1`, en el Hero), `aria-label`/`aria-labelledby` en secciones y `nav`, `aria-hidden="true"` en elementos decorativos y SVGs sin significado.
- Botones de solo icono deben tener `aria-label`; controles que abren/cierran contenido actualizan `aria-expanded`.
- No eliminar el foco visible (`*:focus-visible` en `global.css`) ni los skip links.
- Enlaces externos: `target="_blank" rel="noopener noreferrer"`.
- Imágenes con `alt` descriptivo (o `alt=""` si son decorativas).
- Los metadatos SEO, Open Graph y el JSON-LD `Person` están centralizados en `BaseLayout.astro`; cada página pasa `title` (y opcionalmente `description`) como props en lugar de añadir `<meta>` propios.
