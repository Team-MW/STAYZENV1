"use client";
import { useState, useEffect } from "react";

export default function RevenueSimulator() {
  const [revenue, setRevenue] = useState(2000);
  const [mounted, setMounted] = useState(false);
  const commissionRate = 0.22; // Updated to 22%

  useEffect(() => {
    setMounted(true);
  }, []);

  const commissionAmount = Math.round(revenue * commissionRate);
  const ownerNet = revenue - commissionAmount;

  if (!mounted) {
    return <div className="simulator-card" style={{ height: '400px', opacity: 0 }}></div>;
  }

  return (
    <div className="simulator-card">
      <div className="simulator-input-group">
        <label>Revenus mensuels estimés</label>
        <div className="input-with-symbol">
          <input
            type="range"
            min="500"
            max="10000"
            step="100"
            value={revenue}
            onChange={(e) => setRevenue(parseInt(e.target.value))}
            className="simulator-slider"
          />
          <div className="simulator-value">{revenue.toLocaleString()} €</div>
        </div>
      </div>

      <div className="simulator-results">
        <div className="result-item">
          <span>Revenu Brut</span>
          <strong>{revenue.toLocaleString()} €</strong>
        </div>
        <div className="result-item highlight">
          <span>Commission StayZen (22%)</span>
          <strong>- {commissionAmount.toLocaleString()} €</strong>
        </div>
        <div className="result-divider"></div>
        <div className="result-item total">
          <span>Votre revenu net</span>
          <strong className="gold-text">{ownerNet.toLocaleString()} €</strong>
        </div>
      </div>
      
      <p className="simulator-note">
        *Basé sur une commission de 22% incluant gestion, linge, consommables et maintenance. 
        Les frais de ménage sont à la charge du voyageur.
      </p>
    </div>
  );
}
