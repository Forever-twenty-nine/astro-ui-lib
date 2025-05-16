/**
 * Props utilizadas por el componente Favicon.astro.
 */
export interface FaviconProps {
    /**
     * Ruta del ícono del sitio (favicon). Por defecto: "/favicon.svg".
     */
    favicon?: string;

    /**
     * Indica si se debe incluir el archivo manifest. Por defecto: true.
     */
    includeManifest?: boolean;

    /**
     * Color del tema del navegador. Por defecto: "#ffffff".
     */
    themeColor?: string;
}
