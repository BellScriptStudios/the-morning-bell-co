"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.brand}>
          <Link
            href="/"
            className={styles.homeLink}
            aria-label="The Morning Bell Co. Home"
          >
            <Image
              className={styles.logo}
              src="/images/TMB-submark.svg"
              alt="The Morning Bell Co. Logo"
              width={28}
              height={28}
              priority
            />
              <span className={styles.brandText}>The Morning Bell Co.</span>
          </Link>
        </div>

        <nav className={`${styles.nav} ${styles.desktopOnly}`} aria-label="Primary left">
          <Link
            href="/about"
            className={`${styles.link} ${isActive("/about") ? styles.active : ""}`}
            >
              About
          </Link>
          <Link
            href="/concepts"
            className={`${styles.link} ${styles.conceptsLink} ${isActive("/concepts") ? styles.active : ""}`}
          >
            Concepts
          </Link>
          <Link 
            href="/portfolio"
            className={`${styles.link} ${isActive("/portfolio") ? styles.active : ""}`}
          >
            Our Ventures
          </Link>
        </nav>

        <div className={styles.contactBtn}>
          <Link 
            href="/contact"
            className={`${styles.headerBtn} ${isActive("/contact") ? styles.active : ""}`}
          >
            Reach Out
          </Link>
        </div>

        <button
          className={`${styles.menuToggle} ${open ? styles.open : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </button>
      </div>

      <div
        className={`${styles.backdrop} ${open ? styles.show : ""}`}
        onClick={closeMenu}
        aria-hidden={!open}
      />

      <nav
        id="mobile-menu"
        className={`${styles.mobilePanel} ${open ? styles.open : ""}`}
        aria-label="Mobile"
      >
        <Link href="/" className={styles.mobileLink} onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>
          About
        </Link>
        <Link href="/concepts" className={styles.mobileLink} onClick={closeMenu}>
          Concepts
        </Link>
        <Link href="/portfolio" className={styles.mobileLink} onClick={closeMenu}>
          Our Ventures
        </Link>
        <Link
          href="/contact"
          className={`${styles.mobileLink} ${styles.mobileContactLink}`}
          onClick={closeMenu}
        >
          Reach Out
        </Link>
      </nav>
    </header>
  );
}