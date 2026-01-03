"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/ConceptPage.module.css";
import Link from "next/link";


export default function ConceptsClient() {
    return (
        <>
            <Header />
                <main className={styles.page}>
                    <section className={styles.container}>
                        <div className={styles.hero}>
                            <h1>Concepts</h1>
                            <p>
                                Concepts are long-term explorations focused on ownership, infrastructure, 
                                and community. These initiatives allow The Morning Bell Co. to experiment 
                                with new ideas, technologies, and business models that align with our mission 
                                of driving innovation and creating value.
                            </p>
                            <p>They are not services or active developments — they are ideas in progress.</p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.grid}>
                            <div className={styles.card}>
                                { /* The Ground Floor */ }
                                <p className={styles.title}>Common Ground</p>
                                <p className={styles.kicker}>Mixed-Use Community Infrastructure</p>
                                <p className={styles.desc}>
                                    A modern neighborhood commons combining essential services, 
                                    third-place space, and housing into a single, intentional system.
                                </p>
                                <div className={styles.linkRow}>
                                    <Link href="/concepts/common-ground" className={styles.link}>
                                        View Concept
                                        <span className={styles.arr}>→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </main>
            <Footer />
        </>
    )
}