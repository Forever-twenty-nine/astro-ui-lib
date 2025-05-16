/**
 * Enlace del menú de navegación.
 */
export interface HeaderLink {
    /**
     * URL del enlace.
     */
    href: string;

    /**
     * Texto visible del enlace.
     */
    text: string;
}

/**
 * Datos de marca a mostrar en el encabezado.
 */
export interface HeaderBrand {
    /**
     * URL a la que redirige el logo.
     */
    href?: string;

    /**
     * ID opcional para el enlace del logo.
     */
    id?: string;

    /**
     * Clases CSS personalizadas para el contenedor del logo.
     */
    class?: string;

    /**
     * Ruta o recurso de la imagen del logo.
     */
    src: any;

    /**
     * Texto alternativo para la imagen del logo.
     */
    alt: string;

    /**
     * Clases CSS adicionales para la imagen del logo.
     */
    classImage?: string;
}

/**
 * Props del componente HeaderFixed.astro
 */
export interface HeaderFixedProps {
    /**
     * ID opcional del header.
     */
    id?: string;

    /**
     * Clases adicionales para estilizar el header.
     */
    class?: string;

    /**
     * Arreglo de enlaces para el menú de navegación.
     */
    links: HeaderLink[];

    /**
     * Información de marca (logo e identificadores).
     */
    brand: HeaderBrand;

    /**
     * Variante visual del menú de navegación.
     */
    navVariant?: "default" | "muted";

    /**
     * Variante del contenedor (`default` o `compact`).
     */
    containerVariant?: "default" | "compact";
}
