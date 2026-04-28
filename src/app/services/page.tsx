import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Marquee from "@/components/Marquee";
import { Camera, TrendingUp, Sparkles, MessageSquare, Wrench, Smartphone } from "lucide-react";

const SERVICES_DETAILED = [
  {
    title: "Gestion d'Annonce",
    desc: "Nous créons une annonce captivante sur Airbnb, Booking et plus. Shooting photo pro inclus pour maximiser vos clics.",
    icon: <Camera size={48} color="var(--gold)" />,
  },
  {
    title: "Optimisation des Prix",
    desc: "Nos outils de yield management ajustent vos tarifs quotidiennement selon la demande locale et les événements.",
    icon: <TrendingUp size={48} color="var(--gold)" />,
  },
  {
    title: "Ménage & Blanchisserie",
    desc: "Nettoyage hôtelier rigoureux après chaque séjour. Nous fournissons des draps et serviettes de qualité premium.",
    icon: <Sparkles size={48} color="var(--gold)" />,
  },
  {
    title: "Support Voyageurs 24/7",
    desc: "De la première question à la remise des clés, nous gérons toute la communication avec vos invités.",
    icon: <MessageSquare size={48} color="var(--gold)" />,
  },
  {
    title: "Maintenance & Réparations",
    desc: "Un problème technique ? Notre équipe intervient rapidement pour assurer le confort de vos voyageurs.",
    icon: <Wrench size={48} color="var(--gold)" />,
  },
  {
    title: "Tableau de Bord Propriétaire",
    desc: "Suivez vos réservations et vos revenus en temps réel via votre espace client dédié.",
    icon: <Smartphone size={48} color="var(--gold)" />,
  },
];

const SERVICES_FAQ = [
  {
    q: "Comment optimisez-vous le prix de mes nuitées ?",
    a: "Nous utilisons des logiciels de tarification dynamique qui analysent les prix du marché local, les événements (JO 2024, salons, concerts) et la saisonnalité pour ajuster vos tarifs chaque jour et maximiser vos revenus.",
  },
  {
    q: "Quels sont les standards de ménage appliqués ?",
    a: "Nous appliquons un protocole de nettoyage hôtelier strict. Chaque bien est inspecté avant l'arrivée des voyageurs. Nous utilisons des produits professionnels et gérons intégralement le blanchissage du linge (draps, serviettes, tapis de bain).",
  },
  {
    q: "Comment gérez-vous les urgences pendant un séjour ?",
    a: "Notre équipe de support est disponible 24h/24 et 7j/7 pour les voyageurs. En cas de problème technique (fuite, panne), nous disposons d'un réseau de partenaires (plombiers, électriciens) pour une intervention immédiate.",
  },
  {
    q: "Sur quelles plateformes mon bien sera-t-il diffusé ?",
    a: "Nous diffusons votre annonce sur les plateformes majeures comme Airbnb, Booking.com et Abritel pour garantir une visibilité maximale et un taux d'occupation optimal toute l'année.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="hero-bg reveal-image" style={{ position: 'absolute' }}>
          <Image
            src="/services_hero_bg_luxury.png"
            alt="Services Hero"
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
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '6rem' }}>
          <span className="section-label">Nos Services</span>
          <h1 className="section-title">Une gestion 5 étoiles<br />pour votre patrimoine.</h1>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            StayZen s'occupe de tout. Vous n'avez qu'à valider vos virements mensuels.
          </p>
        </div>
      </section>

      <Marquee />

      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <div className="services-grid">
            {SERVICES_DETAILED.map((service, i) => (
              <div className="service-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light reveal">
        <div className="container">
          <div className="showcase-inner">
            <div className="showcase-text">
              <span className="section-label">Performance</span>
              <h2 className="section-title">Maximisez vos revenus locatifs.</h2>
              <p className="section-desc">
                Grâce à notre expertise en tarification dynamique et à la qualité de notre service, 
                nos propriétaires voient leurs revenus augmenter de 60% en moyenne.
              </p>
              <div className="hero-actions" style={{ justifyContent: 'flex-start' }}>
                <a href="/simulateur" className="btn-primary">Estimer mes revenus</a>
              </div>
            </div>
            <div className="showcase-image" style={{ position: 'relative' }}>
              <Image 
                src="/property.png" 
                alt="Appartement performant" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ position: 'relative' }}>
        <div className="floating-moon-left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a7 7 0 1 1-7.64-7.64c.44.06.9.1 1.36.1A9 9 0 0 0 12 3z"/>
          </svg>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Transparence Totale</span>
            <h2 className="section-title">Une commission unique.</h2>
          </div>
          <div className="pricing-card" style={{ textAlign: 'left', padding: '3.5rem', maxWidth: '650px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '0.5rem', color: 'white', lineHeight: 1.1 }}>
              24% <span style={{ fontSize: '1.8rem', fontWeight: 700 }}>de commission</span>
            </h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Incluant</p>
            
            <ul className="pricing-features" style={{ margin: 0 }}>
              <li><div><strong>Gestion complète de conciergerie</strong></div></li>
              <li><div><strong>Création d'annonce</strong> <span style={{ color: 'var(--text-muted)' }}>( photos professionnelles inclus )</span></div></li>
              <li><div><strong>Stratégie de prix dynamique</strong></div></li>
              <li style={{ alignItems: 'flex-start' }}>
                <div>
                  <strong>Fourniture de linge hotelier</strong>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.3rem' }}>( renouvellement à notre charge en cas de dégradation etc )</div>
                </div>
              </li>
              <li><div><strong>Consommable</strong></div></li>
              <li><div><strong>Kit d'accueil voyageurs</strong> <span style={{ color: 'var(--text-muted)' }}>( café, dosette de lessive etc )</span></div></li>
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

      <FAQ items={SERVICES_FAQ} title="Questions sur nos services" />

      <Footer />
    </>
  );
}
