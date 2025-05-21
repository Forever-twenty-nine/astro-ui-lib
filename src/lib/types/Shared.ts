/**
 * Define los niveles de animación que puede usar un componente.
 *
 * - `"none"`: el componente no tendrá animaciones.
 * - `"basic"`: incluye transiciones simples como hover y escala.
 * - `"fancy"`: animaciones completas de entrada, típicamente con `fade`, `slide`, etc.
 */
export type AnimationLevel = "none" | "basic" | "fancy";

/**
 * Define los posibles tipos del botón HTML.
 *
 * - `"button"`: comportamiento por defecto, no envía formularios.
 * - `"submit"`: envía el formulario si está dentro de un `<form>`.
 * - `"reset"`: reinicia los valores del formulario.
 */
export type ButtonType = "button" | "submit" | "reset";
