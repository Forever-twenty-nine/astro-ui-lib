
const fs = require('fs-extra');
const path = require('path');

// Usando __dirname, que es válido en CommonJS
const srcDir = path.resolve(__dirname, '../src/lib');
const distDir = path.resolve(__dirname, '../dist');

fs.copy(srcDir, distDir, (err) => {
  if (err) {
    console.error('Error al copiar los componentes:', err);
  } else {
    console.log('✅ Componentes copiados a dist/components');
  }
});

