import type { SectionBaseProps } from "./SectionBaseProps";
import type { ButtonType } from "../Shared";

/**
 * Propiedades comunes para los componentes tipo About.
 * 
 * Este modelo sirve para secciones informativas como About1, About2, About3, etc.,
 * y permite mostrar texto, imagen y llamadas a la acción con estilo configurable.
 */
export interface AboutProps extends SectionBaseProps {
    /** Texto superior en formato etiqueta (ej: "Nuestra Visión"). */
    tagTitle?: string;

    /** Clases CSS para estilizar el `tagTitle`. */
    tagClass?: string;

    /** Título principal del bloque About. Suele ir dentro de un `h2`, `h3`, etc. */
    title?: string;

    /** Clases CSS adicionales para el título. */
    titleClass?: string;

    /** Imagen ilustrativa asociada al contenido. */
    image?: any;

    /** Texto alternativo (`alt`) para accesibilidad. */
    imageAlt?: string;

    /** Clases CSS adicionales para personalizar la imagen. */
    imageClass?: string;

    /**
     * Lista de párrafos o bloques de texto dinámico.
     * Cada objeto puede incluir el tag HTML deseado, clases y contenido.
     */
    paragraphs?: {
        /** Tag HTML para renderizar el bloque (ej: "p", "small", "h4", etc.). */
        tag?: string;
        /** Clases CSS para aplicar al párrafo individual. */
        class?: string;
        /** Contenido HTML del párrafo. Se renderiza como HTML con `set:html`. */
        content: string;
    }[];

    /** Texto que se muestra dentro del botón principal (si se usa). */
    buttonText?: string;

    /** URL o ancla a la que apunta el botón. */
    buttonHref?: string;
    /**
   * Tipo de botón HTML: `"button"`, `"submit"` o `"reset"`.
   * Por defecto se utiliza `"button"`.
   */
    buttonType?: ButtonType;
}
