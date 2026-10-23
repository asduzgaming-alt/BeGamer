import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://begamer.xyz', output: 'static', trailingSlash: 'always',
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/proyectos/') && !page.includes('/projects/') && !page.includes('/privacidad/') && !page.includes('/privacy/') })],
  vite: { build: { assetsInlineLimit: 0 } }
});
