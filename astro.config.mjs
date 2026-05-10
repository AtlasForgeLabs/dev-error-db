import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dev-error-db.com',
  output: 'static',
  integrations: [sitemap()],
});
