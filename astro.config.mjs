// astro.config.mjs (Configuración para el sitio de DEMO)
import { defineConfig } from 'astro/config';
// Importa la integración de Tailwind que estés usando para la DEMO
// Si usas @tailwindcss/vite + @import en CSS:
import tailwindcssVite from '@tailwindcss/vite';
// Si usas la integración oficial @astrojs/tailwind:
// import tailwindIntegration from '@astrojs/tailwind';


export default defineConfig({
  // Configuración estándar para un sitio estático
  output: 'static', // O 'server' si tu demo necesita SSR
  publicDir: './public', // Directorio público estándar (créalo si no existe)
  srcDir: './src', // Tus archivos fuente están en src

  // Integraciones
  integrations: [
    // Si usas el plugin de Vite, ponlo en vite.plugins
    // Si usas la integración oficial, ponla aquí:
    // tailwindIntegration(),
    // ... otras integraciones (React, etc.) ...
  ],

  // Configuración de Vite (si usas el plugin @tailwindcss/vite)
  vite: {
     plugins: [
        tailwindcssVite(), // Añade el plugin de Vite aquí
     ],
  },

  // Aquí NO deben ir opciones específicas de build de librería como output: 'directory'

  // Opcional: Configuración para el servidor de desarrollo si necesitas algo especial
  server: {
     // port: 3000,
     // host: true,
  },
});