"use client";
import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "Questions Fréquentes" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section section-light reveal">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>{title}</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              style={{ 
                marginBottom: '1rem', 
                border: '1px solid rgba(0,0,0,0.06)', 
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'white',
                transition: 'all 0.3s ease'
              }}
            >
              <button 
                onClick={() => toggle(i)}
                style={{ 
                  width: '100%', 
                  padding: '1.5rem 2rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--light-text-primary)' }}>{item.q}</span>
                <span style={{ 
                  fontSize: '1.5rem', 
                  color: 'var(--gold)',
                  transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease'
                }}>+</span>
              </button>
              <div style={{ 
                maxHeight: openIndex === i ? '500px' : '0',
                opacity: openIndex === i ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: openIndex === i ? '0 2rem 2rem' : '0 2rem'
              }}>
                <p style={{ color: 'var(--light-text-secondary)', lineHeight: '1.6' }}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
