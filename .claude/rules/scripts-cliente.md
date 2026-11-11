---
paths:
  - "src/**/*.astro"
---

# JavaScript en cliente

- Los scripts de componentes son `<script is:inline>` con JS vanilla (sin TypeScript, sin imports, sin frameworks). Mantener ese estilo: código autocontenido, acceso al DOM con comprobaciones nulas (`?.`) y listeners `{ passive: true }` en scroll.
- La lógica global (idioma, scroll spy, scroll suave, drawer móvil, animaciones `.reveal`) vive solo en `BaseLayout.astro`; no duplicarla en componentes. Para animar la entrada de un elemento, basta con añadirle la clase `reveal`.
- Persistencia en cliente solo vía `localStorage` con las claves existentes (`lang`, `theme`).
- No añadir dependencias de runtime pesadas sin necesidad; `three` está instalado pero sin uso actualmente.
