'use client';

import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";
import Image from "next/image";
import { CafeHero } from "./components/CafeHero";
import { CafeCollection } from "./components/CafeCollection";
import Location from "./components/location";

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

  // Data menu dengan gambar langsung dari Unsplash (otomatis jadi WebP by Next.js)
  const menuCategories = [
    {
      category: "Signature Coffee",
      items: [
        { 
          id: 1, 
          name: "Classic Espresso", 
          price: "25k", 
          img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
          description: "Rich and bold Italian espresso shot"
        },
        { 
          id: 2, 
          name: "Caramel Latte", 
          price: "35k", 
          img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80",
          description: "Smooth latte with caramel drizzle"
        },
        { 
          id: 3, 
          name: "Cappuccino", 
          price: "32k", 
          img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
          description: "Perfect foam with rich espresso"
        },
      ]
    },
    {
      category: "Specialty Drinks",
      items: [
        { 
          id: 4, 
          name: "Matcha Latte", 
          price: "38k", 
          img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
          description: "Premium Japanese matcha blend"
        },
        { 
          id: 5, 
          name: "Cold Brew", 
          price: "32k", 
          img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
          description: "Smooth 24-hour cold brew"
        },
        { 
          id: 6, 
          name: "Caffe Mocha", 
          price: "40k", 
          img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
          description: "Rich chocolate blend with espresso"
        },
      ]
    },
    {
      category: "Pastries & Treats",
      items: [
        { 
          id: 7, 
          name: "Butter Croissant", 
          price: "30k", 
          img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
          description: "Fresh baked daily with French butter"
        },
        { 
          id: 8, 
          name: "Affogato", 
          price: "42k", 
          img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80",
          description: "Vanilla gelato drowned in espresso"
        },
      ]
    }
  ];

  return (
    <main>
      <div ref={container} className="relative overflow-hidden bg-white">
        {/* SEKSI 1: Hero Section (Akan di-pin saat scroll) */}
        <CafeHero />
        
        {/* SEKSI 2: Section Hijau (Panel yang naik) */}
        <section 
          id="menu"
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
              className="flex gap-12 px-12 pb-20 w-max" // w-max penting agar track memanjang ke samping
            >
              {menuCategories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col gap-6">
                  {/* Category Header */}
                  <div className="mb-4">
                    <h3 className="text-[#C9A961] text-2xl font-bold tracking-wide">
                      {category.category}
                    </h3>
                    <div className="w-20 h-1 bg-[#C9A961] mt-2"></div>
                  </div>

                  {/* Category Items */}
                  <div className="flex gap-6">
                    {category.items.map((item) => (
                      <div 
                        key={item.id} 
                        className="w-[380px] h-[520px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 hover:border-[#C9A961]/30 transition-all duration-300 hover:scale-105"
                      >
                        {/* Image */}
                        <div className="relative h-[280px] overflow-hidden">
                          <Image 
                            src={item.img} 
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 380px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col gap-4">
                          <div>
                            <h4 className="text-white text-2xl font-bold mb-2">{item.name}</h4>
                            <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                          </div>

                          <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/10">
                            <span className="text-[#C9A961] text-3xl font-bold font-mono">{item.price}</span>
                            <button className="bg-[#C9A961] text-black px-6 py-3 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white transform hover:scale-105">
                              Order Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CafeCollection />
      <Location />
    </main>
  );
}