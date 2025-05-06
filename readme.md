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

## 🧱 Estructura del Proyecto

```
src/
├── components/
│   ├── composed/       # Ej: Footer, HeaderFixed
│   ├── elements/       # Ej: Container, Nav, Section
│   ├── head/           # Metadata, Favicon
│   ├── section/        # Hero1, About1, Banner1
│   └── ui/             # UI básica: Button, Typography
├── pages/              # Página de test local
├── styles/             # Estilos globales y tokens
└── index.ts            # Punto de entrada principal
```

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
| `release`         | Ejecuta `standard-version` para nueva versión          |
| `release:patch`   | Publica nueva versión tipo `patch`                     |
| `release:minor`   | Publica nueva versión tipo `minor`                     |
| `release:major`   | Publica nueva versión tipo `major`                     |

---

### ✅ Publicar una nueva versión

1. Realiza los cambios en la librería.
2. Usa uno de los siguientes comandos:

```bash
npm run release:patch  # para cambios pequeños o fixes
npm run release:minor  # para nuevas funcionalidades
npm run release:major  # para cambios rompientes
```

Esto actualizará la versión, generará el `CHANGELOG.md` y creará un nuevo tag automáticamente.

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

# COMPONENTES

## ✨ Componentes Hero

La librería incluye dos variantes de secciones tipo "Hero", ideales para encabezados llamativos o secciones introductorias:

### 🧩 `Hero1.astro`

Un diseño moderno con layout dividido (texto + imagen), fondo en gradiente y soporte para imágenes locales o remotas.

#### Props principales:

| Prop           | Tipo                | Descripción                                 |
|----------------|---------------------|---------------------------------------------|
| `title`        | `string`            | Título principal                            |
| `description`  | `string`            | Texto descriptivo                           |
| `buttonText`   | `string`            | Texto del botón                             |
| `buttonHref`   | `string`            | URL del botón                               |
| `image`        | `ImageMetadata`     | Imagen local optimizada (`astro:assets`)    |
| `imageSrc`     | `string`            | URL externa de la imagen                    |

#### Ejemplo:

```astro
---
import Hero1 from "@forever-twenty-nine/astro-ui-lib/components/section/hero/Hero1.astro";
import heroImg from "../assets/hero-1.jpg";
---

<Hero1
  title="Bienvenido"
  description="Descubrí soluciones modernas con Astro + Tailwind"
  buttonText="Explorar"
  buttonHref="/servicios"
  image={heroImg}
/>
```

---

### 🧩 `Hero2.astro`

Una variante centrada, ideal para landings con uno o dos botones. Admite imagen local o externa.

#### Props adicionales:

| Prop                   | Tipo                | Descripción                            |
|------------------------|---------------------|----------------------------------------|
| `primaryButtonText`    | `string`            | Botón principal                        |
| `primaryButtonHref`    | `string`            | Enlace del botón principal             |
| `secondaryButtonText`  | `string`            | Botón secundario (opcional)            |
| `secondaryButtonHref`  | `string`            | Enlace del botón secundario            |

#### Ejemplo:

```astro
---
import Hero2 from "@forever-twenty-nine/astro-ui-lib/components/section/hero/Hero2.astro";
---

<Hero2
  title="Lanzamos tu producto"
  description="Diseños modernos y accesibles"
  imageSrc="https://placehold.co/600x400"
  primaryButtonText="Comenzar"
  primaryButtonHref="#"
  secondaryButtonText="Ver más"
  secondaryButtonHref="#"
/>
```


## 📝 Licencia

MIT © [FTN](https://github.com/Forever-twenty-nine)

