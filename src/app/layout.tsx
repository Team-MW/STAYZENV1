import type { Metadata } from "next";
import "./style.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "StayZen Conciergerie — Gestion Locative Premium Airbnb",
  description:
    "Optimisez vos revenus locatifs Airbnb & Booking sans contraintes. StayZen Conciergerie offre une gestion complète, ménage 5 étoiles et maintenance 24/7.",
  keywords: [
    "conciergerie luxe",
    "gestion locative airbnb",
    "conciergerie premium",
    "StayZen",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
