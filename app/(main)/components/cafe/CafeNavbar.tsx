// Cafe Components - Navbar
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function CafeNavbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-6">
      <header className="flex items-center justify-between rounded-xl bg-[#f9f6f0]/80 dark:bg-[#2a2b2d]/80 backdrop-blur-md border border-[#165527]/5 px-8 py-4 shadow-[0_10px_30px_-10px_rgba(22,85,39,0.1)]">
        <div className="flex items-center gap-3">
          <div className="size-6 text-[#165527] dark:text-[#C9A961]">
             {/* Using Remix Icon as replacement for Material Symbol 'storm' */}
            <i className="ri-flashlight-line text-3xl align-middle"></i>
          </div>
          <h2 className="text-xl font-bold tracking-tight uppercase tracking-[0.15em]">Boutique Cafe</h2>
        </div>
        <nav className="hidden md:flex items-center gap-12">
          {["Menu", "Locations", "Our Story", "Reservations"].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-xs font-bold uppercase tracking-[0.15em] hover:text-[#C9A961] transition-colors"
            >
              {item}
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
