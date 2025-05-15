export interface OverlayProps {
    /**
     * El ID del overlay (útil para selección en scripts)
     * @default "overlay"
     */
    id?: string;

    /**
     * Clase CSS adicional para personalización
     */
    class?: string;

    /**
     * Controla si se muestra o no el overlay (visibilidad + interacción)
     * @default false
     */
    show?: boolean;

    /**
     * Variantes visuales predefinidas
     * @default "default"
     */
    variant?: "default" | "solid" | "white";
}
