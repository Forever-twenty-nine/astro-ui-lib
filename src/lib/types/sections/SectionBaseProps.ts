import type { AnimationLevel } from "../Shared";

/**
 * Propiedades base reutilizables para secciones de la librería como Hero, Banner, About, etc.
 * 
 * Esta interfaz centraliza las props más comunes para secciones visuales,
 * facilitando consistencia, reutilización y mantenimiento del código.
 */
export interface SectionBaseProps {
  /**
   * ID único para la sección principal del componente.
   * Útil para navegación con anclas o accesibilidad.
   */
  sectionId?: string;

  /**
   * Clases CSS adicionales para el elemento `<section>`.
   * Ideal para definir márgenes, espaciado, fondo, etc.
   */
  sectionClass?: string;

  /**
   * ID opcional para el contenedor `<Container>` interno.
   * Permite referenciarlo desde JS u otros componentes.
   */
  containerId?: string;

  /**
   * Clases CSS adicionales para el contenedor principal.
   * Comúnmente se usa para layouts, paddings o max-width.
   */
  containerClass?: string;

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
