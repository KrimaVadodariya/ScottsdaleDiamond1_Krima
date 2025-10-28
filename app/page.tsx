'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Calendar, Mail, Phone, MapPin, MessageCircle, Instagram, Twitter, Facebook, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Footer from './components/Footer'
import TrustSection from './components/TrustSection'
import NewArrival from './components/NewArrival'
import MainContentSlider from './components/MainContentSlider'
import CustomerReviews from './components/CustomerReviews'

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data)

      // Extract unique categories from products
      const uniqueCategories = Array.from(new Set(data.map((p: { category: string }) => p.category)))
      const categoryData = uniqueCategories.map((cat: string, index: number) => {
        const categoryProducts = data.filter(p => p.category === cat)
        return {
          id: index + 1,
          name: cat,
          image: categoryProducts[0]?.images?.[0] || '/placeholder.jpg',
          count: categoryProducts.length
        }
      })
      setCategories(categoryData)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  // Duplicate categories for infinite loop
  const infiniteCategories = [...categories, ...categories]

  const scrollLeft = () => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.clientWidth / 3
      const newPosition = Math.max(0, scrollPosition - itemWidth)
      scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
      setScrollPosition(newPosition)
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.clientWidth / 3
      const maxPosition = itemWidth * categories.length
      let newPosition = scrollPosition + itemWidth

      if (newPosition >= maxPosition) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        setScrollPosition(0)
      } else {
        scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
        setScrollPosition(newPosition)
      }
    }
  }

  useEffect(() => {
    if (categories.length === 0) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const itemWidth = scrollRef.current.clientWidth / 3 // Show 3 items at once

        setScrollPosition(prev => {
          const newPosition = prev + itemWidth
          const maxPosition = itemWidth * categories.length

          // Reset to beginning when we've scrolled through original set
          if (newPosition >= maxPosition) {
            scrollRef.current?.scrollTo({ left: 0, behavior: 'auto' })
            return 0
          }

          scrollRef.current?.scrollTo({ left: newPosition, behavior: 'smooth' })
          return newPosition
        })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [categories])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex items-center relative overflow-hidden bg-primary-bg"
      >
        <div className="absolute inset-0">
          <Image
            src="/hero1.png"
            alt="Jewelry Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-text-primary/70 via-text-primary/50 to-transparent" />
        </div>
        {/* <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://media.davidyurman.com/video/Content/2025/7-14-Amulets/Mens-Amulets/2025_Summer4_MenAmulets_Hero_Desktop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div> */}

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-left max-w-2xl mx-8 mt-32"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-6"
          >
            {/*<Sparkles className="text-yellow-400" size={60} /> */}
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-6 font-space font-black text-primary-bg mb-6 leading-tight text-start">
            Jewelry That Evolves With You
          </h1>

          <p className="text-lg sm:text-xl text-primary-bg mb-8 font-light leading-relaxed">
            Every chapter of your life deserves something timeless to remember it by.
            From milestones to quiet shifts, we craft pieces that move with your story — not apart from it.
            Each design begins with who you are today and grows with who you're becoming.
            Because jewelry should do more than shine — it should belong to you.
          </p>

          {/* <p className="text-lg sm:text-xl text-primary-bg mb-8 font-light leading-relaxed">
            If you don't see somthing in our initial collection you like,
            send us a picture and within 48 hours we will provide you a freequote.
          </p>  */}

          <div className="flex space-x-4">
            <Link href="/jewelry">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cta text-primary-bg hover:bg-highlight px-8 py-4 font-bold text-lg transition-all duration-300 shadow-lg"
              >
                Shop Now
              </motion.button>
            </Link>

            <Link href="/boutique">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent text-primary-bg hover:bg-accent hover:text-text-primary px-8 py-4 font-bold text-lg transition-all duration-300"
              >
                Book Your consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Main Content Slider */}
      <MainContentSlider />

      {/* Categories Section */}
      <section className="py-20" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-20" style={{ backgroundColor: '#D4C2A8' }} />
              <span className="mx-4 text-3xl">💎</span>
              <div className="h-px w-20" style={{ backgroundColor: '#D4C2A8' }} />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold mb-4" style={{ color: '#2F2F2F' }}>
              Shop By Category
            </h2>
            <p className="text-lg sm:text-xl" style={{ color: '#6D6157' }}>
              Discover the perfect piece for every moment
            </p>

            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-32" style={{ backgroundColor: '#D4C2A8' }} />
            </div>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-2xl h-80"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link key={category.id} href={`/jewelry?category=${category.name}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-xl backdrop-blur-sm" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3" style={{ color: '#2F2F2F' }}>
                          {category.name}
                        </h3>
                        <p className="text-sm mb-4" style={{ color: '#6D6157' }}>
                          {category.count} items available
                        </p>

                        <motion.button
                          whileHover={{ x: 5 }}
                          className="flex items-center font-medium transition-colors"
                          style={{ color: '#CBAE9B' }}
                        >
                          Shop Now
                          <ArrowRight size={16} className="ml-2" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* New Arrivals Section */}
      <NewArrival />

      {/* Centered Text Section */}
      <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FAF8F3' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md text-center" style={{ border: '1px solid #D4C2A8' }}>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8" style={{ color: '#2F2F2F' }}>
              Timeless Elegance, <br /><span className="font-bold">Modern Craftsmanship</span>
            </h2>
            <div className="h-px w-32 mx-auto mb-8" style={{ backgroundColor: '#D4C2A8' }}></div>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#6D6157' }}>
              If you don't see something in our initial collection you like,
              send us a picture and within 48 hours we will provide you a free quote.
            </p>
            <Link
              href="/boutique"
              className="inline-block px-8 py-3 rounded-full font-medium transition-all duration-300"
              style={{
                backgroundColor: '#CBAE9B',
                color: '#2F2F2F',
                border: '1px solid #D4C2A8',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#9C7E6A'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#CBAE9B'}
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Celebrity & Events Banner */}
      <section className="py-3 bg-white overflow-hidden">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-scroll text-lg font-medium" style={{ color: '#6D6157' }}>
            <span className="text-l font-bold " style={{ color: '#2F2F2F' }}>Worn By Celebrities : </span>
            Taylor Swift • Kyle Richards • Sydney Sweeney • Dame Helen Mirren • Kelly Osbourne • Priyanka Chopra • Lily Allen
            <span className="text-l font-bold ms-5" style={{ color: '#2F2F2F' }}>Featured At Events : </span>
            The Academy Awards • The Golden Globes • The Met Gala • The BAFTA Awards • Cannes Film Festival • The Grammy Awards • The Emmy Awards • The Brit Awards • amfAR Gala • The Academy Awards • The Golden Globes • The Met Gala • The BAFTA Awards
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Trust Section */}
      <TrustSection />

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Footer */}
      <Footer />
    </div>
  )
}

