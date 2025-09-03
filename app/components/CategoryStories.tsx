'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

const categories = [
  {
    id: 1,
    name: 'Rings',
    image: 'https://tejaani.com/wp-content/uploads/2021/03/BRCJ7-1.jpg'
  },
  {
    id: 2,
    name: 'Necklaces',
    image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/f/5f2a02d11015438_3.jpg?rnd=20200526195200&tr=w-512'
  },
  {
    id: 3,
    name: 'Earrings',
    image: 'https://www.miabytanishq.com/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7b2c8259/images/hi-res/3023SCJ.jpg'
  },
  {
    id: 4,
    name: 'Bracelets',
    image: 'https://shop.globein.com/cdn/shop/products/p415335_2c_1080x.jpg?v=1755645780'
  },
  {
    id: 5,
    name: 'Pendants',
    image: 'https://nemichandjewels.com/cdn/shop/files/8500413.jpg?v=1697199154&width=1946'
  },
  {
    id: 6,
    name: 'Chains',
    image: 'https://www.elyta.in/cdn/shop/files/CH00763R16.jpg?v=1723274936'
  },
  {
    id: 7,
    name: 'Wedding',
    image: 'https://sepvergara.com/wp-content/uploads/2020/09/s-l960.png'
  },
  {
    id: 8,
    name: 'Party',
    image: 'https://rubans.in/cdn/shop/files/rubans-rhodium-plated-white-cubic-zirconia-studded-swirl-design-adjustable-statement-ring-finger-rings-1143859883_1800x1800.jpg?v=1755714506'
  },
  {
    id: 9,
    name: 'Daily',
    image: 'https://glizzglam.com/cdn/shop/files/GG-E7-processed.webp?crop=center&height=600&v=1727949188&width=600'
  },
  {
    id: 10,
    name: 'Office',
    image: 'https://www.miabytanishq.com/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw79b6e721/images/Mia/hi-res/3824SKN.jpg?sw=640&sh=640'
  }
]

export default function CategoryStories() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative py-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>

          {/* Categories */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 cursor-pointer"
              >
                <div className="relative w-20 h-20 mb-2">
                  <div className="w-full h-full rounded-full overflow-hidden border-3 border-gradient-to-r from-yellow-400 to-amber-500 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-700 font-medium">
                  {category.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}