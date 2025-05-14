import { defineConfig } from 'astro/config';
import tailwindcssVite from '@tailwindcss/vite';
export default defineConfig({
   devToolbar : {
      enabled: false
      
   },
   site: 'http://localhost:4321',

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

});