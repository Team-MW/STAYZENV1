import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const PROPRIETAIRES_FAQ = [
  {
    q: "Pourquoi déléguer ma gestion à StayZen plutôt que de le faire moi-même ?",
    a: "La gestion locative prend en moyenne 40h par mois (échanges, ménage, maintenance). En déléguant, vous gagnez du temps, de la sérénité, et surtout de l'argent grâce à notre optimisation tarifaire qui compense largement notre commission.",
  },
  {
    q: "Quelles sont les garanties en cas de dégradation ?",
    a: "Nous sélectionnons rigoureusement chaque voyageur (vérification d'identité, avis positifs). En plus de l'assurance AirCover d'Airbnb, nous gérons les cautions et disposons d'un protocole de constatation immédiate après chaque départ.",
  },
  {
    q: "Puis-je récupérer mon logement pour des besoins personnels ?",
    a: "Bien sûr. C'est votre bien. Il vous suffit de bloquer les dates souhaitées sur votre calendrier propriétaire depuis notre application, à condition qu'aucune réservation ne soit déjà confirmée sur ces dates.",
  },
  {
    q: "Quel est le préavis pour arrêter le service ?",
    a: "StayZen propose un service sans engagement de durée. Un simple préavis d'un mois suffit pour arrêter la gestion, sous réserve d'honorer les réservations déjà enregistrées pour le confort des voyageurs.",
  },
];

import Image from "next/image";

export default function ProprietairesPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="hero-bg reveal-image" style={{ position: 'absolute' }}>
          <Image
            src="/proprietaires_hero_bg.png"
            alt="Propriétaires Hero"
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
          <span className="section-label">Propriétaires</span>
          <h1 className="section-title">Libérez-vous des contraintes,<br />gardez les profits.</h1>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Rejoignez plus de 50 propriétaires qui nous font confiance pour la gestion de leurs biens.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-icon">📈</div>
              <h3>Plus de revenus</h3>
              <p>Optimisation continue des tarifs pour gagner jusqu'à 60% de plus qu'en location classique.</p>
            </div>
            <div className="service-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="service-icon">⏳</div>
              <h3>Plus de temps</h3>
              <p>On s'occupe de tout : ménage, accueil, maintenance. Vous ne faites rien.</p>
            </div>
            <div className="service-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="service-icon">🧘</div>
              <h3>Sérénité totale</h3>
              <p>Sélection rigoureuse des voyageurs et gestion des assurances incluse.</p>
            </div>
          </div>
          
          <div className="reveal" style={{ marginTop: '6rem', position: 'relative' }}>
            <div className="floating-moon-left" style={{ top: '10%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a7 7 0 1 1-7.64-7.64c.44.06.9.1 1.36.1A9 9 0 0 0 12 3z"/>
              </svg>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
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
        </div>
      </section>

      <FAQ items={PROPRIETAIRES_FAQ} title="Vos questions de propriétaire" />

      <Footer />
    </>
  );
}
