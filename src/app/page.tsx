import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Page.module.css"

export default function Home() {
  const title = "The Morning Bell Co. - Investing in the ideas worth waking up for";
  const desc = "The Morning Bell Co. is a parent company uniting ventures like BellScript Studios and future brands across tech, design, and property."
  const year = new Date().getFullYear();

  const SITE_URL = "https://themorningbell.co";

  return (
    <>
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={SITE_URL} />
      <meta property="og:title" content="{title" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:site_name" content="The Morning Bell Co." />
      <meta name="description" content={desc} />
    </Head>

    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Image className={styles.logo} 
            src="/images/TMB-secondary-logo.svg"
            alt="The Morning Bell Co. Logo"
            width={32}
            height={32}
            priority
          />
        </div>
      </header>

      <section className={styles.hero}>
        <h1 className={styles.title}>We invest in the ideas worth waking up for</h1>
        <p className={styles.subTitle}>The Morning Bell Co. is a parent company uniting ventures like BellScript Studios and future brands across tech, design, and property.</p>
        </section>

      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>About Us</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <p className={styles.sectionBody}>Founded in 2025, The Morning Bell Co. is dedicated to fostering innovation and supporting ventures that align with our vision of a better tomorrow. We believe in the power of ideas and the impact they can have on communities and industries alike.</p>
          </article>
        </div>
      </section>

      <section id="portfolio" className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Portfolio</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>BellScript Studios</h3>
            <p className={styles.cardBody}>A full-stack web and software development studio building modern, scalable solutions for businesses and creators.</p>
            <a href="https://bellscript.studio" target="_blank" className={styles.cardLink}>Visit Website →</a>
          </article>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerContact}>Contact Us: <a href="mailto:hello@themorningbell.co">Hello@themorningbell.co</a></span>
          <span className={styles.copyright}>© {year} The Morning Bell Co. — Built by <Link href="https://bellscript.studio" target="_blank" className={styles.devTag}>BellScript Studios</Link></span>
        </div>
      </footer>
    </main>
  </>
  )
};
