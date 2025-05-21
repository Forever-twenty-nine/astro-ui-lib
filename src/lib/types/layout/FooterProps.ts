import type { AnimationLevel } from "../Shared";


/**
 * Estructura de cada enlace del footer.
 */
export interface FooterLink {
    /** URL de destino del enlace */
    href: string;

    /** Texto visible del enlace */
    text: string;
}

/**
 * Props del componente Footer.astro
 */
export interface FooterProps {
    /**
     * Clases CSS adicionales para el <footer>.
     * @default "bg-gray-900"
     */
    className?: string;

    /**
     * Texto secundario que aparece debajo del logo.
     */
    legend?: string;

    /**
     * Imagen del logo en el footer.
     * Puede ser una imagen local importada o una URL remota.
     * Si no se pasa, se usará una imagen por defecto.
     */
    imageSrc?: any;

    /**
     * Texto alternativo para accesibilidad de la imagen.
     */
    imageAlt: string;

    /**
     * Lista de enlaces para el componente <Nav /> dentro del footer.
     */
    navLinks?: FooterLink[];

    /**
     * Texto de copyright mostrado en el pie del componente.
     * Por ejemplo: "© 2025 Mi Sitio"
     */
    copyright?: string;

    /**
     * Autor del sitio o desarrollador mostrado al pie.
     * Por ejemplo: "Creado por FTN"
     */
    author?: string;
    /**
     * Nivel de animación visual aplicado al componente.
     * Controla cómo entra el contenido al viewport:
     * 
     * - `"none"`: sin animación
     * - `"basic"`: transiciones simples (hover, escala)
     * - `"fancy"`: animaciones completas (`fade`, `slide`, etc.)
     */
    animationLevel?: AnimationLevel;
}
