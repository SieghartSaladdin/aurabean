// Cafe Components - Hero
import Link from 'next/link';

export function CafeHero() {
    return (
      <main id="home" className="pt-34">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(22,85,39,0.1)] h-[calc(100vh-120px)]">
            {/* Left: Visual Impact */}
            <div 
              className="w-full md:w-1/2 h-full bg-cover bg-center" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDF5KuEfDlXDxCA5yrJC_KLafaVWWBHdVDe6qoax-wl4m21yuPg6uwvdWpqM1i5mg6aJzvyuis6DOf3uNWo-_M7ihPdKIeB6pn9mMxNs-NJpU8JQHwli9z54HOVbuxSwu6ne8pqLC1ZM7jfeEt28vevCHFxJHAjGy8I2KzNZLfiuIChLmMIO25exImbDeh5mkyajlcrPqWDYWLFrCnkiAsyXTA-Y85V3a6NlKqMfpcWpKfuB2rkfyGohqzPZLKhMZN4Uh3M5z9Cc4JU")' }}
            >
            </div>
            {/* Right: Minimalist Content */}
            <div className="w-full md:w-1/2 h-full bg-white dark:bg-zinc-900 flex flex-col justify-center p-12 md:p-24 space-y-8">
              <div className="space-y-4">
                <span className="text-[#C9A961] text-sm font-bold uppercase tracking-[0.3em]">Est. 2024</span>
                <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                    The Perfect Brew,<br/><span className="text-[#165527] italic font-light font-serif">Redefined.</span>
                </h1>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
                    Experience the intersection of artisanal craft and modern luxury. Every cup is a testament to the patient art of the roast.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-6">
                <button className="bg-[#165527] text-white px-8 py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform cursor-pointer">
                    Explore the Menu
                </button>
                <Link href="#" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-[#165527]/20 hover:border-[#C9A961] pb-1 transition-all">
                    Our Story
                    <i className="ri-arrow-right-line text-[#C9A961] group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}
