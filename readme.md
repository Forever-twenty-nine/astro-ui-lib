# Astro UI Library

Una librería de componentes reutilizables para proyectos Astro.

---

## 🛠 Instalación y uso

Esta librería está disponible para proyectos Astro y puede instalarse fácilmente desde GitHub Pages.

### 📦 Instalación

1. Agrega la librería como dependencia en tu proyecto Astro utilizando npm:

   ```bash
   npm install @forever-twenty-nine/astro-ui-lib
   ```

   Esto añadirá la librería a tu archivo `package.json` como una dependencia.

2. Verifica que la instalación se haya realizado correctamente revisando tu archivo `package.json`:

   ```json
   "dependencies": {
      "@forever-twenty-nine/astro-ui-lib": "0.1.17"
   }
   ```

### 🚀 Uso

1. Importa los componentes que necesites en tus archivos `.astro`. Por ejemplo:

   ```astro
   ---
   import { Button } from "@forever-twenty-nine/astro-ui-lib";
   ---
   <Button text="Haz clic aquí" />
   ```

2. Asegúrate de reiniciar el servidor de desarrollo si realizas cambios en la librería o en tu proyecto:

   ```bash
   npm run dev
   ```

### 🌟 Ejemplo completo

Si deseas usar un componente como `NavLinks`, puedes hacerlo de la siguiente manera:

```astro
---
import NavLinks from "@forever-twenty-nine/astro-ui-lib/components/ui/NavLinks";
---

<NavLinks
  links={[
    { href: "#about", text: "Sobre Nosotros" },
    { href: "#contact", text: "Contacto" }
  ]}
/>
```

¡Y listo! Ahora puedes usar los componentes de la librería en tu proyecto Astro.

---

## 📁 Estructura de carpetas

La carpeta `src` contiene los archivos principales de la librería organizados de la siguiente manera:

```
src/
├── components/
│   ├── composed/       # Componentes compuestos (e.g., Footer, HeaderFixed)
│   ├── elements/       # Componentes básicos (e.g., Container, Nav, Section)
│   ├── head/           # Componentes para el <head> del documento (e.g., Metadata, Favicon)
│   ├── section/        # Componentes de secciones completas (e.g., Hero1, About1, Banner1)
│   └── ui/             # Componentes de interfaz de usuario (e.g., Button, Typography)
├── pages/              # Páginas principales (e.g., index.astro)
├── styles/             # Estilos globales y tokens de diseño
└── index.ts            # Archivo principal para exportar componentes
```

---

## 🛠 Scripts disponibles

En la carpeta `scripts` se encuentran los siguientes scripts que automatizan tareas comunes:

1. **Copiar componentes**  
   Copia los componentes desde `src/components` hacia `dist/components`:
   ```bash
   npm run copy:components
   ```

2. **Generar índice**  
   Genera los archivos `index.ts` e `index.d.ts` en la carpeta `dist` para exportar los componentes y declarar sus tipos:
   ```bash
   npm run generate:index
   ```

3. **Preparar distribución**  
   Ejecuta los scripts de copia y generación de índice para preparar la carpeta `dist` antes de publicar:
   ```bash
   npm run prepare:dist
   ```

4. **Registrar versión**  
   Muestra la versión actual de la librería que se está publicando:
   ```bash
   npm version
   ```

5. **Publicar la librería**  
   Publica una nueva versión de la librería en el registro configurado:
   ```bash
   npm run release
   ```

---

## ⚙️ Configuración adicional para desarrollo

Si deseas editar la librería y publicarla, asegúrate de configurar una variable de entorno para usar tu archivo `.npmrc`. Esto es necesario para autenticarte con el registro de npm.

1. Crea un archivo `.npmrc` en la raíz del proyecto si no existe.

2. Agrega tu token de autenticación al archivo `.npmrc`:

   ```
   //registry.npmjs.org/:_authToken=TU_TOKEN
   ```

3. Configura la variable de entorno `NPM_TOKEN` en tu sistema operativo:

   - En Windows:
     ```bash
     setx NPM_TOKEN "TU_TOKEN"
     ```

   - En macOS/Linux:
     ```bash
     export NPM_TOKEN="TU_TOKEN"
     ```

Esto garantizará que puedas publicar la librería sin problemas.
