/**
 * Tipos válidos de botón visual
 */
export type ButtonType =
    | "solid"
    | "ghost"
    | "soft"
    | "transparent"
    | "inverted"
    | "transparentInverted";

/**
 * Tamaños disponibles para el botón
 */
export type ButtonSize = "normal" | "small";

/**
 * Props del componente Button.astro
 */
export interface ButtonProps {
    /** ID opcional para el botón */
    id?: string;

    /**
     * Estilo visual del botón
     * @default "solid"
     */
    type?: ButtonType;

    /**
     * Clases CSS adicionales para el botón
     */
    class?: string;

    /**
     * Atributo target, solo se aplica si es un <a>
     */
    target?: "_self" | "_blank" | "_parent" | "_top";

    /**
     * Estado deshabilitado
     * @default false
     */
    disabled?: boolean;

    /**
     * Enlace del botón. Si existe, se renderiza como <a>
     */
    href?: string;

    /**
     * Tamaño del botón
     * @default "normal"
     */
    size?: ButtonSize;
}
