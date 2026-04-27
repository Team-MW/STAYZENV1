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
          <Link href="/" className="navbar-logo">
            <Image src="/sansfond.png" alt="StayZen" width={80} height={80} />
            <div>
              <span className="navbar-logo-text">STAYZEN</span>
              <span className="navbar-logo-sub">Conciergerie</span>
            </div>
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
            <li><a href="tel:+33600000000">06 00 00 00 00</a></li>
            <li><Link href="/contact">Prendre RDV</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 StayZen Conciergerie. Tous droits réservés.</span>
        <div className="footer-socials">
          <a href="#" target="_blank">INSTAGRAM</a>
          <a href="#" target="_blank">LINKEDIN</a>
          <a href="#" target="_blank">FACEBOOK</a>
        </div>
      </div>
    </footer>
  );
}
