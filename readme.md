# 🌌 Astro UI Library

Una librería de componentes reutilizables para proyectos Astro, creada con Tailwind CSS.

---

## 📦 Instalación

Puedes instalar esta librería desde GitHub Packages en tu proyecto Astro:

```bash
npm install @forever-twenty-nine/astro-ui-lib
````

Asegúrate de tener tu archivo `.npmrc` configurado correctamente:

```bash
@forever-twenty-nine:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

---

## 🚀 Uso

Importa y utiliza los componentes como cualquier otro módulo de Astro:

```html
---
import { Button } from "@forever-twenty-nine/astro-ui-lib";
---

<Button type="solid">Haz clic aquí</Button>
```

Para componentes por ruta:

```html
---
import Nav from "@forever-twenty-nine/astro-ui-lib/components/elements/Nav.astro";
---

<Nav links={[{ href: "#about", text: "Sobre Nosotros" }]} />
```

---

## 🗂️ Estructura de la librería

La librería está organizada dentro de `src/components/`, donde se agrupan los componentes, assets y tipos de forma modular y mantenible:

```
src/
└── components/
    ├── layout/        # Componentes estructurales generales (header, footer, overlay)
    │   ├── HeaderFixed.astro
    │   ├── Footer.astro
    │   └── Overlay.astro

    ├── sections/      # Secciones listas para usar como Hero, About, Contact
    │   ├── Hero1.astro
    │   ├── Hero2.astro
    │   └── About1.astro

    ├── ui/            # Componentes atómicos reutilizables
    │   ├── Button.astro
    │   ├── Typography.astro
    │   ├── BrandLink.astro

    ├── elements/      # Componentes de estructura visual (layout wrappers)
    │   ├── Container.astro
    │   ├── Section.astro
    │   └── Nav.astro

    ├── assets/        # Imágenes internas usadas como fallback por los componentes
    │   ├── brand/
    │   │   └── default-logo.svg
    │   ├── hero/
    │   │   ├── hero1-default.jpg
    │   │   └── hero2-default.jpg

    └── types/         # Tipos TypeScript para props, documentados con jsondoc
        ├── header-fixed-props.ts
        ├── footer-props.ts
        ├── hero1-props.ts
        └── shared.ts
```

---

## 📌 Convenciones

* **Todos los componentes usan imágenes locales por defecto** desde `/assets/`.
* **Las props se separan en archivos `.ts` dentro de `types/`** para facilitar documentación con `jsondoc`.
* **Se usa `astro:assets` en todos los componentes que renderizan imágenes.**
* Se prefiere `layout/` para componentes generales de estructura del sitio.
* `ui/` debe contener solo piezas atómicas sin lógica de layout.
* `elements/` sirve para estructura visual que organiza pero no representa contenido.

---


## 🛠 Desarrollo y contribución

### 📋 Scripts disponibles

| Script            | Descripción                                            |
| ----------------- | ------------------------------------------------------ |
| `dev`             | Ejecuta el entorno Astro local                         |
| `copy:components` | Copia los componentes a `dist/components`              |
| `generate:index`  | Genera `index.ts` e `index.d.ts` con todas las exports |
| `prepare:dist`    | Copia + genera índice, usado antes de publicar         |
| `build`           | Alias de `prepare:dist`                                |

---

### ✍️ Commits con Convenciones

Usamos [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/) para que `standard-version` genere automáticamente el changelog.

Ejemplos:

* `feat: agrega nuevo componente Hero`
* `fix: corrige error de padding en Footer`
* `chore: actualiza dependencias`
* `docs: mejora instrucciones del README`

---

## 🧪 Autenticación para publicar

1. Crea un archivo `.npmrc` con este contenido:

```ini
@forever-twenty-nine:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

2. Asegúrate de tener la variable `NPM_TOKEN` definida en tu entorno local o en GitHub Actions.

---
