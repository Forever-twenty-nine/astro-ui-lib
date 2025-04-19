export interface SiteConfig {
    autor: string;
    autorUrl: string;
    site: string;
    siteLegend: string;
    siteTitle: string;
    siteDescription: string;
    siteUrl: string;
    favicon: string;
    brandSrc: string;
    brandAlt: string;
    mailto: string;
    social: {
        instagram?: string;
    }
}

export const config: SiteConfig = {
    autor: 'FTN Agency',
    autorUrl: 'https://wwww.ftn.com',
    site: 'Company name',
    siteLegend: 'Digital solutions for entrepreneurs and modern businesses.',
    siteTitle: 'Landing page for startups',
    siteDescription: 'The company sells a lot of things ',
    siteUrl: 'https://wwww.namecompany.com/',
    favicon: '/favicon.svg',
    brandSrc: '/brand.svg',
    brandAlt: 'Logo de NameCompany',
    mailto: 'mailto:contacto@company.com',
    social: {
        instagram: 'lkajsdfjh'
    },
}