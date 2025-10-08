"use client";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioSection from "../components/PortfolioSection";
import { ACTIVE_VENTURES } from "../data/portfolio";
import styles from "../styles/PortfolioPage.module.css";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Our Businesses | The Morning Bell Co.</title>
        <meta
          name="description"
          content="Explore the diverse portfolio of ventures and investments by The Morning Bell Co., showcasing our commitment to innovation, quality, and community impact."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.page}>
        {/* Hero (matches About) */}
        <section className={styles.portfolioHero}>
          <div className={styles.container}>
            <h1>Our Businesses</h1>
            <p>
              At The Morning Bell Co., we pride ourselves on a diverse portfolio of ventures that reflect our commitment to
              innovation, quality, and community impact. Explore our active ventures below.
            </p>
          </div>
        </section>

        {/* Ventures Section (matches About section rhythm) */}
        <section className={styles.portfolioSection}>
          <div className={styles.container}>
            <PortfolioSection
              id="active-ventures"
              title="Our Ventures & Investments"
              description="A collection of active and developing divisions within The Morning Bell Co., each dedicated to excellence in its field."
              items={ACTIVE_VENTURES}
              viewAllLink={false}
              viewHeading={true}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}