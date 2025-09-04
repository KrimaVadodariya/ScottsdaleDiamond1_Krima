export default function NewArrival() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F2EB] via-[#FFFAF3] to-[#CBAE8E]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#A89F91] mb-4">The Latest Spark</h2>
          <p className="text-xl text-[#A89F91]/70">Discover our latest collections</p>
        </div>
        
        <div className="flex gap-6 items-end justify-center">
          {/* Evil Eye Collection - Small */}
          <div className="relative w-64 h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl shadow-[#A89F91]/20">
            <img
              src="/ring1.webp"
              alt="Ring"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#A89F91]/80 via-[#A89F91]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-[#FFFAF3]">
              <h2 className="text-3xl font-serif italic mb-1">Ring</h2>
              <p className="text-sm opacity-90">For the Queen in You</p>
            </div>
          </div>

          {/* Honey Bee Collection - Large */}
          <div className="relative w-80 h-96 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl shadow-[#D4AF37]/30">
            <img
              src="/bracelet2.avif"
              alt="bracelet"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#CBAE8E]/80 via-[#CBAE8E]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-[#FFFAF3]">
              <h2 className="text-4xl font-serif italic mb-1">Bracelet</h2>
              <p className="text-sm opacity-90">Your Style, Your Vibe </p>
            </div>
          </div>

          {/* Glo Collection - Biggest (Center) */}
          <div className="relative w-96 h-[28rem] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl shadow-[#D4AF37]/40">
            <img
              src="/pendent2.jpg"
              alt="pendent"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#A89F91]/40 via-[#A89F91]/30 to-transparent" />
            <div className="absolute bottom-8 left-8 text-[#FFFAF3]">
              <h2 className="text-6xl font-serif font-light italic mb-2">Nacklace</h2>
              <p className="text-base opacity-90 tracking-wider">Dancing Diamond</p>
            </div>
          </div>

          {/* Peacock Collection - Large */}
          <div className="relative w-80 h-96 rounded-3xl overflow-hidden group cursor-pointer ">
            <img
              src="/earring2.webp"
              alt="earring"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#A89F91]/40 via-[#A89F91]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-[#FFFAF3]">
              <h2 className="text-4xl font-serif mb-1">Earring</h2>
              <p className="text-sm opacity-90">A Timeless Heritage</p>
            </div>
          </div>

          {/* Aruna Collection - Small */}
          <div className="relative w-64 h-80 rounded-3xl overflow-hidden group cursor-pointer  ">
            <img
              src="/nacklace2.jpg"
              alt="nacklace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#CBAE8E]/40 via-[#CBAE8E]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-[#FFFAF3]">
              <h2 className="text-3xl font-serif mb-1">Nacklace</h2>
              <p className="text-sm opacity-90 tracking-wide">Heritage Sets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}