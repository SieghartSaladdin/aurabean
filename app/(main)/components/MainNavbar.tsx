'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function CafeNavbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "Collection", id: "collection" },
    { name: "Location", id: "location" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }
    
    if (id === 'menu') {
      // Menu section dimulai setelah hero (sekitar 1 viewport height)
      const targetScroll = window.innerHeight;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset untuk navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Home section - jika scroll masih di dekat top
      if (scrollY < windowHeight * 0.5) {
        setActiveSection('home');
        return;
      }
      
      // Menu section - jika scroll di area pinned menu (biasanya dari viewport height sampai beberapa viewport)
      // Karena menu di-pin dengan scrollTrigger end: "+=500%", maka menu akan aktif untuk jangka scroll yang panjang
      if (scrollY >= windowHeight * 0.5 && scrollY < windowHeight * 5) {
        setActiveSection('menu');
        return;
      }

      // Collection dan Location sections
      const collectionEl = document.getElementById('collection');
      const locationEl = document.getElementById('location');
      
      if (collectionEl) {
        const collectionTop = collectionEl.getBoundingClientRect().top + window.scrollY;
        if (scrollY >= collectionTop - 300) {
          if (locationEl) {
            const locationTop = locationEl.getBoundingClientRect().top + window.scrollY;
            if (scrollY >= locationTop - 300) {
              setActiveSection('location');
              return;
            }
          }
          setActiveSection('collection');
          return;
        }
      }
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-6 pointer-events-none">
      <header className="pointer-events-auto flex items-center justify-between rounded-xl bg-[#f9f6f0]/80 dark:bg-[#2a2b2d]/80 backdrop-blur-md border border-[#165527]/5 px-8 py-4 shadow-[0_10px_30px_-10px_rgba(22,85,39,0.1)]">
        <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={scrollToTop}
        >
          <div className="text-[#165527] dark:text-[#C9A961] group-hover:scale-110 transition-transform">
             {/* Using Remix Icon as replacement for Material Symbol 'storm' */}
            <i className="ri-cup-line text-2xl align-middle"></i>
          </div>
          <h2 className="text-xl font-bold tracking-tight uppercase tracking-[0.15em]">Aura Bean</h2>
        </div>
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={cn(
                "text-xs font-bold uppercase tracking-[0.15em] transition-colors relative",
                activeSection === item.id 
                  ? "text-[#C9A961]" 
                  : "text-[#165527] dark:text-white hover:text-[#C9A961]"
              )}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#C9A961] animate-in fade-in zoom-in duration-300" />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center bg-[#165527] text-white text-xs font-bold uppercase tracking-[0.15em] px-6 py-3 rounded-lg hover:bg-[#165527]/90 transition-all">
            Order Online
          </button>
        </div>
      </header>
    </div>
  );
}
