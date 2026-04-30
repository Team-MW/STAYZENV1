import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="floating-moon-bottom-right" style={{ bottom: '20%', right: '5%', opacity: 0.15 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a7 7 0 1 1-7.64-7.64c.44.06.9.1 1.36.1A9 9 0 0 0 12 3z"/>
        </svg>
      </div>
      <div className="footer-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-brand">
          <Link href="/" className="navbar-logo" style={{ height: 'auto' }}>
            <Image src="/sansfond.png" alt="StayZen" width={100} height={100} />
          </Link>
          <p>
            La conciergerie nouvelle génération. 
            Optimisation de revenus et gestion 5 étoiles pour vos locations courte durée.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/services">Nos Services</Link></li>
            <li><Link href="/proprietaires">Propriétaires</Link></li>
            <li><Link href="/simulateur">Simulateur</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Expertise</h4>
          <ul>
            <li><Link href="/services">Yield Management</Link></li>
            <li><Link href="/services">Shooting Photo</Link></li>
            <li><Link href="/services">Ménage Hôtelier</Link></li>
            <li><Link href="/services">Support 24/7</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:contact@stayzen.fr">contact@stayzen.fr</a></li>
            <li><a href="tel:+33686253611">06 86 25 36 11</a></li>
            <li><Link href="/contact">Prendre RDV</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 StayZen Conciergerie. Tous droits réservés. |{" "}
          <Link href="/mentions-legales" className="legal-link">
            Mentions Légales
          </Link>
        </span>
        <div className="footer-socials">
          <a href="https://www.facebook.com/people/Stayzen-Conciergerie/pfbid02vf9qWM4zGRd6nNwKhKcqRJ61tCD3bznQyqTCj8959GCwcVzdSoMVPxqRmsXfpdDAl/?mibextid=wwXIfr&rdid=wNn5Xp9iDJBdur1z&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1bqh3oiKMX%2F%3Fmibextid%3DwwXIfr%26ref%3D1" target="_blank" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/stayzenconciergerie?igsh=bG4zcGo2cm1nZ3N5&utm_source=qr&wa_status_inline=true" target="_blank" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
