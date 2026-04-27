import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const CONTACT_FAQ = [
  {
    q: "Quelles zones couvrez-vous actuellement ?",
    a: "Nous opérons principalement à Paris (tous arrondissements) et dans la petite couronne (Boulogne, Neuilly, Levallois, Vincennes). Nous nous développons rapidement dans d'autres grandes villes françaises.",
  },
  {
    q: "Quel est le délai pour mettre mon bien en location ?",
    a: "Une fois le contrat signé, nous pouvons réaliser le shooting photo et mettre l'annonce en ligne sous 48h à 72h pour commencer à générer vos premières réservations.",
  },
  {
    q: "Proposez-vous des rendez-vous physiques ?",
    a: "Absolument. Nous pensons que la confiance est la base de notre métier. Nos experts peuvent se déplacer directement dans votre bien pour une estimation précise et une rencontre de visu.",
  },
  {
    q: "Comment puis-je suivre l'activité de mon logement ?",
    a: "Chaque propriétaire dispose d'un accès à notre application dédiée où vous pouvez voir le calendrier des réservations, les revenus générés et les rapports de ménage en temps réel.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      <section className="section" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-label">Contact</span>
            <h1 className="section-title">Prenons rendez-vous.</h1>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Vous avez un projet ou des questions ? Réservez un créneau pour échanger avec l'un de nos experts.
            </p>
          </div>

          <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div className="service-card reveal">
              <h3 style={{ marginBottom: '1.5rem' }}>Informations</h3>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '1.5rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 700, display: 'block' }}>Email</span>
                  <a href="mailto:contact@stayzen.fr" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>contact@stayzen.fr</a>
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 700, display: 'block' }}>Téléphone</span>
                  <a href="tel:+33600000000" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>06 00 00 00 00</a>
                </li>
                <li>
                  <span style={{ color: 'var(--gold)', fontWeight: 700, display: 'block' }}>Siège</span>
                  <p style={{ color: 'var(--text-secondary)' }}>Paris, France</p>
                </li>
              </ul>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div style={{ 
                background: 'var(--light-card-bg)', 
                borderRadius: '32px', 
                height: '100%', 
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem'
              }}>
                <div>
                  <p style={{ color: 'var(--light-text-primary)', fontWeight: 600, marginBottom: '2rem' }}>Interface Calendly Intégrée</p>
                  <a href="https://calendly.com" target="_blank" className="btn-primary">Choisir une date</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={CONTACT_FAQ} title="Besoin d'une réponse rapide ?" />

      <Footer />
    </>
  );
}
