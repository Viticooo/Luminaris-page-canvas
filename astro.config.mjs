// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Sitio 100% estático (output: 'static' por defecto) → listo para Cloudflare Pages.
// TODO: cuando tengan dominio final, cámbienlo aquí (se usa para metadatos/URLs canónicas).
export default defineConfig({
  site: 'https://luminaris.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
