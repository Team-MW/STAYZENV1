import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import RevenueSimulator from "@/components/RevenueSimulator";
import Footer from "@/components/Footer";

const MARQUEE_ITEMS = [
  "Gestion Complète",
  "Accueil Voyageurs",
  "Linge Hôtelier Inclus",
  "Optimisation Revenus",
  "Photographie Pro",
  "Support 24/7",
  "Maintenance Offerte",
  "Kit d'Accueil",
];

const SERVICES = [
  {
    icon: "🏠",
    title: "Gestion Complète",
    desc: "De la création d'annonce à la gestion des séjours, nous pilotons tout.",
  },
  {
    icon: "📸",
    title: "Photos & Annonce",
    desc: "Shooting professionnel et optimisation SEO pour une visibilité maximale.",
  },
  {
    icon: "🧺",
    title: "Linge & Consommables",
    desc: "Fourniture du linge hôtelier et des kits d'accueil (café, lessive, etc.).",
  },
  {
    icon: "🛠️",
    title: "Maintenance",
    desc: "Prise en charge des problèmes courants (plomberie, électroménager).",
  },
];

const STEPS = [
  {
    num: "01",
    icon: "📈",
    title: "Estimation",
    desc: "Analyse gratuite et précise de votre potentiel locatif mensuel.",
  },
  {
    num: "02",
    icon: "📸",
    title: "Préparation",
    desc: "Shooting photo pro et création d'une annonce optimisée SEO.",
  },
  {
    num: "03",
    icon: "🔑",
    title: "Gestion",
    desc: "Prise en charge totale : réservations, accueil et maintenance.",
  },
  {
    num: "04",
    icon: "💰",
    title: "Revenus",
    desc: "Encaissez vos loyers chaque mois en toute sérénité.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg reveal-image" style={{ position: 'absolute' }}>
          <Image
            src="/hero.png"
            alt="StayZen Hero"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="floating-moon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a7 7 0 1 1-7.64-7.64c.44.06.9.1 1.36.1A9 9 0 0 0 12 3z"/>
          </svg>
        </div>
        <div className="hero-content">
          <h1 className="reveal-text">
            Gestion complète
            <br />
            <span className="gold">Airbnb & Booking</span>
          </h1>
          <p className="hero-sub reveal" style={{ transitionDelay: '0.2s' }}>
            Maximisez vos revenus locatifs sans lever le petit doigt. 
            Service clé en main incluant maintenance et linge.
          </p>
          <div className="hero-actions reveal" style={{ transitionDelay: '0.4s' }}>
            <a href="/simulateur" className="btn-primary">
              Estimer mes revenus
            </a>
            <a href="/contact" className="btn-secondary">
              Demander un devis
            </a>
          </div>
        </div>
      </section>


      {/* ===== SERVICES ===== */}
      <section className="section section-light reveal" id="services">
        <div className="container">
          <span className="section-label reveal-text">Nos Services</span>
          <h2 className="section-title reveal-text" style={{ transitionDelay: '0.1s' }}>Tout inclus. Pas de stress.</h2>
          <p className="section-desc reveal" style={{ transitionDelay: '0.2s' }}>
            Une gestion transparente et efficace pour vos locations courte durée.
          </p>
          <div className="services-bento-grid">
            {/* Card 1: Gestion Complète */}
            <div className="bento-card bento-large bento-cream reveal">
              <div className="bento-content">
                <div className="bento-icon">🏠</div>
                <h3>Gestion Complète</h3>
                <p>De la création d'annonce à la gestion des séjours, nous pilotons tout pour vous libérer l'esprit.</p>
              </div>
              <div className="bento-footer">
                <span className="bento-tag">Clé en main</span>
              </div>
            </div>

            {/* Card 2: Photos & Annonce */}
            <div className="bento-card bento-small bento-gold reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="bento-content">
                <div className="bento-icon">📸</div>
                <h3>Photos & Annonce</h3>
                <p>Shooting pro et SEO optimisé pour une visibilité maximale.</p>
              </div>
            </div>

            {/* Card 3: Linge & Consommables */}
            <div className="bento-card bento-small bento-dark reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="bento-content">
                <div className="bento-icon">🧺</div>
                <h3>Linge & Kits</h3>
                <p>Fourniture du linge hôtelier et des consommables.</p>
              </div>
            </div>

            {/* Card 4: Maintenance */}
            <div className="bento-card bento-large bento-light reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="bento-content">
                <div className="bento-icon">🛠️</div>
                <h3>Maintenance & Assistance</h3>
                <p>Prise en charge rapide des petits tracas du quotidien pour garantir la satisfaction des voyageurs.</p>
              </div>
              <div className="bento-footer">
                <span className="bento-tag">Sérénité 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OFFRE ===== */}
      <section className="section reveal" id="offre">
        <div className="bg-moon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a7 7 0 1 1-7.64-7.64c.44.06.9.1 1.36.1A9 9 0 0 0 12 3z"/>
          </svg>
        </div>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label reveal-text">Notre Offre</span>
            <h2 className="section-title reveal-text" style={{ transitionDelay: '0.1s' }}>Une commission unique.</h2>
            <p className="section-desc reveal" style={{ margin: '0 auto 2rem', transitionDelay: '0.2s' }}>
              Un tarif clair, tout inclus. Les frais de ménage sont à la charge du voyageur.
            </p>
          </div>
          <div className="pricing-card" style={{ textAlign: 'left', padding: '3.5rem', maxWidth: '650px' }}>
            <h3 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '0.5rem', color: 'white', lineHeight: 1.1 }}>
              24% <span style={{ fontSize: '1.8rem', fontWeight: 700 }}>de commission</span>
            </h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Incluant</p>
            
            <ul className="pricing-features" style={{ margin: 0 }}>
              <li>
                <div>
                  <strong>Gestion complète de conciergerie</strong>
                </div>
              </li>
              <li>
                <div>
                  <strong>Création d'annonce</strong> <span style={{ color: 'var(--text-muted)' }}>( photos professionnelles inclus )</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Stratégie de prix dynamique</strong>
                </div>
              </li>
              <li style={{ alignItems: 'flex-start' }}>
                <div>
                  <strong>Fourniture de linge hotelier</strong>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.3rem' }}>( renouvellement à notre charge en cas de dégradation etc )</div>
                </div>
              </li>
              <li>
                <div>
                  <strong>Consommable</strong>
                </div>
              </li>
              <li>
                <div>
                  <strong>Kit d'accueil voyageurs</strong> <span style={{ color: 'var(--text-muted)' }}>( café, dosette de lessive etc )</span>
                </div>
              </li>
              <li style={{ alignItems: 'flex-start' }}>
                <div>
                  <strong>Service de maintenance, prise en charge des problèmes courants</strong>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.3rem' }}>( dégradation, plomberie, électroménager, etc. )</div>
                </div>
              </li>
            </ul>

            <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Les frais de ménage et de blanchisserie sont
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gold)' }}>
                À la charge du voyageur
              </p>
            </div>
            
            <a href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '3rem', display: 'flex' }}>
              Confier mon bien
            </a>
          </div>
        </div>
      </section>

      {/* ===== SIMULATEUR ===== */}
      <section className="section section-light reveal" id="simulateur">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-label">Simulateur</span>
            <h2 className="section-title">Estimez vos revenus.</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Découvrez combien vous pourriez gagner avec StayZen chaque mois.
            </p>
          </div>
          <RevenueSimulator />
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section reveal" id="processus" style={{ position: 'relative' }}>
        <div className="floating-moon-left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a7 7 0 1 1-7.64-7.64c.44.06.9.1 1.36.1A9 9 0 0 0 12 3z"/>
          </svg>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label">Fonctionnement</span>
          <h2 className="section-title">En 4 étapes simples.</h2>
          <div className="process-grid">
            {STEPS.map((s, i) => (
              <div className="process-step reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="process-number">{s.num}</span>
                <div className="process-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIAGONAL MARQUEE ===== */}
      <div className="diagonal-marquee-section">
        <div className="diagonal-band gold">
          <div className="track">
            <span>STAYZEN <span className="dot" /> GESTION COMPLÈTE <span className="dot" /> REVENUS MAXIMISÉS <span className="dot" /> SERVICE PREMIUM <span className="dot" /> </span>
            <span>STAYZEN <span className="dot" /> GESTION COMPLÈTE <span className="dot" /> REVENUS MAXIMISÉS <span className="dot" /> SERVICE PREMIUM <span className="dot" /> </span>
            <span>STAYZEN <span className="dot" /> GESTION COMPLÈTE <span className="dot" /> REVENUS MAXIMISÉS <span className="dot" /> SERVICE PREMIUM <span className="dot" /> </span>
          </div>
        </div>
        <div className="diagonal-band cream">
          <div className="track">
            <span>MÉNAGE PRO <span className="dot" /> CHECK-IN <span className="dot" /> CHECK-OUT <span className="dot" /> ASSISTANCE 24/7 <span className="dot" /> </span>
            <span>MÉNAGE PRO <span className="dot" /> CHECK-IN <span className="dot" /> CHECK-OUT <span className="dot" /> ASSISTANCE 24/7 <span className="dot" /> </span>
            <span>MÉNAGE PRO <span className="dot" /> CHECK-IN <span className="dot" /> CHECK-OUT <span className="dot" /> ASSISTANCE 24/7 <span className="dot" /> </span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
