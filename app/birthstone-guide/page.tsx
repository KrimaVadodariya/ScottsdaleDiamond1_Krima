'use client'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function BirthstoneGuide() {
  const birthstones = [
    {
      month: "JANUARY BIRTHSTONE",
      name: "GARNET",
      image: "/bs1.png",
      description: "Garnet is the birzthstone for January and the gem for the second anniversary. Most people think of garnet as a red gemstone. However, it is actually available in almost every color, including green tsavorite garnet and spessartite garnet, which is found in vibrant oranges and yellows. The garnet family is one of the most complex in the gem world. It's not a single species, but rather consists of several species and varieties.",
      shopLinks: ["Garnet Rings", "Garnet Earrings", "Garnet Pendants", "Garnet Necklaces"],
      monthNumber: "01"
    },
    {
      month: "FEBRUARY BIRTHSTONE",
      name: "AMETHYST",
      image: "/bs2.png",
      description: "Amethyst is the birthstone for February. It is the most popular purple gemstone. Amethyst occurs in primary hues from a light pinkish violet color to a deep purple color. Amethyst may exhibit one or both secondary hues, red and blue. The finest amethyst color is a strong reddish purple or purple with no visible color zoning. Dealers prefer strongly saturated reddish purple to dark purple, as long as the stone is not so dark as to reduce brightness.",
      shopLinks: ["Amethyst Rings", "Amethyst Earrings", "Amethyst Pendants", "Amethyst Necklaces"],
      monthNumber: "02"
    },
    {
      month: "MARCH BIRTHSTONE",
      name: "AQUAMARINE",
      image: "/bs3.png",
      description: "Aquamarine is the birthstone for March. The name aquamarine is derived from the Latin word aqua, meaning water, and marina, meaning the sea. This gemstone was believed to protect sailors and guarantee a safe voyage. The serene blue of aquamarine is said to cool the temper, allowing the wearer to remain calm and levelheaded. Most aquamarine is a light greenish blue, with the deeper blues being more valuable.",
      shopLinks: ["Aquamarine Rings", "Aquamarine Earrings", "Aquamarine Pendants", "Aquamarine Necklaces"],
      monthNumber: "03"
    },
    {
      month: "APRIL BIRTHSTONE",
      name: "DIAMOND",
      image: "/bs4.png",
      description: "Diamond is the birthstone for April. The name is derived from the ancient Greek word adamas, meaning 'unconquerable' or 'indestructible.' Today we know that diamonds are not indestructible, but they are the hardest natural material known to man. This extreme hardness makes diamond the most popular choice for engagement rings, as they can withstand daily wear better than any other gemstone.",
      shopLinks: ["Diamond Rings", "Diamond Earrings", "Diamond Pendants", "Diamond Necklaces"],
      monthNumber: "04"
    },
    {
      month: "MAY BIRTHSTONE",
      name: "EMERALD",
      image: "/bs5.png",
      description: "Emerald is the birthstone for May. It is the green variety of beryl and is colored by trace amounts of chromium and sometimes vanadium. Colombian emeralds are generally the finest, with that desirable intense pure green color and good transparency. They're often described as having a warm velvet-like or velvety appearance. The inclusions and fissures within an emerald are sometimes called an internal 'jardin' (French for garden), because of their mossy appearance.",
      shopLinks: ["Emerald Rings", "Emerald Earrings", "Emerald Pendants", "Emerald Necklaces"],
      monthNumber: "05"
    },
    {
      month: "JUNE BIRTHSTONE",
      name: "WHITE PEARL / ALEXANDRITE",
      image: "/bs6.png",
      description: "White Pearl is one of June's birthstones. Pearls are unique among gemstones because they are the only gems created by living creatures. Natural pearls form when an irritant works its way into a pearl-producing mollusk. The mollusk covers the irritant with layers of nacre, the same substance that lines the inside of its shell. Alexandrite is also a June birthstone, known for its remarkable color-changing properties.",
      shopLinks: ["Pearl Rings", "Pearl Earrings", "Pearl Pendants", "Pearl Necklaces"],
      monthNumber: "06"
    },
    {
      month: "JULY BIRTHSTONE",
      name: "RUBY",
      image: "/bs7.png",
      description: "Ruby is the birthstone for July. It is the red variety of the mineral corundum. All other colors of corundum are called sapphire. Ruby's red color comes from trace amounts of the element chromium. The more chromium, the stronger the red color. The most prized rubies are those with a pure, vibrant red to slightly purplish red color. In some cultures, ruby is considered the king of gems.",
      shopLinks: ["Ruby Rings", "Ruby Earrings", "Ruby Pendants", "Ruby Necklaces"],
      monthNumber: "07"
    },
    {
      month: "AUGUST BIRTHSTONE",
      name: "PERIDOT",
      image: "/bs8.png",
      description: "Peridot is the birthstone for August. This gemstone is actually olivine that is gem-quality, and it's one of the few gemstones that occurs in only one color: an olive-green. The intensity and tint of the green, however, depends on the percentage of iron contained in the crystal structure, so peridot can vary from yellow-green to olive to brownish-green. The most valued color is a dark olive-green.",
      shopLinks: ["Peridot Rings", "Peridot Earrings", "Peridot Pendants", "Peridot Necklaces"],
      monthNumber: "08"
    },
    {
      month: "SEPTEMBER BIRTHSTONE",
      name: "SAPPHIRE",
      image: "/bs9.png",
      description: "Sapphire is the birthstone for September. Sapphire is the non-red variety of corundum, the second hardest natural mineral. Although blue is the most popular sapphire color, they actually come in almost every color except red (which would be ruby). The most prized sapphires are velvety blue to violetish blue, in medium to medium-dark tones. Sapphires with these qualities command the highest prices.",
      shopLinks: ["Sapphire Rings", "Sapphire Earrings", "Sapphire Pendants", "Sapphire Necklaces"],
      monthNumber: "09"
    },
    {
      month: "OCTOBER BIRTHSTONE",
      name: "TOURMALINE / OPAL",
      image: "/bs10.png",
      description: "October has two birthstones: tourmaline and opal. Tourmaline is available in a wonderful variety of colors. Pink and green tourmaline are the most well-known gem varieties, but it can also be found in red, yellow, orange, blue, brown, and colorless varieties. Opal is renowned for its unique display of flashing rainbow colors called play-of-color. This phenomenon is caused by opal's internal structure of tiny silica spheres.",
      shopLinks: ["Tourmaline Rings", "Opal Earrings", "Tourmaline Pendants", "Opal Necklaces"],
      monthNumber: "10"
    },
    {
      month: "NOVEMBER BIRTHSTONE",
      name: "CITRINE",
      image: "/bs11.png",
      description: "Citrine is the birthstone for November. It is the yellow to golden variety of quartz. Citrine's attractive color, plus the durability and affordability it shares with most other quartzes, makes it the top-selling yellow-to-orange gem. In the contemporary market, citrine's most popular shade is an earthy, deep, brownish or reddish orange. Its warm color is said to be a gift from the sun.",
      shopLinks: ["Citrine Rings", "Citrine Earrings", "Citrine Pendants", "Citrine Necklaces"],
      monthNumber: "11"
    },
    {
      month: "DECEMBER BIRTHSTONE",
      name: "BLUE TOPAZ / TANZANITE",
      image: "/bs12.png",
      description: "December has multiple birthstones including Blue Topaz and Tanzanite. Blue Topaz is prized for its clarity, stunning luster and moderate understanding. It is worn to bring harmony into relationships and calm the mind of the wearer. In addition to being December's birthstone, Blue Topaz is also the gem given as gifts. Other December gems include zircon and turquoise in and is prized for its rarity. Blue Topaz occurs naturally but most Blue Topaz on the market today is treated to achieve its beautiful blue color. Tanzanite, which displays trichroic properties, understanding and versatility, is also a December birthstone. This gem was only discovered in the 1960's in Tanzania. It used to be seen as a substitute for sapphire because of its similar blue color but is now valued because of its driving beauty. Due to its rarity, tanzanite could well become more valuable than diamonds or sapphires in the future.",
      shopLinks: ["Blue Topaz Rings", "Blue Topaz Earrings", "Blue Topaz Necklaces", "Tanzanite Rings"],
      monthNumber: "12"
    }
  ]

  return (
    <div style={{backgroundColor: '#FAF8F3'}} className="min-h-screen pt-32">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{color: '#2F2F2F'}}>
            BIRTHSTONE JEWELRY GUIDE
          </h1>
          <p className="text-lg max-w-4xl mx-auto" style={{color: '#6D6157'}}>
            Every gem has a story to tell and a song to sing of beautiful places, of the people who first discovered it and of the dreams they inspired. 
            Traditionally a birthstone is associated with each month of the year. For example, the birthstone for January is a garnet, while lucky babies born in April get a diamond as their birthstone.
          </p>
          <p className="text-base mt-4 max-w-4xl mx-auto" style={{color: '#6D6157'}}>
            At our Birthstone store of the highest Birthstone Jewelry, we have been recommending jewelry for the special of our lives frequently. We also offer and recommend gemstones within traditional choices.
          </p>
        </div>
        
        <div className="space-y-16">
          {birthstones.map((stone, index) => (
            <div key={stone.name} className="border-b pb-12" style={{borderColor: '#EFE9E3'}}>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <div className="flex flex-col items-center">
                  <img 
                    src={stone.image} 
                    alt={stone.name}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <div className="text-center">
                    <p className="text-sm font-medium mb-1" style={{color: '#CBAE9B'}}>
                      {stone.month}
                    </p>
                    <h3 className="text-xl font-bold" style={{color: '#2F2F2F'}}>
                      {stone.name}
                    </h3>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="mb-6 p-4 border rounded-lg" style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8'}}>
                    <h4 className="font-bold mb-2" style={{color: '#2F2F2F'}}>{stone.name}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm" style={{color: '#6D6157'}}>
                      <div>
                        <p><strong>Month:</strong> {stone.month.split(' ')[0]}</p>
                        <p><strong>Hardness:</strong> 7-7.5</p>
                        <p><strong>Species:</strong> {stone.name}</p>
                      </div>
                      <div>
                        <p><strong>Crystal System:</strong> Cubic</p>
                        <p><strong>Colors:</strong> Various</p>
                        <p><strong>Care & Cleaning:</strong> Warm soapy water</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-base leading-relaxed mb-6" style={{color: '#6D6157'}}>
                    {stone.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium" style={{color: '#2F2F2F'}}>
                      SHOP {stone.name.toUpperCase()} JEWELRY:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stone.shopLinks.map((link, linkIndex) => (
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
                
                <div className="flex justify-center items-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold opacity-20 mb-2" style={{color: '#D4C2A8'}}>
                      {stone.monthNumber}
                    </div>
                    <div className="w-24 h-24 rounded-lg flex items-center justify-center" style={{backgroundColor: '#EFE9E3'}}>
                      <span className="text-xs" style={{color: '#6D6157'}}>Jewelry</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}