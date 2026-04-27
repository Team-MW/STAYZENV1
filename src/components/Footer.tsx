import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="navbar-logo">
            <Image src="/logo.jpeg" alt="StayZen" width={40} height={40} />
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
