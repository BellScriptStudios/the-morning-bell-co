export type PortfolioItem = {
    id: string;
    name: string;
    description: string;
    link?: {
        href: string;
        label: string;
        ariaLabel?: string;
    };
    image?: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    status?: 'active' | 'inactive' | 'coming soon' | 'in development' | 'paused' | 'acquired' | 'sold' ;
    featured?: boolean;
    active?: boolean;
}

export const PORTFOLIO: PortfolioItem[] = [
 {
    id: "bs-001",
    name: "BellScript Studios — Web & Software Division",
    description: "A full-stack web and software development studio building modern, scalable solutions for businesses and creators.",
    link: {
        href: "https://bellscript.studio",
        label: "Visit Website \u2192",
        ariaLabel: "Visit BellScript Studios website"
    },
    image: {
        src: "/images/primary-bs.png",
        alt: "BellScript Studios Logo",
        width: 200,
        height: 200
    },
    status: "active",
    featured: true,
    active: true
    }
];

export const FEATURED_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.featured && p.active !== false);
export const ACTIVE_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.active !== false);
export const INACTIVE_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.active === false);
export const ALL_VENTURES: PortfolioItem[] = PORTFOLIO;
export const COMING_SOON_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.status === 'coming soon');
export const IN_DEVELOPMENT_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.status === 'in development');
export const PAUSED_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.status === 'paused');
export const ACQUIRED_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.status === 'acquired' || p.status === 'sold');

