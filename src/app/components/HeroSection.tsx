import styles from '../styles/HeroSection.module.css';
import Link from 'next/link';

export default function HeroSection() {
    return (
            <section className={styles.hero}>
                <div className={styles.heroInner}>

                    <h1 className={styles.title}>
                        Building the systems that support long-term innovation.
                    </h1>
                    <p className={styles.subTitle}>
                        We develop and support ventures in digital technology, 
                        applied design, and scalable operational strategy.
                    </p>
                    <div className={styles.btnStack}>
                        <Link href="/portfolio" className={`${styles.btn} ${styles.primaryBtn}`}>Our Ventures</Link>
                        <Link href="/contact" className={`${styles.btn} ${styles.secondaryBtn}`}>Contact</Link>
                    </div>
                    
                    <div className={styles.divider} />

                </div>
            </section>
    )
}
