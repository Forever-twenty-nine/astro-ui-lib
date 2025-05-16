export interface ContainerProps {
    /**
     * ID del contenedor (opcional).
     */
    id?: string;

    /**
     * Variante de padding horizontal.
     * @default "default"
     */
    variant?: "default" | "compact";

    /**
     * Clases CSS adicionales.
     */
    class?: string;
}
