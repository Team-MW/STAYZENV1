import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mentions Légales | StayZen Conciergerie",
  description: "Mentions légales du site StayZen Conciergerie.",
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="section reveal" style={{ paddingTop: '12rem', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="section-title" style={{ marginBottom: '3rem', textAlign: 'left' }}>Mentions Légales</h1>
          
          <div className="legal-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Éditeur du site</h2>
              <p>
                Le présent site internet est édité par <strong>VARELA CEDRIC (STAYZEN CONCIERGERIE)</strong>.<br />
                <strong>SIREN :</strong> 894 353 275<br />
                <strong>Adresse :</strong> 20 RUE MARIE-LOUISE DUBREIL-JACOTIN, 31400 TOULOUSE<br />
                <strong>Activité :</strong> Hébergement touristique et autre hébergement de courte durée<br />
                <strong>Effectif :</strong> 0 salarié (donnée 2026)<br />
                <strong>Première création :</strong> 15/02/2021<br />
                <strong>Réouverture :</strong> 02/07/2022<br />
                <strong>Dirigeant :</strong> Varela CEDRIC<br />
                <strong>Contact :</strong> contact@stayzen.fr | 06 00 00 00 00
              </p>
            </section>

            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Hébergeur</h2>
              <p>
                Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
                Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                Site web : https://vercel.com
              </p>
            </section>

            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </section>

            <section>
              <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, vous pouvez nous contacter à l'adresse : contact@stayzen.fr.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
