"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Masquer l'écran de chargement après 2 secondes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${!loading ? "fade-out" : ""}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <Image
            src="/sansfond.png"
            alt="StayZen Logo"
            width={150}
            height={150}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar" />
        </div>
      </div>
    </div>
  );
}
