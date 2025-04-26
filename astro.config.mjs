import { defineConfig } from 'astro/config';
import tailwindcssVite from '@tailwindcss/vite';
export default defineConfig({
 
  output: 'static', 
  publicDir: './public', 
  srcDir: './src', 
  integrations: [
  ],

  vite: {
     plugins: [
        tailwindcssVite(), 
     ],
  },

  server: {
     
  },
});