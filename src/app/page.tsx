// app/page.tsx (or pages/index.tsx)
"use client";
import styles from "./styles/Page.module.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PillarSection from "./components/PillarSection";
import MissionSection from "./components/MissionSection";
import EditorialSection from "./components/EditorialSection";
import Footer from "./components/Footer";
import Link from "next/link";
export default function Home() {

  return (
    <>    
      <main className={styles.main}>
        <Header />

        <section className={styles.hero} id="hero">
          <div className={styles.container}>
            <HeroSection />
          </div>
        </section>

        <PillarSection />

        <MissionSection />

        <section className={styles.portfolio} id="portfolio">
          <div className={styles.portfolioInner}>
            <p className={styles.portfolioKicker}>Portfolio</p>
            <h2 className={styles.portfolioTitle}>Selected work and practice areas.</h2>

            <div className={styles.portfolioGrid}>
              <article className={styles.portfolioCard}>
                <Link href="/portfolio" className={styles.portfolioLink}>
                  <div className={styles.portfilioHeader}>
                    <h3 className={styles.portfilioName}>BellScript Studios</h3>
                    <span className={styles.portfolioArrow}>&#8599;</span>
                  </div>
                  <p className={styles.portfolioDesc}>
                    Digital practice of The Morning Bell Co., focused 
                    on modern web systems and brand-aligned technology.
                  </p>
                </Link>
              </article>

              <article className={styles.portfolioCard}>
                <Link href="/portfolio" className={styles.portfolioLink}>
                  <div className={styles.portfilioHeader}>
                    <h3 className={styles.portfolioName}>Concept Development</h3>
                    <span className={styles.portfolioArrow}>&#8599;</span>
                  </div>
                  <p className={styles.portfolioDesc}>
                    Research-driven initiatives exploring new ideas, community-centeredventures, 
                    and future-focused infrastructure
                  </p>
                </Link>
              </article>
            </div>
          </div>
        </section>

        <EditorialSection />

        <Footer />
      </main>
    </>
  );
}
