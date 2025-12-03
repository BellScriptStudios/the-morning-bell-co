export type PortfolioItem = {
    id: string;
    name: string;
    role: string;
    status: 'active' | 'inactive' | 'coming soon' | 'in development' | 'paused' | 'acquired' | 'sold' ;
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
    active?: boolean;
}

export const PORTFOLIO: PortfolioItem[] = [
 {
    id: "bellscript",
    name: "BellScript Studios",
    role: "Digital Studio",
    status: "active",
    description: "The digital arm of The Morning Bell Co., focused on modern web systems, technical implementation, and brand-aligned platforms for clients.",
    link: {
        href: "https://bellscript.studio",
        label: "Visit Website",
        ariaLabel: "Visit BellScript Studios website"
    },
    image: {
        src: "/images/primary-bs.png",
        alt: "BellScript Studios Logo",
        width: 75,
        height: 75
    },
    active: true
    },
 {
    id: "client-solutions",
    name: "Client Solutions",
    role: "Collaborative Projects",
    status: "active",
    description: "Bespoke websites, platforms, and integrations built in partnership with organizations that need clear, long-term digital infrastructure.",
    link: {
        href: "https://bellscript.studio",
        label: "Visit Website",
        ariaLabel: "Visit BellScript Studios website"
    },
    image: {
        src: "/images/primary-bs.png",
        alt: "BellScript Studios Logo",
        width: 75,
        height: 75
    },
    active: false
    },
 {
    id: "concepts",
    name: "Concept Development",
    role: "Research & Innovation",
    status: "in development",
    description: "A full-stack web and software development studio building modern, scalable solutions for businesses and creators.",
    link: {
        href: "https://bellscript.studio",
        label: "Visit Website",
        ariaLabel: "Visit BellScript Studios website"
    },
    image: {
        src: "/images/primary-bs.png",
        alt: "BellScript Studios Logo",
        width: 75,
        height: 75
    },
    active: false
    }
];

export const ACTIVE_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.active !== false);
export const INACTIVE_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.active === false);
export const ALL_VENTURES: PortfolioItem[] = PORTFOLIO;
export const COMING_SOON_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.status === 'coming soon');
export const IN_DEVELOPMENT_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.status === 'in development');
export const PAUSED_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.status === 'paused');
export const ACQUIRED_VENTURES: PortfolioItem[] = PORTFOLIO.filter(p => p.status === 'acquired' || p.status === 'sold');

