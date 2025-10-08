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
        <nav className={`${styles.leftNav} ${styles.desktopOnly}`} aria-label="Primary left">
          <Link href="/about" className={`${styles.link} ${isActive("/about") ? styles.active : ""}`}>About</Link>
        </nav>

        <div className={styles.brand}>
          <Link href="/" className={styles.homeLink} aria-label="The Morning Bell Co. Home">
            <Image
              className={styles.logo}
              src="/images/TMB-secondary-logo.svg"
              alt="The Morning Bell Co. Logo"
              width={160}
              height={40}
              priority
            />
          </Link>
        </div>

        <nav className={`${styles.rightNav} ${styles.desktopOnly}`} aria-label="Primary right">
          <Link href="/portfolio" className={`${styles.link} ${isActive("/portfolio") ? styles.active : ""}`}>
            Our Businesses
          </Link>
        </nav>

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
        <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>
          About
        </Link>
        <Link href="/portfolio" className={styles.mobileLink} onClick={closeMenu}>
          Our Businesses
        </Link>
      </nav>
    </header>
  );
}