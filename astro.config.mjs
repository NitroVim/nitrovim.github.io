// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://nitrovim.github.io/',
  outDir: 'dist',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});