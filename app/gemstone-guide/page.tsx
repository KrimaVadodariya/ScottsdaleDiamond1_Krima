'use client'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function GemstoneGuide() {
  const gemstones = [
    {
      name: "AMETHYST",
      description: "Amethyst is a violet variety of quartz. It is the most popular purple gemstone. Amethyst occurs in primary hues from a light pinkish violet color to a deep purple color. Amethyst may exhibit one or both secondary hues, red and blue. High quality amethyst can be found in Siberia, Sri Lanka, Brazil, Uruguay, and the Far East.",
      shopLinks: ["Amethyst Rings", "Amethyst Earrings", "Amethyst Pendants", "Amethyst Necklaces"],
      image: "/gg1.jpg"
    },
    {
      name: "AQUAMARINE",
      description: "Aquamarine is the blue to blue-green variety of the mineral beryl. Aquamarine's name comes from the Latin for seawater, and ancient mariners claimed the gem would calm waves and keep sailors safe at sea. March's birthstone was also thought to enhance the happiness of marriages.",
      shopLinks: ["Aquamarine Rings", "Aquamarine Earrings", "Aquamarine Pendants", "Aquamarine Necklaces"],
      image: "/gg2.jpg"
    },
    {
      name: "BLACK DIAMOND",
      description: "A black diamond is a rare, natural fancy colored diamond. They are colored by graphite inclusions. Unlike other fancy colored diamonds which get their color from chemical impurities, black diamonds get their color from numerous dark inclusions, primarily graphite.",
      shopLinks: ["Black Diamond Rings", "Black Diamond Earrings", "Black Diamond Pendants", "Black Diamond Necklaces"],
      image: "/gg3.jpg"
    },
    {
      name: "BLACK PEARL",
      description: "Black Pearls (Tahitian pearls) are one of the most striking gems in a jewelry box. They are cultivated in French Polynesia in the warm, clear waters of coral atolls. No other pearl in the world has this natural range of colors: silver, charcoal, peacock green, blue, brown and eggplant.",
      shopLinks: ["Black Pearl Rings", "Black Pearl Earrings", "Black Pearl Pendants", "Black Pearl Necklaces"],
      image: "/gg4.jpg"
    },
    {
      name: "BLUE DIAMOND",
      description: "Blue diamonds are among the rarest of all colored diamonds. A blue diamond gets its color from the presence of boron within the crystal structure. The deeper the blue, the more valuable the stone. Blue diamonds can range from a very faint blue to a deep blue.",
      shopLinks: ["Blue Diamond Rings", "Blue Diamond Earrings", "Blue Diamond Pendants", "Blue Diamond Necklaces"],
      image: "/gg5.jpg"
    },
    {
      name: "BLUE TOPAZ",
      description: "Blue topaz is the most popular topaz variety. It ranges in color from a pale sky blue to a vibrant Swiss blue to a deep London blue. Blue topaz gems are typically eye-clean with excellent transparency and a vitreous luster. Most blue topaz in today's market is colorless topaz that has been treated to a blue color.",
      shopLinks: ["Blue Topaz Rings", "Blue Topaz Earrings", "Blue Topaz Pendants", "Blue Topaz Necklaces"],
      image: "/gg7.jpg"
    },
    {
      name: "BROWN DIAMOND",
      description: "Brown diamonds are the most common color variety of fancy colored diamonds. In recent years, brown diamonds have become very popular, particularly in Australia where most brown diamonds are mined. Brown diamonds are also known as champagne diamonds, chocolate diamonds, or cognac diamonds.",
      shopLinks: ["Brown Diamond Rings", "Brown Diamond Earrings", "Brown Diamond Pendants", "Brown Diamond Necklaces"],
      image: "/gg8.jpg"
    },
    {
      name: "CITRINE",
      description: "Citrine is the yellow to golden variety of quartz. Citrine's attractive color, plus the durability and affordability it shares with most other quartzes, makes it the top-selling yellow-to-orange gem. In the contemporary market, citrine's most popular shade is an earthy, deep, brownish or reddish orange.",
      shopLinks: ["Citrine Rings", "Citrine Earrings", "Citrine Pendants", "Citrine Necklaces"],
      image: "/gg9.jpg"
    },
    {
      name: "DIAMOND",
      description: "Diamond is the hardest natural substance known to mankind. Because of its extreme hardness, diamond has a number of important industrial applications. The hardness, brilliance, and sparkle of diamonds make them unsurpassed as gems.",
      shopLinks: ["Diamond Rings", "Diamond Earrings", "Diamond Pendants", "Diamond Necklaces"],
      image: "/gg10.jpg"
    },
    {
      name: "EMERALD",
      description: "Emerald is the green variety of beryl. It is colored by trace amounts of chromium and sometimes vanadium. Colombian emeralds are generally the finest, with that desirable intense pure green color and good transparency. They're often described as having a warm velvet-like or velvety appearance.",
      shopLinks: ["Emerald Rings", "Emerald Earrings", "Emerald Pendants", "Emerald Necklaces"],
      image: "/gg11.jpg"
    },
    {
      name: "GARNET",
      description: "Garnet is actually a group of several minerals. Five of these – pyrope, almandine, spessartine, grossular and andradite – are important as gems. Garnet's refractive index is high, giving it exceptional brilliance. Colors range from red to orange, yellow, green, purple, brown, blue, black, pink and colorless.",
      shopLinks: ["Garnet Rings", "Garnet Earrings", "Garnet Pendants", "Garnet Necklaces"],
      image: "/gg12.jpg"
    }
  ]

  return (
    <div style={{backgroundColor: '#fefefeff'}} className="min-h-screen pt-32">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-4xl pb-6 font-bold text-center mb-16" style={{color: '#2F2F2F'}}>
          Gemstone Guide
          
        </h1>
        
        
        <div className="space-y-12">
          {gemstones.map((gemstone, index) => (
            <div key={gemstone.name} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4" style={{color: '#2F2F2F'}}>
                  {gemstone.name}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{color: '#6D6157'}}>
                  {gemstone.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium" style={{color: '#2F2F2F'}}>
                    SHOP {gemstone.name} JEWELRY:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {gemstone.shopLinks.map((link, linkIndex) => (
                      <Link 
                        key={linkIndex}
                        href="#" 
                        className="px-3 py-1 text-xs border rounded-full transition-colors"
                        style={{
                          borderColor: '#D4C2A8',
                          color: '#6D6157',
                          backgroundColor: '#EFE9E3'
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src={gemstone.image} 
                  alt={gemstone.name}
                  className="w-48 h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}