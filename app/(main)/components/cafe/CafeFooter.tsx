// Cafe Components - Footer
import Link from 'next/link';

export function CafeFooter() {
    return (
      <footer className="bg-[#f9f6f0] dark:bg-[#2a2b2d] py-24 px-8 md:px-12 border-t border-[#165527]/10 transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <i className="ri-flashlight-line text-[#165527] dark:text-[#C9A961] text-3xl"></i>
              <h2 className="text-2xl font-black uppercase tracking-[0.15em] text-[#121713] dark:text-white">Boutique Cafe</h2>
            </div>
            <p className="text-zinc-500 max-w-sm">Elevating the coffee ritual into an art form. Join us for a sensory journey through the world's finest origins.</p>
            <div className="flex gap-6">
              <Link className="text-[#165527] hover:text-[#C9A961] transition-colors" href="#">
                <i className="ri-camera-line text-2xl"></i>
              </Link>
              <Link className="text-[#165527] hover:text-[#C9A961] transition-colors" href="#">
                <i className="ri-mail-line text-2xl"></i>
              </Link>
              <Link className="text-[#165527] hover:text-[#C9A961] transition-colors" href="#">
                <i className="ri-map-pin-line text-2xl"></i>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest text-[#C9A961]">Experience</h5>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-zinc-600 dark:text-zinc-400">
              <li><Link className="hover:text-[#165527]" href="#">The Menu</Link></li>
              <li><Link className="hover:text-[#165527]" href="#">Subscription</Link></li>
              <li><Link className="hover:text-[#165527]" href="#">Roastery Tours</Link></li>
              <li><Link className="hover:text-[#165527]" href="#">Gift Cards</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest text-[#C9A961]">Visit</h5>
            <div className="text-sm space-y-2 text-zinc-600 dark:text-zinc-400">
              <p>888 Artisanal Way</p>
              <p>New York, NY 10012</p>
              <p className="pt-4 italic">Mon—Fri: 07:00 — 19:00</p>
              <p className="italic">Sat—Sun: 08:00 — 20:00</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-24 pt-8 border-t border-[#165527]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-zinc-400">© 2024 Boutique Cafe. All Rights Reserved.</p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <Link className="hover:text-[#165527] transition-colors" href="#">Privacy Policy</Link>
            <Link className="hover:text-[#165527] transition-colors" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    );
}
