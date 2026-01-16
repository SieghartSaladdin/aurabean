// Cafe Components - Feature Section
export function CafeFeatures() {
    return (
      <section className="bg-[#165527] text-white py-32">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h3 className="text-5xl font-black leading-tight tracking-tight">The Craft of the Bean</h3>
              <p className="text-zinc-300 text-lg leading-relaxed">
                  Every bean is ethically sourced and roasted in small batches to preserve its unique flavor profile. We believe that true luxury lies in the details—the temperature of the water, the coarseness of the grind, and the rhythm of the pour.
              </p>
              <div className="flex flex-col gap-8 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-[#C9A961]">
                     <i className="ri-earth-line text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Ethical Sourcing</h4>
                    <p className="text-zinc-400 text-sm">Direct partnerships with regenerative coffee farms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-[#C9A961]">
                    <i className="ri-fire-line text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Precision Roasting</h4>
                    <p className="text-zinc-400 text-sm">Small-batch profiles for depth and clarity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-[#C9A961]">
                     <i className="ri-medal-line text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Champion Baristas</h4>
                    <p className="text-zinc-400 text-sm">Technique-driven brewing for every single cup.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div 
                className="aspect-[4/5] rounded-2xl bg-cover bg-center overflow-hidden shadow-[0_10px_30px_-10px_rgba(22,85,39,0.1)]" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDsTZtaskXWlbk_6jzt3ZsLJhpHizr43hMWwJU--rQMX_LkZIVVJQmoulRhQbhinxMOSqZPeuWXTrj6LmZ09j7qhQcbnLO-NC0583fW73QANfyWYAVfqdg9YMJDRD-j-KOmP5Zt1kCFL_K1T1k0InTgVIU4gm8Mm1WSpVVXRnWiGe7cCjtcpKwEEW2Gmy2FiF7DHEegOc9P3yRZqrnYTrw9WoVBfO2jp1J7FjRajx-pikPNurVe7oC5zFZSrvQi8udggu0sm_ky1os")' }}
              >
              </div>
              {/* Overlapping Decorative Element */}
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#C9A961] rounded-xl p-8 hidden md:flex flex-col justify-end text-[#165527]">
                <i className="ri-brain-line text-4xl mb-4"></i>
                <p className="font-bold text-sm tracking-tight leading-tight">Meticulously Crafted Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
