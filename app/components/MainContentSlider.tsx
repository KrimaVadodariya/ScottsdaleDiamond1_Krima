'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    title: "BESPOKE WITHOUT THE RISK. BRILLIANCE WITHOUT THE MINING.",
    description: "London's most liberating fine jewellery experience. Bespoke design with lab-grown diamonds, zero pressure, and room to grow — because the best moments aren't rushed. They're chosen.",
    image: "/h1.png",
    imageAlt: "Bespoke jewelry crafting",
    badge: null,
    buttons: [
      { text: "EXPLORE DESIGNS", href: "/jewelry", primary: true },
      { text: "BOOK CONSULTATION", href: "/boutique", primary: false }
    ],
    imageLeft: true,
    bg: "bg-secondary-bg"
  },
  {
    id: 2,
    title: "INTRODUCING OUR FIRST READY-MADE COLLECTION",
    description: "We're excited to announce the launch of our inaugural ready-made jewelry collection! Carefully curated pieces that embody our signature style, now available instantly on our website and Amazon.",
    image: "/h2.png",
    imageAlt: "Ready-made jewelry collection",
    badge: "🎉 New Launch",
    features: [
      "Instant availability - no waiting",
      "Available on Amazon Prime", 
      "Same quality, faster delivery"
    ],
    buttons: [
      { text: "SHOP COLLECTION", href: "/jewelry", primary: true },
      { text: "VIEW ON AMAZON", href: "#", primary: false }
    ],
    imageLeft: false,
    bg: "bg-primary-bg"
  },
  {
    id: 3,
    title: "A LITTLE CHANGE. A LOT OF POWER.",
    description: "Sometimes the smallest adjustments create the most profound transformations. Our jewelry doesn't just accessorize your style — it amplifies your confidence, celebrates your milestones, and becomes part of your story.",
    image: "/h3.png",
    imageAlt: "Jewelry transformation",
    badge: null,
    powerPoints: [
      { title: "Personal Expression", desc: "Each piece reflects your unique personality and style" },
      { title: "Confidence Boost", desc: "Feel empowered and radiant in every moment" },
      { title: "Lasting Impact", desc: "Create memories that last a lifetime" }
    ],
    buttons: [
      { text: "DISCOVER YOUR POWER", href: "/jewelry", primary: true },
      { text: "START YOUR JOURNEY", href: "/boutique", primary: false }
    ],
    imageLeft: true,
    bg: "bg-secondary-bg"
  }
]

export default function MainContentSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section className={`py-20 ${slide.bg} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <motion.div
              className={`space-y-8 ${slide.imageLeft ? 'order-2' : 'order-1'}`}
            >
              {slide.badge && (
                <div className="inline-block">
                  <span className="bg-accent text-text-primary px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider">
                    {slide.badge}
                  </span>
                </div>
              )}
              
              <h2 className="text-4xl lg:text-5xl font-space font-black text-text-primary leading-tight">
                {slide.title}
              </h2>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                {slide.description}
              </p>
              
              {slide.features && (
                <div className="space-y-4">
                  {slide.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cta rounded-full"></div>
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {slide.powerPoints && (
                <div className="space-y-6">
                  {slide.powerPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-cta rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1">{point.title}</h4>
                        <p className="text-text-secondary">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {slide.buttons.map((button, index) => (
                  <Link key={index} href={button.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={button.primary 
                        ? "bg-cta text-primary-bg px-8 py-3 font-semibold transition-colors hover:bg-highlight shadow-lg"
                        : "border-2 border-accent text-text-primary px-8 py-3 font-semibold transition-colors hover:border-highlight hover:bg-accent/10"
                      }
                    >
                      {button.text}
                    </motion.button>
                  </Link>
                ))}
              </div>
            </motion.div>
            
            {/* Image */}
            <motion.div
              className={`relative ${slide.imageLeft ? 'order-1' : 'order-2'}`}
            >
              <div className="relative aspect-square border-2 border-accent rounded-lg overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation */}
        <div className="flex items-center justify-center mt-12 space-x-6">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border-2 border-accent hover:bg-accent hover:text-primary-bg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-cta' : 'bg-accent'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border-2 border-accent hover:bg-accent hover:text-primary-bg transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}