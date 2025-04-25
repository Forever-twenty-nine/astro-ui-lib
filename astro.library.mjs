// astro.library.mjs (Configuración para el build de la LIBRERÍA)
import { defineConfig } from 'astro/config';
// Las integraciones de Tailwind NO son necesarias en la config de librería si solo generas .astro
// Si usas @apply o CSS modules en tus componentes, podría ser necesario procesarlos aquí.
// Si solo dependes de clases de utilidad de Tailwind, la integración no se necesita en esta config.

export default defineConfig({
  // Configuración para construir como librería
  output: 'directory', // ¡Este es el valor correcto para el build de librería!
  srcDir: './src', // Tus archivos fuente
  publicDir: false, // No necesitas copiar un public dir para la librería
  outDir: './dist', // La carpeta de salida para la librería (el valor por defecto es dist/)

  // Aquí puedes poner integraciones necesarias SOLO para el build de la librería
  // Por ejemplo, si tienes componentes React/Vue dentro de tus componentes Astro de librería,
  // necesitarías las integraciones de React/Vue aquí.
  integrations: [
      // react(), // Ejemplo
      // vue(), // Ejemplo
  ],

  // Configuración de Vite si es necesaria SOLO para el build de la librería
  // Vite: { /* ... */ },

  // Aquí NO deben ir opciones como output: 'static' o publicDir: './public'
  // Estos ajustes son para la compilación del sitio de demo, no de la librería.
});