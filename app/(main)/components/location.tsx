'use client';
import Link from "next/link";

export default function Location() {
    return (
      <section id="location" className="py-24 px-4 md:px-12 bg-gradient-to-br from-[#f9f6f0] to-white dark:from-[#2a2b2d] dark:to-[#1a1b1d]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C9A961] font-bold tracking-widest uppercase text-sm">Find Us</span>
            <h2 className="text-5xl font-black text-[#165527] dark:text-white mt-4">Visit AuraBean</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
              Temukan kami di jantung kota Bandung. Nikmati pengalaman kopi yang tak terlupakan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="relative h-[500px] xl:h-full rounded-3xl overflow-hidden shadow-2xl group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8994890487536!2d107.61870631476986!3d-6.903450895015339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c46e6f5dd%3A0x1e8b4b99c8b3dd12!2sJl.%20Riau%2C%20Bandung!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <p className="text-[#165527] font-bold text-sm flex items-center gap-2">
                  <i className="ri-map-pin-fill text-[#C9A961]"></i>
                  Bandung, Indonesia
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-white dark:bg-[#2a2b2d] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-[#165527]/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#165527] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-[#C9A961] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#165527] dark:text-white mb-2">Our Address</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">Jl. Riau No. 123</p>
                    <p className="text-zinc-600 dark:text-zinc-400">Bandung, Jawa Barat 40115</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/628123456789?text=Halo%20AuraBean,%20saya%20ingin%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-whatsapp-fill text-[#25D366] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
                      Chat via WhatsApp
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                    </h4>
                    <p className="text-white/90">+62 812-3456-789</p>
                    <p className="text-white/70 text-sm mt-1">Fast response • Order langsung</p>
                  </div>
                </div>
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com/aurabean.bdg"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-instagram-fill text-[#E1306C] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
                      Follow Instagram
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                    </h4>
                    <p className="text-white/90">@aurabean.bdg</p>
                    <p className="text-white/70 text-sm mt-1">Lihat menu & promo terbaru</p>
                  </div>
                </div>
              </Link>

              {/* Opening Hours */}
              <div className="bg-[#165527] p-8 rounded-3xl shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A961] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-[#165527] text-xl"></i>
                  </div>
                  <div className="text-white w-[300px]">
                    <h4 className="font-bold text-lg mb-3">Buka Setiap Hari</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Senin — Jumat</span>
                        <span className="font-mono text-[#C9A961]">07:00 — 20:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Sabtu — Minggu</span>
                        <span className="font-mono text-[#C9A961]">08:00 — 21:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}