/**
 * Props reutilizables para los componentes Banner1 y Banner2.
 * 
 * Permite definir título, descripción, botones y una imagen ilustrativa (local o remota).
 */
export interface BannerProps {
  /**
   * ID opcional para el elemento <section>.
   */
  sectionId?: string;

  /**
   * Clases CSS adicionales para el contenedor <section>.
   */
  sectionClass?: string;

  /**
   * ID para el componente <Container>.
   */
  containerId?: string;

  /**
   * Clases CSS adicionales para el <Container>.
   */
  containerClass?: string;

  /**
   * Título principal del banner.
   */
  title?: string;

  /**
   * Clases adicionales para el elemento de título.
   */
  titleClass?: string;

  /**
   * Texto descriptivo debajo del título.
   * Se puede usar HTML.
   */
  description?: string;

  /**
   * Clases CSS para el texto descriptivo.
   */
  descriptionClass?: string;

  /**
   * Imagen ilustrativa del banner.
   * Puede ser una imagen local (importada desde assets) o una URL remota.
   * Se usará una imagen por defecto si no se proporciona.
   */
  image?: any;

  /**
   * Texto alternativo para accesibilidad.
   */
  imageAlt?: string;

  /**
   * Texto del botón (si se desea incluir uno).
   */
  buttonText?: string;

  /**
   * Enlace de destino del botón.
   */
  buttonHref?: string;

  /**
   * Tipo de botón (button, submit o reset).
   * @default "button"
   */
  buttonType?: "button" | "submit" | "reset";
}
