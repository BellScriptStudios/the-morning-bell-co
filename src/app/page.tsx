// app/page.tsx (or pages/index.tsx)
"use client";
import styles from "./styles/Page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FEATURED_VENTURES } from "./data/portfolio";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

export default function Home() {

  return (
    <>    
      <main className={styles.main}>
        <Header />

        <section className={styles.brandName}>
          <div className={styles.glowBox}>
            <h1 className={styles.brandText}>THE MORNING BELL CO.</h1>
          </div>
        </section>

        <section className={styles.hero} id="hero">
          <div className={styles.container}>
            <HeroSection />
          </div>
        </section>

        <section className={styles.about} id="about">
          <div className={styles.container}>
            <AboutSection />
          </div>
        </section>

        <section className={styles.portfolio} id="portfolio">
          <div className={styles.container}>
            <PortfolioSection
              id="portfolio"
              title="Our Featured Ventures"
              description="A showcase of our most active and forward-thinking divisions."
              items={FEATURED_VENTURES}
              viewAllLink={true}
              viewAllHref="/portfolio"
              viewAllLabel="View all ventures →"
            />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
