/**
 * Props utilizadas por el componente Basehead.astro para generar metadatos SEO y favicon.
 */
export interface BaseHeadProps {
    /**
     * Nombre del sitio o marca. Aparece en los metadatos.
     */
    site: string;

    /**
     * Título de la página. Se utiliza en la etiqueta <title>.
     */
    title: string;

    /**
     * Descripción de la página. Se incluye en los metadatos para SEO.
     */
    description: string;

    /**
     * URL absoluta de la página. Útil para compartir y SEO.
     */
    url?: string;

    /**
     * Autor del contenido o del sitio.
     */
    author?: string;

    /**
     * URL de una imagen para metadatos sociales (Open Graph, Twitter, etc.).
     */
    image?: string;

    /**
     * Ruta del favicon personalizado.
     */
    favicon?: string;

    /**
     * Color del tema para navegadores que lo soportan (por ejemplo, en móviles).
     * Ejemplo: "#ffffff"
     */
    themeColor?: string;
}
