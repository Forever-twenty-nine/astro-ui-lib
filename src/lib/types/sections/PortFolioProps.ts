import type { SectionBaseProps } from "./SectionBaseProps";

/**
 * Props para componentes tipo Portfolio.
 * 
 * Esta sección permite mostrar una grilla de proyectos, imágenes o tarjetas destacadas,
 * ideal para portfolios personales o de agencia.
 */
export interface PortfolioProps extends SectionBaseProps {
  /**
   * Título principal de la sección (ej: "Nuestro Trabajo").
   */
  title?: string;

  /**
   * Clases CSS adicionales para el título.
   */
  titleClass?: string;

  /**
   * Descripción introductoria o subtítulo para el portfolio.
   */
  description?: string;

  /**
   * Clases CSS adicionales para la descripción.
   */
  descriptionClass?: string;

  /**
   * Lista de ítems del portfolio a renderizar.
   */
  items?: {
    /**
     * Título o nombre del proyecto.
     */
    title: string;

    /**
     * Descripción breve del proyecto o ítem.
     */
    description?: string;

    /**
     * Imagen asociada al ítem.
     */
    image: any;

    /**
     * Texto alternativo para la imagen.
     */
    imageAlt?: string;

    /**
     * Enlace al proyecto, detalle o repositorio.
     */
    href?: string;
  }[];
}
