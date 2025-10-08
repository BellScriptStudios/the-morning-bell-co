import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerNav}>
            <button className={styles.link} onClick={() => { window.location.href = "/about"}}>About</button>
            <button className={styles.link} onClick={() => { window.location.href = "/portfolio"}}>Portfolio</button>
            < a href="mailto:hello@themorningbell.co" className={styles.link}>Contact</a>
          </div>
          <span className={styles.copyright}>© {year} The Morning Bell Co. — Built by <Link href="https://bellscript.studio" target="_blank" className={styles.devTag}>BellScript Studios</Link></span>
        </div>
      </footer>
    )
}