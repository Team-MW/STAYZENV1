import type { Metadata } from "next";
import "./style.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "StayZen Conciergerie — Gestion Locative Premium",
  description:
    "StayZen Conciergerie gère vos locations courte durée avec excellence. Service clé en main pour propriétaires Airbnb exigeants.",
  keywords: [
    "conciergerie",
    "gestion locative",
    "Airbnb",
    "location courte durée",
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
