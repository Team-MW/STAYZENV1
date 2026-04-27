import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const SERVICES_DETAILED = [
  {
    title: "Gestion d'Annonce",
    desc: "Nous créons une annonce captivante sur Airbnb, Booking et plus. Shooting photo pro inclus pour maximiser vos clics.",
    icon: "📸",
  },
  {
    title: "Optimisation des Prix",
    desc: "Nos outils de yield management ajustent vos tarifs quotidiennement selon la demande locale et les événements.",
    icon: "📈",
  },
  {
    title: "Ménage & Blanchisserie",
    desc: "Nettoyage hôtelier rigoureux après chaque séjour. Nous fournissons des draps et serviettes de qualité premium.",
    icon: "✨",
  },
  {
    title: "Support Voyageurs 24/7",
    desc: "De la première question à la remise des clés, nous gérons toute la communication avec vos invités.",
    icon: "💬",
  },
  {
    title: "Maintenance & Réparations",
    desc: "Un problème technique ? Notre équipe intervient rapidement pour assurer le confort de vos voyageurs.",
    icon: "🛠️",
  },
  {
    title: "Tableau de Bord Propriétaire",
    desc: "Suivez vos réservations et vos revenus en temps réel via votre espace client dédié.",
    icon: "📱",
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

      <section className="section" style={{ paddingTop: '10rem' }}>
        <div className="container">
          <span className="section-label">Nos Services</span>
          <h1 className="section-title">Une gestion 5 étoiles<br />pour votre patrimoine.</h1>
          <p className="section-desc">
            StayZen s'occupe de tout. Vous n'avez qu'à valider vos virements mensuels.
          </p>
          
          <div className="services-grid" style={{ marginTop: '4rem' }}>
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

      <FAQ items={SERVICES_FAQ} title="Questions sur nos services" />

      <Footer />
    </>
  );
}
