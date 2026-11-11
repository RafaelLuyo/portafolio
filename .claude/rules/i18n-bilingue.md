---
paths:
  - "src/**/*.astro"
---

# Contenido bilingüe ES/EN

- Todo texto visible se escribe en español **y** en inglés, como elementos hermanos con `data-lang="es"` y `data-lang="en"`. Nunca dejar texto visible en un solo idioma (excepción: nombres propios, marcas y términos técnicos idénticos en ambos idiomas, como "Kubernetes" o "GitOps").
- En arrays de datos del frontmatter, usar pares de campos `xxxEs` / `xxxEn` (p. ej. `titleEs`, `titleEn`) y renderizar ambos con su `data-lang`.
- No introducir librerías de i18n ni rutas por idioma (`/en/...`): el idioma se cambia en cliente vía `document.documentElement.lang` y CSS en `src/styles/global.css`.
- El español es el idioma por defecto (`<html lang="es">`, `og:locale` `es_PE`). Los `aria-label` estáticos van en español.
