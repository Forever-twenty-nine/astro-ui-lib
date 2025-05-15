/**
 * Tags HTML válidos para el componente Typography
 */
export type TypographyTag =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "small";

/**
 * Variantes de estilo para Typography
 */
export type TypographyVariant = "default" | "muted";

/**
 * Props del componente Typography.astro
 */
export interface TypographyProps {
    /**
     * Tag HTML a renderizar (por ejemplo, h1, p, small, etc.)
     * @default "p"
     */
    tag?: TypographyTag;

    /**
     * Variante de color/estilo del texto
     * @default "default"
     */
    variant?: TypographyVariant;

    /**
     * Clases CSS adicionales para el elemento
     */
    class?: string;
}
