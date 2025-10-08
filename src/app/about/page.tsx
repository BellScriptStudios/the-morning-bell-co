"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/AboutPage.module.css"
import { ACTIVE_VENTURES } from "../data/portfolio";

export default function AboutPage() {
    const venturesPreview = ACTIVE_VENTURES.slice(0, 3);

    return (
    <>
        <Header />

        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Building the ideas worth waking up for.</h1>
                    <p className={styles.lead}>
                        Founded in 2025, The Morning Bell Co. unites ventures across technology, design, 
                        and property — each built with creativity, integrity, and a vision for a better tomorrow.
                    </p>
                </div>
            </section>

            <section className={styles.mission} id="mission">
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Mission</h2>
                    <p className={styles.sectionText}>
                        We foster innovation and empower ventures that make meaningful impact — blending strategy, creativity, and
                        technology to shape how people live and work. We build with intention, clarity, and long-term vision.
                    </p>
                </div>
            </section>

            <section className={styles.values} id="values">
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Values</h2>
                    <div className={styles.valuesGrid}>
                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Clarity</h3>
                            <p className={styles.valueText}>Transparent goals and honest communication.</p>
                        </article>
                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Creativity</h3>
                            <p className={styles.valueText}>Innovation drives everything we do.</p>
                        </article>
                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Commitment</h3>
                            <p className={styles.valueText}>We’re invested in every venture’s success.</p>
                        </article>
                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Integrity</h3>
                            <p className={styles.valueText}>We uphold trust in every decision.</p>
                        </article>
                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Community</h3>
                            <p className={styles.valueText}>We build things that uplift people.</p>
                        </article>
                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Growth</h3>
                            <p className={styles.valueText}>Continuous learning and evolution.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className={styles.origin} id="origin">
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Story</h2>
                    <p className={styles.sectionText}>
                        What began in 2025 as a space to build and nurture meaningful projects became a home for creativity and
                        innovation. The Morning Bell Co. brings ventures together under a single vision: invest in ideas that inspire
                        progress and stand the test of time.
                    </p>
                </div>
            </section>

            <section className={styles.ventures} id="ventures">
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Ventures</h2>
                    <div className={styles.venturesGrid}>
                        {venturesPreview.map((v) => (
                            <Link key={v.id} href={v.link?.href ?? "/portfolio"} className={styles.ventureCard} target="_blank">
                            {v.image ? (
                                <Image
                                src={v.image.src}
                                alt={v.image.alt || v.name}
                                width={v.image.width}
                                height={v.image.height}
                                className={styles.ventureLogo}
                                />
                            ) : (
                                <span className={styles.ventureName}>{v.name}</span>
                            )}
                            <span className={styles.ventureMore}>Learn more →</span>
                            </Link>
                        ))}
                        </div>

                        <div className={styles.venturesCta}>
                        <Link href="/portfolio" className={styles.link}>
                            View all ventures →
                        </Link>
                        </div>
                    </div>
                    </section>

                    <section className={styles.contact} id="contact">
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Let’s build something meaningful</h2>
                        <p className={styles.sectionText}>
                        We’re always exploring new ideas and partnerships. Reach out to collaborate, invest, or bring your vision to life.
                        </p>
                        <div className={styles.contactCta}>
                            <a className={styles.link} href="mailto:hello@themorningbell.co">Contact Us</a>
                        </div>
                    </div>
                    </section>
            </main>
        <Footer />
    </>
    )
}