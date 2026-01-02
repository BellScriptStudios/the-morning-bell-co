"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/PortfolioPage.module.css";

type Venture = {
  id: string;
  name: string;
  role: string;
  status: "Active" | "Inactive" | "Coming Soon" | "In Development";
  description: string;
  href?: string;
  logoSrc?: string;
};

const VENTURES: Venture[] = [
  {
    id: "bellscript",
    name: "BellScript Studios",
    role: "Digital Studio",
    status: "Active",
    description:
      "The digital arm of The Morning Bell Co., focused on modern web systems, technical implementation, and brand-aligned platforms for clients.",
    href: "https://www.bellscript.studio",
  },
  {
    id: "concepts",
    name: "Concepts",
    role: "Innovation",
    status: "In Development",
    description:
      "Exploratory work around future ventures, community-facing ideas, and systems designed to support emerging opportunities.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.portfolioHero}>
            <h1>Our Ventures</h1>
            <p>
              The Morning Bell Co. supports a growing set of ventures and initiatives
              that sit at the intersection of technology, design, and operations. This
              page highlights our active work and in-development concepts.
            </p>
          </section>

          <section
            className={styles.portfolioSection}
            aria-labelledby="ventures-heading"
          >
            <header className={styles.sectionHeader}>
              <p className={styles.kicker}>Portfolio</p>
              <h2 id="ventures-heading">Ventures & practice areas.</h2>
              <p className={styles.sectionIntro}>
                Each venture reflects a different way we build systems for long-term
                clarity: from direct digital work to exploratory concept development.
              </p>
            </header>

            <div className={styles.portfolioGrid}>
              {VENTURES.map((venture) => {
                const statusClass =
                  venture.status === "Active"
                    ? styles.statusActive
                    : venture.status === "Inactive"
                    ? styles.statusInactive
                    : venture.status === "Coming Soon"
                    ? styles.statusComingSoon
                    : styles.statusInDevelopment;

                return (
                  <article key={venture.id} className={styles.card}>
                    <header className={styles.cardHeader}>
                      {venture.logoSrc && (
                        <div className={styles.logoWrap}>
                          <Image
                            src={venture.logoSrc}
                            alt=""
                            width={32}
                            height={32}
                            className={styles.ventureLogo}
                          />
                        </div>
                      )}

                      <div className={styles.cardTitleBlock}>
                        <h3 className={styles.cardTitle}>{venture.name}</h3>
                        <p className={styles.cardRole}>{venture.role}</p>
                      </div>

                      <span className={`${styles.statusBadge} ${statusClass}`}>
                        {venture.status}
                      </span>
                    </header>

                    <p className={styles.cardBody}>{venture.description}</p>

                    {venture.href && (
                      <div className={styles.cardCta}>
                        <Link href={venture.href} className={styles.cardLink}>
                          Learn More
                        </Link>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>

          <section className={styles.contactSection}>
            <div className={styles.contactInner}>
              <h2>Discuss a future venture.</h2>
              <p>
                Whether you&apos;re exploring a new digital initiative or rethinking an
                existing system, The Morning Bell Co. can help clarify what to build and
                how to support it over time.
              </p>

              <Link href="/contact" className={styles.contactCta}>
                Contact The Morning Bell Co.
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}