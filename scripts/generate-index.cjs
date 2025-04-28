const fs = require('fs');
const path = require('path');

const componentsDir = path.resolve(__dirname, '../dist/components');
const outputFile = path.resolve(__dirname, '../dist/index.ts');

// Función para obtener los nombres de los componentes
function getComponentExports(dir, basePath = './components') {
    let exports = [];

    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        // Si es un directorio, llama recursivamente
        if (stat.isDirectory()) {
            exports = exports.concat(getComponentExports(fullPath, `${basePath}/${file}`));
        } else if (file.endsWith('.astro')) {
            // Obtener el nombre del archivo sin la extensión
            const componentName = path.basename(file, '.astro');
            exports.push(`export { default as ${componentName} } from '${basePath}/${file}';`);
        }
    }

    return exports;
}

// Función para generar el archivo index.ts
function generateIndex() {
    const exports = getComponentExports(componentsDir);
    const content = exports.join('\n') + '\n';

    fs.writeFileSync(outputFile, content);
    console.log('✅ index.ts generado con éxito.');
}

generateIndex();
