// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nitrovim.github.io/',
  outDir: 'dist',

  vite: {
    plugins: [tailwindcss()]
  }
});