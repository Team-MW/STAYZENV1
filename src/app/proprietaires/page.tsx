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

export default function ProprietairesPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      <section className="section" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <span className="section-label">Propriétaires</span>
          <h1 className="section-title">Libérez-vous des contraintes,<br />gardez les profits.</h1>
          <p className="section-desc">
            Rejoignez plus de 50 propriétaires qui nous font confiance pour la gestion de leurs biens.
          </p>

          <div className="services-grid" style={{ marginTop: '4rem' }}>
            <div className="service-card reveal">
              <h3>Plus de revenus</h3>
              <p>Optimisation continue des tarifs pour gagner jusqu'à 60% de plus qu'en location classique.</p>
            </div>
            <div className="service-card reveal" style={{ transitionDelay: '0.1s' }}>
              <h3>Plus de temps</h3>
              <p>On s'occupe de tout : ménage, accueil, maintenance. Vous ne faites rien.</p>
            </div>
            <div className="service-card reveal" style={{ transitionDelay: '0.2s' }}>
              <h3>Sérénité totale</h3>
              <p>Sélection rigoureuse des voyageurs et gestion des assurances incluse.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={PROPRIETAIRES_FAQ} title="Vos questions de propriétaire" />

      <Footer />
    </>
  );
}
