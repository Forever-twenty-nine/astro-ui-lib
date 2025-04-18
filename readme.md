# Astro UI Lib

Una librería de componentes reutilizables para proyectos creados con [Astro](https://astro.build/).

## 🚀 Características

- Componentes `.astro` listos para usar
- Estilos con Tailwind CSS (opcional, pero recomendado)
- Diseño limpio y fácil de integrar
- Listo para usarse como paquete npm o desde GitHub

## 🛠 Instalación local durante desarrollo

Puedes usar esta librería localmente en cualquier proyecto Astro sin necesidad de publicarla en npm.

### 📦 Paso a paso:

1. Coloca tu proyecto y esta librería en carpetas hermanas. Ejemplo de estructura:
```go
/Repositorios/ 
├── landing-basic-template/ # Tu proyecto Astro 
└── astro-ui-lib/ # Esta librería
```

2. Desde el proyecto destino (`landing-basic-template`), ejecuta:

```bash
npm install ../astro-ui-lib
```
Esto añadirá la dependencia en tu package.json:

```json
"dependencies": {
  "astro-ui-lib": "file:../astro-ui-lib"
}
```
Importa y usa los componentes en tu proyecto:

```astro
---
import NavLinks from 'astro-ui-lib/NavLinks';
---
<NavLinks
  links={[
    { href: "#about", text: "Sobre Nosotros" },
    { href: "#contact", text: "Contacto" }
  ]}
/>
```
Reinicia el servidor de desarrollo si haces cambios:

```bash
npm run dev
```
📁 Estructura
```go
astro-ui-lib/
├── components/
│   └── NavLinks.astro
├── package.json
└── README.md
```
📁 Styles
```
global-components.css
```
Se instala Tailwind CLI para ejecutarlo independiente con el siguiente comando:

```bash
npx @tailwindcss/cli -i ./tailwind.css -o ./global-components.css --watch --minify
```

