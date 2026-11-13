# Luminaris — Landing del Modelo Canvas

Sitio estático hecho con **Astro + TailwindCSS v4**. Sin backend.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera /dist
npm run preview   # sirve /dist localmente
```

## Qué editar

| Qué | Dónde |
|---|---|
| Correo y WhatsApp de contacto, texto del hero (3 opciones), fotos, proyectos de ejemplo | `src/data/site.ts` |
| Datos iniciales del panel interno (tareas, proveedores, recursos, costos) | `src/data/interno.ts` |
| Colores y tipografía | `src/styles/global.css` (`@theme`) |
| Contenido de cada bloque del canvas | `src/components/sections/*.astro` |
| Dominio final (metadatos) | `astro.config.mjs` → `site` |

**Fotos:** pónganlas en `src/assets/`, impórtenlas en `src/data/site.ts` y asígnenlas en `images` (Astro las optimiza a WebP). Mientras el valor sea `null` se muestra un espacio reservado.

## Páginas

- **`/` — Sitio público:** Propuesta de valor · Actividades clave · Ingresos · Segmentos de clientes · Relación con clientes · Canales, más el hero y el contacto.
- **`/gestion` — Panel interno:** menú lateral con Resumen · Tareas · Proveedores (socios clave) · Recursos · Costos. Se pueden agregar y eliminar elementos y marcar tareas. No está enlazado desde el sitio público y no se indexa en buscadores.
  - Los cambios se guardan en el **navegador de cada persona** (localStorage): no se comparten entre equipos ni dispositivos, y se pierden si se borran los datos del navegador.
  - "Restablecer datos" vuelve a los valores de `src/data/interno.ts`.

## ⚠️ Proteger el panel de gestión

El sitio es estático: **cualquiera que escriba `/gestion` puede ver esa página**. Antes de poner datos sensibles en `src/data/interno.ts`, protejan la ruta con **Cloudflare Access** (gratis hasta 50 usuarios, sin programar nada):

1. Cloudflare → *Zero Trust* → *Access* → *Applications* → *Add an application* → *Self-hosted*.
2. Dominio: el de su sitio, ruta `gestion*`.
3. Política: *Allow* → *Emails* → los correos del equipo.

Así, al entrar a `/gestion` se pide un código enviado al correo y solo el equipo puede pasar.

## Despliegue en Cloudflare Pages

1. Suban el repositorio a GitHub.
2. En Cloudflare → *Workers & Pages* → *Create* → *Pages* → *Connect to Git* y elijan el repo.
3. Configuración de build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Guardar y desplegar. Cada `push` a `main` vuelve a publicar el sitio.
