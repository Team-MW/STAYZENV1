"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Propriétaires", href: "/proprietaires" },
    { name: "Simulateur", href: "/simulateur" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <Link href="/" className="navbar-logo">
        <Image src="/logo.jpeg" alt="StayZen" width={40} height={40} priority />
        <div>
          <span className="navbar-logo-text">STAYZEN</span>
          <span className="navbar-logo-sub">Conciergerie</span>
        </div>
      </Link>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`} id="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href} 
              className={pathname === link.href ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contact" className="navbar-cta" onClick={() => setMenuOpen(false)}>
            Nous Contacter
          </Link>
        </li>
      </ul>

      <button
        className="menu-toggle"
        id="menu-toggle"
        aria-label="Menu"
        onClick={() => setMenuOpen((p) => !p)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
