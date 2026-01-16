// Cafe Components - Collection Section
export function CafeCollection() {
    return (
      <section className="py-32 px-4 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-4">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tight uppercase tracking-[0.15em]">The Collection</h2>
            <div className="w-24 h-1 bg-[#C9A961]"></div>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xs mt-6 md:mt-0 text-sm italic">
              A curated gallery of our seasonal beans, artisanal pastries, and the spaces where they meet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 auto-rows-[250px]">
          {/* Large Focus */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: 'linear-gradient(0deg, rgba(22, 85, 39, 0.6) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGu5oQUEK0mRJxTmXq50zUdPz4X7FYb9JIL5u8eU3nJ-tNsREbiVj0ZRdHWxVx3GamvyiqQQ--O1obPoSqc8jqgRuJCPIyxexZ24ivwThRfWXzi7y4xbKU4uMdSKFV85oDy9tRTbA8QUOMbfra5_PYQkyld8KutIGpuP6VYitzQhgsjw88F3xKfb3bA9OMfaRWYC4JlE-gsDZ_BdZgtxai_jkms5s45ykjCif9BwtgwNQ4qGSCvkdWY5FaZsQhzVoa8sLe2y2ES8_-")' }}
            ></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-white text-2xl font-bold tracking-tight uppercase">Origin Select</p>
              <p className="text-[#C9A961] text-xs font-bold uppercase tracking-widest">Single Estate Coffee</p>
            </div>
          </div>
          {/* Tall Vertical */}
          <div className="md:row-span-2 relative group overflow-hidden rounded-xl">
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: 'linear-gradient(0deg, rgba(22, 85, 39, 0.6) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZOUST2bLg6NLTtWeLLJ7lnGOV4kdnHOsgSMNXbA9lotX7hXWB_TDGV_fStMe5gWFf4RiJEMFVcr37SaXrMUce1F7UcsS_Msbt5HZHXZeZxccFRD5GFGn-prUEX-fWk2mSVNYvCiJuykcInizYCGRvirwp3Kr3_qzKEWoY43VZ7bLfgEHguqJv3uymL5-n4kZCt_f-dt58iTVt9R1zRxI1QdRKjd8ejfbkY0Vp8tsuBLA9dobHpW9RgntnBmp_c0ijO3c1weeQ35Vv")' }}
            ></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-white text-xl font-bold tracking-tight uppercase">Aesthetics</p>
            </div>
          </div>
          {/* Square Small */}
          <div className="relative group overflow-hidden rounded-xl">
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: 'linear-gradient(0deg, rgba(22, 85, 39, 0.6) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCH6RSEyjE65xvwx4DukeMOM_IwONEvhU1q1aPbm1vi9jGhSiqB3AY8ywLH8NpevlKldgDj9_-W8O4oEwmvTJb86vfczjaFYlD_zSo7iD9Gmp-Wr7ov1NeBRReE8nBPMXOHgTNUethXCTIsCLKo1JOhoR5vyW4mE3bPYsK2MZNvqitIorr1JmhvI-YVaCVITqqkfVX11JZLuO_qwZF6_DyuvGVk3Ln-1yhye8RLmCqo7g9iI5LNA_LEAJIwxkQeHs88Xu9T9RtYzI_v")' }}
            ></div>
            <div className="absolute bottom-4 left-4">
              <p className="text-white text-sm font-bold uppercase">The Bakery</p>
            </div>
          </div>
          {/* Square Small 2 */}
          <div className="relative group overflow-hidden rounded-xl">
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: 'linear-gradient(0deg, rgba(22, 85, 39, 0.6) 0%, rgba(0,0,0,0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMIH7oECyBMMy6DS4HmgAJrqU0MBFAZsw-rh3qaBY2jaXQeygUHiIsw762olUBCapVIQhljg3hLs46VVmlHzYxL-Ewa75w-OCB_zah3_qH76TK9SW9hnfiSUEXQPvtW6grRRGvwcsD8oSCa-cS-BuV53YUneDuguYL0uNZKwTQPbqqbX1s3SlJNYjD5rZcfSTN45f5Y-bKSVj7UJegKXGLUbr_togROTRzBk-lornvJB1bIJqrp_1N5K4k698bVX8PxH7G3z6cV3SH")' }}
            ></div>
            <div className="absolute bottom-4 left-4">
              <p className="text-white text-sm font-bold uppercase">The Pour</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
