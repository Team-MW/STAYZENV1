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
    a: "Non, les frais de ménage sont payés directement par les voyageurs. L'estimation porte sur le revenu de la nuitée, qui est la base sur laquelle notre commission de 20% est prélevée.",
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

export default function SimulatorPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      <section className="section" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-label">Simulateur</span>
            <h1 className="section-title">Estimez vos futurs revenus locatifs.</h1>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Utilisez notre outil pour découvrir votre gain net mensuel avec StayZen. 
              Notre commission de 20% inclut absolument tout.
            </p>
          </div>
          
          <div style={{ marginTop: '4rem' }}>
            <RevenueSimulator />
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Ces chiffres sont basés sur les performances moyennes de nos biens similaires.
            </p>
            <a href="/contact" className="btn-primary">Obtenir une étude personnalisée</a>
          </div>
        </div>
      </section>

      <FAQ items={SIMULATEUR_FAQ} title="Tout savoir sur vos revenus" />

      <Footer />
    </>
  );
}
