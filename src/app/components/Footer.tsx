import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerNav}>
            <button className={styles.link} onClick={() => { window.location.href = "/about"}}>About</button>
            <button className={styles.link} onClick={() => { window.location.href = "/concepts"}}>Concepts</button>
            <button className={styles.link} onClick={() => { window.location.href = "/portfolio"}}>Ventures</button>
            <button
              className={`${styles.footerContactLink}`}
              onClick={() => { window.location.href = "/contact"}}
            >
              Reach Out
            </button>
          </div>
          <span className={styles.copyright}>© {year} The Morning Bell Co.</span>

           <span className={styles.devTag}>
              Built by <Link
                href="https://bellscript.studio"
                target="_blank" className={styles.devLink}>
                  BellScript Studios
                </Link>
            </span>
        </div>
      </footer>
    )
}