import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import RevenueSimulator from "@/components/RevenueSimulator";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const SIMULATEUR_FAQ = [
  {
    q: "Comment est calculée l'estimation de revenus ?",
    a: "Notre algorithme se base sur les données historiques réelles de biens similaires dans votre quartier, en tenant compte de la surface, des équipements et de la saisonnalité du marché locatif parisien.",
  },
  {
    q: "L'estimation inclut-elle les frais de ménage ?",
    a: "Non, les frais de ménage sont payés directement par les voyageurs. L'estimation porte sur le revenu de la nuitée, qui est la base sur laquelle notre commission de 24% est prélevée.",
  },
  {
    q: "Puis-je espérer plus que le montant estimé ?",
    a: "Oui. En améliorant la décoration ou en ajoutant des équipements spécifiques (climatisation, machine Nespresso, Wi-Fi haut débit), nous pouvons souvent augmenter le prix par nuit au-delà de la moyenne du secteur.",
  },
  {
    q: "À quelle fréquence l'estimation est-elle mise à jour ?",
    a: "Le marché de la location courte durée évolue vite. Nous vous recommandons de demander une étude personnalisée par l'un de nos conseillers pour obtenir les chiffres les plus récents.",
  },
];

import Image from "next/image";

export default function SimulatorPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      <section className="hero" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '2rem' }}>
        <div className="hero-bg reveal-image" style={{ position: 'absolute' }}>
          <Image
            src="/simulateur_hero_bg.png"
            alt="Simulateur Hero"
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
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-label">Simulateur</span>
            <h1 className="section-title">Estimez vos futurs revenus locatifs.</h1>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Utilisez notre outil pour découvrir votre gain net mensuel avec StayZen. 
              Notre commission de 24% inclut absolument tout.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div>
            <RevenueSimulator />
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Ces chiffres sont basés sur les performances moyennes de nos biens similaires.
            </p>
            <a href="/contact" className="btn-primary">Obtenir une étude personnalisée</a>
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

      <FAQ items={SIMULATEUR_FAQ} title="Tout savoir sur vos revenus" />

      <Footer />
    </>
  );
}
