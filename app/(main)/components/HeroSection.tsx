"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function MultiLayerScroll() {
  const container = useRef(null);
  const heroRef = useRef(null);
  const contentRef2 = useRef(null); // Panel dari kanan
  const contentRef3 = useRef(null); // Panel dari bawah
  const contentRef4 = useRef(null); // Panel dari kiri
  const contentRef5 = useRef(null); // Panel dari kiri

  useGSAP(() => {
    // Inisialisasi posisi awal agar tidak bertumpuk di depan sejak awal
    gsap.set(contentRef2.current, { x: "110%" });
    gsap.set(contentRef3.current, { y: "110%" });
    gsap.set(contentRef4.current, { x: "-110%" });
    gsap.set(contentRef5.current, { y: "-110%" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=600%", // Tambah durasi karena ada 2 transisi panel (2 x 150%)
        scrub: true,
        pin: true,     // Pin seluruh container agar transisi mulus di satu titik
      },
    });

    tl.to(contentRef2.current, { x: "0%", ease: "none" }) // Panel 2 masuk dari kanan
      .to(contentRef3.current, { y: "0%", ease: "none" }) // Panel 3 masuk dari bawah
      .to(contentRef4.current, { x: "0%", ease: "none" }) // Panel 4 masuk dari kiri
      .to(contentRef5.current, { y: "0%", ease: "none" }); // Panel 5 masuk dari atas
      
  }, { scope: container });

  return (
    <main ref={container} className="relative h-screen w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="absolute inset-0 z-0 bg-zinc-950 flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold text-white">Hero Section</h1>
      </section>

      {/* 2. PANEL 2 (Kanan ke Kiri) */}
      <section 
        ref={contentRef2} 
        className="absolute inset-0 z-10 bg-blue-600 text-white flex flex-col items-center justify-center "
      >
        <h2 className="text-5xl font-bold">Kontol</h2>
        <p>Dari Kanan</p>
      </section>

      {/* 3. PANEL 3 (Bawah ke Atas) */}
      <section 
        ref={contentRef3} 
        className="absolute inset-0 z-20 bg-white text-black flex flex-col items-center justify-center "
      >
        <h2 className="text-5xl font-bold">Gaming</h2>
        <p>Dari Bawah</p>
      </section>

        {/* 4. PANEL 4 (Kiri ke Kanan) */}
        <section
        ref={contentRef4}
        className="absolute inset-0 z-30 bg-green-600 text-white flex flex-col items-center justify-center "
      >
        <h2 className="text-5xl font-bold">Bro</h2>
        <p>Dari Kiri</p>
      </section>

      {/* 4. PANEL 4 (Kiri ke Kanan) */}
        <section
        ref={contentRef5}
        className="absolute inset-0 z-30 bg-purple-600 text-white flex flex-col items-center justify-center "
      >
        <h2 className="text-5xl font-bold">Memek</h2>
        <p>Dari Atas</p>
      </section>

    </main>
  );
}