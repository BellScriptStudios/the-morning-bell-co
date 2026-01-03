"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "../styles/AboutPage.module.css"

export default function AboutPage() {
    return (
    <>
        <Header />

        <main className={styles.page}>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Building the ideas worth waking up for.</h1>
                    <p className={styles.lead}>
                        Founded in 2025, The Morning Bell Co. is a parent company for ventures
                        at the intersection of technology, design, and the built environment —
                        each operated with clarity, discipline, and a long-term view.
                    </p>
                </section>

                <section className={styles.mission} id="mission">
                    <p className={styles.kicker}>Mission</p>
                    <h2 className={styles.sectionTitle}>Why we exist</h2>
                    <p className={styles.sectionText}>
                        The Morning Bell Co. exists to support ventures that create durable
                        value — not just momentum. We focus on building clear systems,
                        thoughtful operations, and responsible brands that can grow over time
                        without losing their integrity.
                    </p>
                </section>

                <section className={styles.focus} id="focus">
                    <p className={styles.kicker}>Focus Areas</p>
                    <h2 className={styles.sectionTitle}>Where we operate</h2>
                    <p className={styles.sectionText}>
                        Our work spans a small, intentional set of practice areas. Each is
                        approached with the same discipline: strong infrastructure, clear
                        governance, and an emphasis on long-term resilience.
                    </p>

                    <div className={styles.focusGrid}>
                        <article className={styles.focusCard}>
                            <h3 className={styles.focusTitle}>Digital Systems</h3>
                            <p className={styles.focusText}>
                                Web platforms, internal tools, and technical foundations 
                                that support how modern organizations operate and grow.
                            </p>
                        </article>

                        <article className={styles.focusCard}>
                            <h3 className={styles.focusTitle}>Brand & Experience</h3>
                            <p className={styles.focusText}>
                                Applied design and experience strategy for ventures that 
                                need coherent, trustworthy brands in a digital world.
                            </p>
                        </article>

                        <article className={styles.focusCard}>
                            <h3 className={styles.focusTitle}>Property & Community</h3>
                            <p className={styles.focusText}>
                                Long-term concepts in physical spaces and neighborhood-focused 
                                projects, explored with care and responsibility.
                            </p>
                        </article>
                    </div>
                </section>

                <section className={styles.values} id="values">
                    <p className={styles.kicker}>Values</p>
                    <h2 className={styles.sectionTitle}>How we operate</h2>

                    <div className={styles.valuesGrid}>
                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Clarity</h3>
                            <p className={styles.valueText}>
                                We prioritize structure, documentation, and plain 
                                language so everyone understands how decisions are made.
                            </p>
                        </article>

                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Creativity</h3>
                            <p className={styles.valueText}>
                                New ideas are encouraged, tested, and refined
                                 — not rushed into execution without a plan.
                            </p>
                        </article>

                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Commitment</h3>
                            <p className={styles.valueText}>
                                We stay engaged past launch, supporting ventures 
                                through the less glamorous operational phases.
                            </p>
                        </article>

                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Integrity</h3>
                            <p className={styles.valueText}>
                                We choose partners, projects, and decisions that 
                                align with our ethics, not just short-term returns.
                            </p>
                        </article>

                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Community</h3>
                            <p className={styles.valueText}>
                                We consider the people and places impacted 
                                by our work, not just the balance sheet.
                            </p>
                        </article>

                        <article className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Growth</h3>
                            <p className={styles.valueText}>
                                We invest in learning, feedback, and better 
                                systems so each venture can evolve responsibly
                            </p>
                        </article>
                    </div>
                </section>

                <section className={styles.origin} id="origin">
                    <p className={styles.kicker}>Origin Story</p>
                    <h2 className={styles.sectionTitle}>Where The Morning Bell Co. began</h2>
                    <p className={styles.sectionText}>
                        The Morning Bell Co. started as a home for a small set of projects
                        built nights and weekends — digital experiments, service concepts,
                        and early property ideas. Over time, it became a structured holding
                        space for ventures that share a common thread: disciplined execution,
                        thoughtful design, and a belief that the details behind the scenes
                        matter as much as what the world sees.
                    </p>
                </section>

                <section className={styles.contact} id="contact">
                    <p className={styles.kicker}>Contact</p>
                    <h2 className={styles.sectionTitle}>Connect with The Morning Bell Co.</h2>
                    <p className={styles.sectionText}>
                        We welcome conversations around new ventures, collaborations, and
                        opportunities that align with our focus areas. For partnership or
                        investment inquiries, please reach out directly.
                    </p>

                    <div className={styles.contactCta}>
                        <Link href="/contact" className={styles.link}>
                            Contact The Morning Bell Co.
                        </Link>
                    </div>
                </section>
            </div>
        </main>

        <Footer />
    </>
    )
}