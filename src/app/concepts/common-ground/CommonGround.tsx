"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "@/app/styles/CommonGroundPage.module.css"

export default function CommonGroundPageClient() {
    return (
        <>
        <Header />
            <main className={styles.page}>
                <section className={styles.section}>
                    <div className={styles.hero}>
                        <h1>Common Ground</h1>
                        <p className={styles.subtitle}>
                            Reimagining everyday infrastructure as community space.
                        </p>
                        <div className={styles.badgeRow}>
                            <p className={styles.badge}>Concept</p>
                            <p className={`${styles.badge} ${styles.locationBadge}`}>
                                Target City 
                                <span className={styles.dot}>
                                    ·
                                </span>
                                    Detroit, MI
                                </p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.idea}>
                        <h2>About Common Ground</h2>
                        <p>
                            The Commons explores how overlooked, everyday services can become 
                            meaningful anchors in a neighborhood when designed intentionally.
                        </p>
                    </div>
                    <div className={styles.combines}>
                        <h2>What It Combines</h2>
                        <ul>
                            <li>A modern laundromat as daily infrastructure</li>
                            <li>A café and shared space designed for lingering</li>
                            <li>Housing above that supports long-term stability</li>
                        </ul>
                    </div>
                    <div className={styles.impact}>
                        <h2>Intended Impact</h2>
                        <p>
                            By stacking uses that already exist separately, 
                            The Commons imagines a more human-scale, efficient, and 
                            resilient model for neighborhood development.
                        </p>
                    </div>
                    <div className={styles.status}>
                        <h2>Current Status</h2>
                        <p>
                            This concept is an ongoing exploration. It is 
                            not a live development or investment offering.
                        </p>
                    </div>
                </section>
            </main>
        <Footer />
        </>
    )
}