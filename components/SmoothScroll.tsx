"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Kecepatan scroll (semakin besar semakin lambat/halus)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fungsi pelambatan
      smoothWheel: true,
    });

    // 1. Hubungkan Lenis ke ScrollTrigger GSAP
    lenis.on("scroll", ScrollTrigger.update);

    // 2. Beritahu GSAP agar menggunakan requestAnimationFrame milik Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // 3. Matikan lagSmoothing agar sinkronisasi tetap presisi
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
}