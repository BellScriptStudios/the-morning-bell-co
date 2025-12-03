"use client";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";
import styles from "../styles/ContactPage.module.css";

export default function ContactPage() {
    return (
        <>
        <Header />

        <main className={styles.page}>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Contact The Morning Bell Co.</h1>
                    <p className={styles.lead}>
                        For venture, partnership, and project inquiries, use the form below to share
                        a brief overview. We review each message with care and respond when there is
                        a clear fit with our focus areas.
                    </p>
                </section>

                <section className={styles.contactGridSection}>
                    <div className={styles.contactGrid}>
                        <div className={styles.formColumn}>
                            <p className={styles.kicker}>Inquiries</p>
                            <h2 className={styles.sectionTitle}>Work with The Morning Bell Co.</h2>
                            <p className={styles.sectionText}>
                                Share a few details about your venture, project, or idea. You don&apos;t
                                need a full brief—just enough context for us to understand where this
                                fits and how we might help.
                            </p>

                            <form
                                className={styles.form}
                                action="mailto:hello@themorningbell.co"
                                method="post"
                                encType="text/plain"
                            >
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className={styles.input}
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                    />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className={styles.input}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                    />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="topic">
                                        Topic
                                    </label>
                                    <select
                                        className={styles.select}
                                        id="topic"
                                        name="topic"
                                        defaultValue="venture"
                                    >
                                        <option value="venture">New venture or concept</option>
                                        <option value="project">Digital project / platform</option>
                                        <option value="partnership">Partnership or collaboratio</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="message">
                                        Brief overview
                                    </label>
                                    <textarea
                                        className={styles.textarea}
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="A few sentences about what you’re building, timelines, and how you see The Morning Bell Co. involved."
                                        required
                                    />
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    Send Inquiry
                                </button>

                                <p className={styles.helperText}>
                                    Prefer email? Reach us directly at{" "}
                                    <a href="mailto:hello@themorningbell.co" className={styles.inlineLink}>
                                        hello@themorningbell.co
                                    </a>
                                    .
                                </p>
                            </form>
                        </div>

                        <aside className={styles.infoColumn}>
                            <p className={styles.kicker}>Fit & Focus</p>
                            <h2 className={styles.sectionTitle}>Before you reach out</h2>
                            <p className={styles.sectionText}>
                                We keep a focused portfolio and are intentional about the projects we take
                                on. Here are a few notes that may help you decide whether to contact us.
                            </p>

                            <div className={styles.infoCard}>
                                <h3 className={styles.infoTitle}>A good fit</h3>
                                <ul className={styles.list}>
                                    <li>Ventures that need clear digital systems and infrastructure.</li>
                                    <li>Brands that value thoughtful design and long-term operations.</li>
                                    <li>
                                        Early-stage concepts where strategy and structure are as important as execution.
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.infoCard}>
                                <h3 className={styles.infoTitle}>Not the right time for</h3>
                                <ul className={styles.list}>
                                    <li>High-volume, low-touch production work.</li>
                                    <li>Speculative projects without clear ownership or decision-makers.</li>
                                    <li>Engagements that require immediate turnaround without discovery.</li>
                                </ul>
                            </div>
                            <div className={styles.meta}>
                                <p className={styles.metaText}>
                                    For media, speaking, or other requests, reach out via{" "}
                                    <a
                                    href="mailto:hello@themorningbell.co"
                                    className={styles.inlineLink}
                                    >
                                    hello@themorningbell.co
                                    </a>{" "}
                                    with a short description and any key dates.
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className={styles.processSection}>
                    <div className={styles.processInner}>
                    <p className={styles.kicker}>Approach</p>
                    <h2 className={styles.sectionTitle}>How we review inquiries</h2>
                    <p className={styles.sectionText}>
                        We look for clarity of intent, alignment with our focus areas, and whether
                        we can genuinely add value. When there is a strong fit, we typically
                        follow up to schedule a short conversation and outline next steps.
                    </p>
                    </div>
                </section>

                <section className={styles.finalCtaSection}>
                    <div className={styles.finalCta}>
                        <h2 className={styles.finalTitle}>Have something specific in mind?</h2>
                        <p className={styles.finalText}>
                            Share a brief outline of your venture, timeline, and what you&apos;re
                            looking for. We&apos;ll review and respond when there&apos;s a clear
                            next step.
                        </p>
                        <Link href="mailto:hello@themorningbell.co" className={styles.finalButton}>
                            Email a short overview
                        </Link>
                    </div>
                </section>
            </div>
        </main>

        <Footer />
        </>
    )
}