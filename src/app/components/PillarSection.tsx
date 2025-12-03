import styles from "../styles/PillarSection.module.css"

export default function PillarSection() {
    return (
        <section className={styles.pillars} id="practice">
            <div className={styles.pillarsInner}>
                <p className={styles.pillarsKicker}>Where We Work</p>
                <h2 className={styles.pillarsTitle}>Our practice spans three core areas.</h2>

                <div className={styles.pillarGrid}>

                    <article className={styles.pillarCard}>
                        <h3 className={styles.pillarName}>Digital Innovation</h3>
                        <p className={styles.pillarDesc}>
                            Web systems, platform development, and technical infrastructure.
                        </p>
                    </article>

                    <article className={styles.pillarCard}>
                        <h3 className={styles.pillarName}>Brand Technology</h3>
                        <p className={styles.pillarDesc}>
                            Modern digital experience design, integrations, and identity architecture.
                        </p>
                    </article>

                    <article className={styles.pillarCard}>
                        <p className={styles.pillarName}>Future Development</p>
                        <p className={styles.pillarDesc}>
                            Research-driven exploration of new concepts, spaces, and community-forward initiatives.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}