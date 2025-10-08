import Link from "next/link";
import Image from "next/image";
import styles from "../styles/PortfolioCard.module.css"
import type { PortfolioItem } from "../data/portfolio";

export default function PortfolioCard({ item}: {item: PortfolioItem }) {
    const { id, name, description, link, image, status } = item;
    const href = `/portfolio/${id}`;

    return (
        <article className={styles.card}>
            {image ? (
                <div className={styles.imageWrapper}>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className={styles.image}
                        priority={false}
                    />
                </div>
            ): null}

            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{name}</h3>
                </div>

                <p className={styles.cardBody}>{description}</p>

                <div className={styles.ctaSlot}>
                    {status === 'coming soon' ? (
                        <span className={styles.statusBadge}>Coming Soon</span>
                    ) : link ? (
                        <Link href={link.href} target="_blank" className={styles.cardLink} aria-label={link.ariaLabel || link.label}>
                            {link.label}
                        </Link>
                    ) : (
                        <Link href={href} className={styles.cardLink}>
                            Learn More →
                        </Link>
                    )}
                </div>
            </div>
        </article>
    )
}