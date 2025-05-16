/**
 * Props base para los componentes Hero1 y Hero2.
 */
export interface HeroBaseProps {
  /** ID opcional del elemento <section>. */
  sectionId?: string;

  /** Clases adicionales para personalizar el <section>. */
  sectionClass?: string;

  /** ID del <Container>. */
  containerId?: string;

  /** Clases adicionales para el <Container>. */
  containerClass?: string;

  /** Título principal a mostrar. */
  title?: string;

  /** Clases para personalizar el estilo del título. */
  titleClass?: string;

  /** Texto descriptivo debajo del título. */
  description?: string;

  /** Clases para personalizar la descripción. */
  descriptionClass?: string;

  /** Imagen ilustrativa (puede ser import local o URL externa). */
  image?: any;

  /** Texto alternativo para la imagen. */
  imageAlt?: string;
}
