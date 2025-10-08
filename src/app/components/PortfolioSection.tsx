import styles from "../styles/PortfolioSection.module.css";
import PortfolioCard from "./PortfolioCard";
import type { PortfolioItem } from "../data/portfolio";
import Link from "next/link";

type Props = {
    id?: string;
    title?: string;
    description?: string;
    items: PortfolioItem[];
    viewAllLink?: boolean;
    viewAllLabel?: string;
    viewAllHref?: string;
    viewHeading?: boolean;
};

export default function PortfolioSection({
    id = "portfolio",
    title = "Our Ventures & Investments",
    description = "A selection of our current ventures showcasing our commitment to innovation and excellence.",
    items,
    viewAllLink = true,
    viewAllLabel = "View All Ventures",
    viewAllHref = "/portfolio",
    viewHeading = true,
}: Props) {
    return (
        <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
            {viewHeading && <h2 id={`${id}-title`} className={styles.title}>{title}</h2>}
            {viewHeading && description && <p className={styles.desc}>{description}</p>}
            
            {items?.length ? (
             <div className={styles.stack}>
                {items.map((p) => (
                    <PortfolioCard key={p.id} item={p} />
                ))}
            </div>
            ) : (
                <p className={styles.noItems}>Ventures coming soon.</p>
            )}

            {viewAllLink && (
                <div className={styles.footerCta}>
                    <Link href={viewAllHref} className={styles.viewAll}>
                        {viewAllLabel}
                    </Link>
                </div>
            )}
        </section>
    );
}