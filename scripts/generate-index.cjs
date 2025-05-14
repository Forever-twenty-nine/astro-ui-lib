const fs = require('fs');
const path = require('path');

const componentsDir = path.resolve(__dirname, '../dist/components');
const outputFileTs = path.resolve(__dirname, '../dist/index.ts');
const outputFileDts = path.resolve(__dirname, '../dist/index.d.ts');

// Función para obtener los nombres de los componentes
function getComponentExports(dir, basePath = './components') {
    let exports = []; 
    let types = [];

    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            const { exports: childExports, types: childTypes } = getComponentExports(fullPath, `${basePath}/${file}`);
            exports = exports.concat(childExports);
            types = types.concat(childTypes);
        } else if (file.endsWith('.astro')) {
            const componentName = path.basename(file, '.astro');
            if (file === 'design-tokens.css' && basePath === './components') {
                exports.push(`export { default as DesignTokens } from '../styles/${file}';`);
                types.push(`export const DesignTokens: string;`);
            }
            exports.push(`export { default as ${componentName} } from '${basePath}/${file}';`);
            types.push(`export const ${componentName}: AstroComponentFactory;`);
        }
    }

    return { exports, types };
}

// Función para generar el archivo index.ts e index.d.ts
function generateIndex() {
    const { exports, types } = getComponentExports(componentsDir);

    const tsContent = exports.join('\n') + '\n';
    fs.writeFileSync(outputFileTs, tsContent);
    console.log('✅ index.ts generado con éxito.');

    const dtsContent = `declare module '@forever-twenty-nine/astro-ui-lib' {
  import type { AstroComponentFactory } from 'astro';

${types.join('\n')}
}\n`;
    fs.writeFileSync(outputFileDts, dtsContent);
    console.log('✅ index.d.ts generado con éxito.');
}

generateIndex();
