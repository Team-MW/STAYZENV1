import Script from "next/script";
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginTop: '5rem' }}>
            {/* Calendly */}
            <div className="reveal">
              <div style={{ 
                background: 'var(--light-card-bg)', 
                borderRadius: '32px', 
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ width: '100%', background: 'transparent' }}>
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/desosocalendly/30min" 
                    style={{ minWidth: '320px', height: '800px', width: '100%' }}
                  ></div>
                  <Script 
                    src="https://assets.calendly.com/assets/external/widget.js" 
                    strategy="lazyOnload"
                  />
                </div>
              </div>
            </div>

            {/* Informations */}
            <div className="service-card reveal" style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
              <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Informations</h3>
              <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', gap: '2rem', flexWrap: 'wrap' }}>
                <li style={{ textAlign: 'center' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>Email</span>
                  <a href="mailto:contact@stayzen.fr" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>contact@stayzen.fr</a>
                </li>
                <li style={{ textAlign: 'center' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>Téléphone</span>
                  <a href="tel:+33686253611" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>06 86 25 36 11</a>
                </li>
                <li style={{ textAlign: 'center' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>Siège</span>
                  <p style={{ color: 'var(--text-secondary)' }}>Paris, France</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={CONTACT_FAQ} title="Besoin d'une réponse rapide ?" />

      <Footer />
    </>
  );
}
