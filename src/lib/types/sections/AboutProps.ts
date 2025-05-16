/**
 * Props reutilizables para los componentes About1 y About2.
 */
export interface AboutProps {
    /** ID del section */
    sectionId?: string;

    /** Clases adicionales para el section */
    sectionClass?: string;

    /** ID del container */
    containerId?: string;

    /** Clases adicionales para el container */
    containerClass?: string;

    /** Texto pequeño de encabezado (badge) */
    tagTitle?: string;

    /** Clases para el tag */
    tagClass?: string;

    /** Título principal */
    title?: string;

    /** Clases para el título */
    titleClass?: string;

    /**
     * Imagen ilustrativa (local o remota). Se usa una imagen por defecto si no se provee.
     */
    image?: any;

    /** Texto alternativo para accesibilidad */
    imageAlt?: string;

    /** Clases adicionales para la imagen */
    imageClass?: string;

    /** Arreglo de párrafos con sus props individuales */
    paragraphs?: {
        tag?: string;
        class?: string;
        content: string;
    }[];

    /** Texto del botón */
    buttonText?: string;

    /** URL del botón */
    buttonHref?: string;
}
