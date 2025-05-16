/**
 * Props utilizadas por el componente Metadata.astro para etiquetas SEO y sociales.
 */
export interface MetadataProps {
    /**
     * Nombre del sitio o marca.
     */
    site: string;

    /**
     * Título de la página.
     */
    title: string;

    /**
     * Descripción de la página.
     */
    description: string;

    /**
     * URL completa de la página.
     */
    url?: string;

    /**
     * Autor del sitio o contenido.
     */
    author?: string;

    /**
     * Imagen para metadatos sociales. Por defecto: "/blog-placeholder-1.jpg".
     */
    image?: string;

    /**
     * URL canónica. Si no se indica, se usa `url`.
     */
    canonical?: string;
}
