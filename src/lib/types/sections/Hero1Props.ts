import type { HeroBaseProps } from "./HeroBaseProps";
/**
 * Props específicas para el componente Hero1.
 */
export interface Hero1Props extends HeroBaseProps {
  /** Texto del botón (Hero1 usa un solo botón). */
  buttonText?: string;

  /** Enlace del botón. Por defecto: "#". */
  buttonHref?: string;

  /** Tipo del botón (`button`, `submit`, etc.). */
  buttonType?: string;
}
