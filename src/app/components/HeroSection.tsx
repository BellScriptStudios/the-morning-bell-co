import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
    return (
            <section className={styles.hero}>
                <h1 className={styles.title}>We invest in the ideas worth waking up for</h1>
                <p className={styles.subTitle}>Founded with a belief in purposeful progress — creating ventures that inspire, innovate, and endure.</p>
                <div className={styles.divider} />
            </section>
    )
}