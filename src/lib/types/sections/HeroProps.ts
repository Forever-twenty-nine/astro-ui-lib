import type { SectionBaseProps } from "./SectionBaseProps";
import type { ButtonType } from "../Shared";

/**
 * Propiedades comunes para componentes tipo Hero.
 * 
 * Este modelo permite crear distintos diseños (Hero1, Hero2, etc.)
 * usando una sola definición de props reutilizable y bien documentada.
 */
export interface HeroProps extends SectionBaseProps {
  /** Título principal que se muestra en el Hero. */
  title?: string;

  /** Clases Tailwind para personalizar el título. */
  titleClass?: string;

  /** Descripción secundaria del Hero. */
  description?: string;

  /** Clases Tailwind para personalizar la descripción. */
  descriptionClass?: string;

  /** Tipo de botón (`button`, `submit` o `reset`). */
  buttonType?: ButtonType;

  /** Enlace del botón principal. */
  buttonHref?: string;

  /** Texto visible en el botón. */
  buttonText?: string;

  /** Imagen opcional del Hero (local o remota). */
  image?: any;

  /** Texto alternativo para la imagen. */
  imageAlt?: string;
}
