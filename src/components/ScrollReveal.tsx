"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function ScrollReveal() {
  useEffect(() => {
    // Initialize Lenis for buttery smooth scrolling typical of premium Webflow/GSAP sites
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initialize Intersection Observer for reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // We keep observing to allow elements to stay visible or toggle if needed
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-text, .reveal-image").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}
