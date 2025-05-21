import type { SectionBaseProps } from "./SectionBaseProps";
import type { ButtonType } from "../Shared";
/**
 * Propiedades reutilizables para los componentes Banner (ej. Banner1, Banner2).
 * 
 * Este tipo permite definir estructura de texto, imagen y botón opcional, con soporte para clases personalizadas
 * y animaciones definidas por nivel.
 */
export interface BannerProps extends SectionBaseProps {
  /** Título principal del banner. Puede ser un `h2`, `h3`, etc. */
  title?: string;

  /** Clases adicionales para el título. */
  titleClass?: string;

  /**
   * Texto descriptivo complementario.
   * Puede incluir HTML básico para negrita, enlaces o estilos semánticos.
   */
  description?: string;

  /** Clases personalizadas para el párrafo de descripción. */
  descriptionClass?: string;

  /**
   * Imagen asociada al banner.
   * Puede ser una imagen importada desde `astro:assets` o una URL.
   */
  image?: any;

  /** Texto alternativo de la imagen (`alt`) para accesibilidad. */
  imageAlt?: string;

  /** Texto visible del botón (si se usa). */
  buttonText?: string;

  /** URL o ancla a la que dirige el botón. */
  buttonHref?: string;

  /** Tipo de botón HTML: `"button"`, `"submit"` o `"reset"` (por defecto `"button"`). */
  buttonType?: ButtonType;
}
