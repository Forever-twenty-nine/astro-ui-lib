export interface NavLink {
    /** URL destino del enlace */
    href: string;
    /** Texto visible del enlace */
    text: string;
}

export interface NavProps {
    /**
     * ID del elemento <nav>
     */
    id?: string;

    /**
     * Clases CSS adicionales
     */
    class?: string;

    /**
     * Enlaces a renderizar
     */
    links: NavLink[];

    /**
     * Variante visual de color
     * @default "default"
     */
    variant?: "default" | "muted";
}
