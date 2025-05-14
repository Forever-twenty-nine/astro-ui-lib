import type { HeroBaseProps } from "./HeroBaseProps";

/**
 * Props específicas para el componente Hero2.
 */
export interface Hero2Props extends HeroBaseProps {
  /** Texto del botón principal. */
  primaryButtonText?: string;

  /** Enlace del botón principal. */
  primaryButtonHref?: string;

  /** Texto del botón secundario. */
  secondaryButtonText?: string;

  /** Enlace del botón secundario. */
  secondaryButtonHref?: string;

  /** Clases personalizadas para la imagen. */
  imageClass?: string;
}
