'use client';

import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";
import { CafeHero } from "./components/cafe/CafeHero";
import { CafeCollection } from "./components/cafe/CafeCollection";

export default function HomePage() {
  const menuTrackRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Inisialisasi: Panel hijau berada di bawah layar
    gsap.set(containerRef.current, { y: "110%" });
    gsap.set(menuTrackRef.current, { x: "110%" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        // TAMBAHAN: end ditambah jadi 500% agar transisi vertikal dan horizontal punya ruang scroll yang cukup
        end: "+=500%", 
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // ANIMASI 1: Panel Hijau naik ke atas (Vertical Transition)
    tl.to(containerRef.current, { 
      y: "0%", 
      ease: "none" 
    });

    // ANIMASI 2: Menu bergeser ke kiri (Horizontal Scroll)
    // Digabung dalam timeline yang sama agar berjalan setelah panel hijau mentok di atas
    tl.to(menuTrackRef.current, {
      x: () => {
        if (menuTrackRef.current) {
          // Menghitung berapa jauh harus geser: Total lebar track dikurangi lebar layar
          return -(menuTrackRef.current.scrollWidth - window.innerWidth + 100);
        }
        return 0;
      },
      ease: "none",
    });
      
  }, { scope: container });

  // Data dummy untuk menu (Nanti bisa kamu hubungkan ke Supabase)
  const menus = [
    { id: 1, name: "Espresso", price: "25k", img: "☕" },
    { id: 2, name: "Caramel Latte", price: "35k", img: "🥤" },
    { id: 3, name: "Croissant", price: "30k", img: "🥐" },
    { id: 4, name: "Matcha Latte", price: "38k", img: "🍵" },
    { id: 5, name: "Cold Brew", price: "32k", img: "🧊" },
    { id: 6, name: "Avocado Coffee", price: "40k", img: "🥑" },
  ];

  return (
    <main>
      <div ref={container} className="relative overflow-hidden bg-white">
        {/* SEKSI 1: Hero Section (Akan di-pin saat scroll) */}
        <CafeHero />
        
        {/* SEKSI 2: Section Hijau (Panel yang naik) */}
        <section 
          ref={containerRef} 
          className="absolute inset-0 z-20 bg-[#165527] flex-col flex justify-start pt-32 overflow-hidden"
        >
          <div className="px-12 mb-12">
            <span className="text-[#C9A961] font-bold tracking-widest uppercase text-sm">Our Collection</span>
            <h2 className="text-6xl font-black text-white mt-2">AuraBean Menu</h2>
            <p className="text-white/60 mt-4 max-w-md">Silahkan geser ke bawah untuk melihat menu spesial kami yang diracik dengan hati.</p>
          </div>

          {/* TAMBAHAN: Wrapper Horizontal Scroll */}
          <div className="w-full">
            <div 
              ref={menuTrackRef} 
              className="flex gap-8 px-12 pb-20 w-max" // w-max penting agar track memanjang ke samping
            >
              {menus.map((item) => (
                <div 
                  key={item.id} 
                  className="w-[350px] h-[450px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:bg-white/10 transition-colors"
                >
                  <div className="text-8xl">{item.img}</div>
                  <div>
                    <h4 className="text-white text-3xl font-bold">{item.name}</h4>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-[#C9A961] text-2xl font-mono">{item.price}</span>
                      <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CafeCollection />
    </main>
  );
}