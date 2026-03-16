// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Ajoutez votre URL GitHub Pages (indispensable pour le sitemap et les métadonnées)
  site: 'https://votre-pseudo.github.io',

  // 2. Ajoutez le nom de votre dépôt GitHub (ex: '/mon-portfolio')
  // SI votre site est sur 'votre-pseudo.github.io' (dépôt principal), mettez '/'
  base: '/nom-du-repo',

  vite: {
    plugins: [tailwindcss()]
  }
});
