export interface BrandLinkProps {
  /**
   * ID opcional para el elemento <a>
   */
  idLink?: string;

  /**
   * Clases adicionales para el enlace
   */
  classLink?: string;

  /**
   * Href de destino al hacer clic en el logo
   * @default "#"
   */
  hrefLink?: string;

  /**
   * Imagen del logo (local o remota).
   * Si no se pasa, se usará un fallback.
   */
  brandSrc?: any;

  /**
   * Texto alternativo para accesibilidad
   */
  brandAlt: string;

  /**
   * Clases adicionales para el componente <Image>
   */
  classImage?: string;
}
