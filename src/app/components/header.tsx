import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="header">
            <div className="headerInner">
                <Link href="/" className="brand" aria-label="The Morning Bell Co. Home">
                    <Image src="/public/tmb-trsp.png" alt="The Morning Bell Co. Logo"/>
                    <span>The Morning Bell Co.</span>
                </Link>
                <nav className="nav" aria-label="Navigation">
                    <Link href="/ventures">Ventures</Link>
                    <Link href="/work">Client Work</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact" className="btn">Contact</Link>
                </nav>
            </div>
        </header>
    );
}