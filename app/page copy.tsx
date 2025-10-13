'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Calendar, Mail, Phone, MapPin, MessageCircle, Instagram, Twitter, Facebook, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Footer from './components/Footer'
import TrustSection from './components/TrustSection'
import NewArrival from './components/NewArrival'

const categories = [
  {
    id: 1,
    name: 'RINGS',
    image: '/ring1.webp'
  },
  {
    id: 2,
    name: 'NECKLACES',
    image: '/nacklace1.webp'
  },
  {
    id: 3,
    name: 'EARRINGS',
    image: '/earring1.jpeg'
  },
  {
    id: 4,
    name: 'BRACELETS',
    image: '/bracelet.avif'
  },
  
  
]

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  
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
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #fbbf24 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #f59e0b 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, #d97706 0%, transparent 50%)`
          }} />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left - Content */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2"
                >
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                 
                 
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-6xl lg:text-8xl font-bold leading-none"
                >
                  <span className="bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
                    LUXURY
                  </span>
                  <br />
                  <span className="text-white">
                    REDEFINED
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl text-gray-300 leading-relaxed max-w-lg"
                >
                  Experience the perfect fusion of traditional craftsmanship and contemporary design. 
                  Each piece tells a story of elegance, passion, and timeless beauty.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link href="/jewelry">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 158, 11, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl"
                    >
                      Explore Collection
                    </motion.button>
                  </Link>
                  <Link href="/about">
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-amber-400/50 text-amber-400 hover:bg-amber-400/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                  >
                    Watch Our Story
                  </motion.button>
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">50K+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">25+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">1000+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">Unique Designs</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right - Hero Image with 3D Effect */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: 45 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="relative flex justify-center items-center perspective-1000"
              >
                {/* Outer Decorative Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg width="500" height="500" className="text-amber-400/40">
                    <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
                    <circle cx="250" cy="250" r="220" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,10" />
                  </svg>
                </motion.div>
                
                {/* Hexagonal Pattern */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg width="400" height="400" className="text-amber-500/30">
                    <polygon points="200,20 350,110 350,290 200,380 50,290 50,110" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8,4" />
                    <polygon points="200,40 330,120 330,280 200,360 70,280 70,120" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                  </svg>
                </motion.div>
                
                {/* Diamond Grid */}
                <motion.div
                  animate={{ rotate: 180, scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg width="350" height="350" className="text-orange-400/25">
                    <path d="M175,25 L325,175 L175,325 L25,175 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M175,50 L300,175 L175,300 L50,175 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
                    <circle cx="175" cy="175" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                  </svg>
                </motion.div>

                {/* Star Burst */}
                <motion.div
                  animate={{ rotate: -180 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg width="300" height="300" className="text-amber-300/20">
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * 45) * Math.PI / 180;
                      const x1 = 150 + Math.cos(angle) * 60;
                      const y1 = 150 + Math.sin(angle) * 60;
                      const x2 = 150 + Math.cos(angle) * 120;
                      const y2 = 150 + Math.sin(angle) * 120;
                      return (
                        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" opacity="0.7" />
                      );
                    })}
                    <circle cx="150" cy="150" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                  </svg>
                </motion.div>

                {/* Main Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative z-10 w-96 h-96 lg:w-[450px] lg:h-[450px]"
                >
                  <div 
                    className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-amber-400/20"
                    style={{
                      backgroundImage: 'url(/hero.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      transform: 'rotateY(-5deg) rotateX(5deg)'
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-amber-500/20" />
                    
                    {/* Floating Sparkles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-amber-400 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Reflection Effect */}
                  <div className="absolute -bottom-20 left-0 right-0 h-20 bg-gradient-to-t from-amber-500/10 to-transparent rounded-3xl blur-xl opacity-50" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </motion.section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl" />
        </div>
        
        <div className="mx-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-6"
            >
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-amber-700 text-sm font-medium uppercase tracking-wider">
                Curated Collections
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-gray-800 via-amber-700 to-orange-600 bg-clip-text text-transparent">
                Shop By Category
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Discover the perfect piece for every moment of your story
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <Link 
                  href={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
                  className="relative aspect-square cursor-pointer group rounded-2xl overflow-hidden block bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 transition-colors duration-500" />
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/50 rounded-2xl transition-colors duration-500" />
                  
                  {/* Floating Sparkle */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Link>
                <motion.h3 
                  whileHover={{ scale: 1.05 }}
                  className="text-lg font-semibold text-gray-800 mt-4 group-hover:text-amber-600 transition-colors duration-300"
                >
                  {category.name}
                </motion.h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Design Section */}
      <section className="py-20 bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-2xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 text-amber-800 px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wider shadow-lg">
                  Unique by Design ✨
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-gray-800 via-amber-700 to-orange-600 bg-clip-text text-transparent">
                  At Scottsdale & Diamond Company,
                </span>
                <span className="block text-gray-600 text-2xl sm:text-3xl mt-2">what kind of life will this belong to?</span>
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-6 text-lg text-gray-600 leading-relaxed"
              >
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Our designs are more than settings and stones — they're moments made tangible. 
                  Minimal yet timeless, each creation is sketched with intention, crafted with precision, 
                  and finished to feel like it's always been yours.
                </motion.p>
                
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  From the curve of a ring to the polish of a clasp, subtle details set our pieces apart — 
                  elegant enough for milestone celebrations, effortless enough for golden-hour dinners, 
                  unforgettable enough for every day in between.
                </motion.p>
                
                <motion.p 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-gray-800 font-medium text-xl"
                >
                  Because true luxury isn't loud. It's lasting. And it's uniquely yours.
                </motion.p>
              </motion.div>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
              >
                <Link href="/jewelry">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
                  >
                    Explore Collection
                  </motion.button>
                </Link>
                <Link href="/boutique">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                  >
                    Custom Design
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full opacity-60 blur-sm z-10"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full opacity-50 blur-sm z-10"
              />
              
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-amber-200/50"
              >
                <Image
                  src="/Home2.png"
                  alt="Artisan crafting jewelry"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent"></div>
                
                {/* Sparkle Effects */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-400 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Reflection Effect */}
              <div className="absolute -bottom-10 left-4 right-4 h-10 bg-gradient-to-t from-amber-200/20 to-transparent rounded-3xl blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <NewArrival />
      <TrustSection />



      {/* Customer Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50/30 via-white to-orange-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-orange-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-6"
            >
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-amber-700 text-sm font-medium uppercase tracking-wider">
                Customer Stories
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-800 via-amber-700 to-orange-600 bg-clip-text text-transparent">
                What Our Customers Say
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Real stories from our jewelry lovers around the world 
            </motion.p>
          </motion.div>

          <div className="relative">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex space-x-6"
            >
              {[
                {
                  name: "Sarah Johnson",
                  location: "New York, NY",
                  rating: 5,
                  review: "Absolutely stunning custom engagement ring! The team brought my vision to life perfectly. The quality is exceptional and the service was outstanding. 💍",
                  product: "Custom Engagement Ring",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
                  verified: true
                },
                {
                  name: "Michael Chen",
                  location: "Los Angeles, CA",
                  rating: 5,
                  review: "Best jewelry shopping experience ever! The staff was knowledgeable and patient. My wife absolutely loves her anniversary necklace. ✨",
                  product: "Diamond Necklace",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                  verified: true
                },
                {
                  name: "Emma Rodriguez",
                  location: "Chicago, IL",
                  rating: 5,
                  review: "The custom design process was amazing! They listened to every detail and created the perfect piece. I get compliments every day! 🌟",
                  product: "Custom Bracelet",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
                  verified: true
                },
                {
                  name: "David Wilson",
                  location: "Miami, FL",
                  rating: 5,
                  review: "Top-notch quality and service. The watch I purchased is absolutely gorgeous and arrived exactly as described. Highly recommend! ⌚",
                  product: "Luxury Watch",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
                  verified: true
                },
                {
                  name: "Lisa Park",
                  location: "Seattle, WA",
                  rating: 5,
                  review: "Incredible craftsmanship and attention to detail. The earrings are absolutely gorgeous and the customer service was exceptional throughout. 👂",
                  product: "Diamond Earrings",
                  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
                  verified: true
                }
              ].concat([
                {
                  name: "Sarah Johnson",
                  location: "New York, NY",
                  rating: 5,
                  review: "Absolutely stunning custom engagement ring! The team brought my vision to life perfectly. The quality is exceptional and the service was outstanding. 💍",
                  product: "Custom Engagement Ring",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
                  verified: true
                },
                {
                  name: "Michael Chen",
                  location: "Los Angeles, CA",
                  rating: 5,
                  review: "Best jewelry shopping experience ever! The staff was knowledgeable and patient. My wife absolutely loves her anniversary necklace. ✨",
                  product: "Diamond Necklace",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                  verified: true
                }
              ]).map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -15, scale: 1.03, rotateY: 5 }}
                  transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
                  className="bg-white/80 backdrop-blur-xl border border-amber-200/50 rounded-3xl p-8 min-w-[380px] max-w-[380px] shadow-2xl hover:shadow-amber-200/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/20 to-amber-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Sparkles */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ scale: [0, 1, 0], rotate: [0, -180, -360] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex text-yellow-400 text-xl">
                        {[...Array(review.rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 + (index % 5) * 0.2 }}
                          >
                            ⭐
                          </motion.span>
                        ))}
                      </div>
                      {review.verified && (
                        <span className="text-xs text-gray-800 font-bold bg-gray-100 px-3 py-1 rounded-full border border-gray-300">
                          ✓ VERIFIED
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                      "{review.review}"
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Image
                          src={review.image}
                          alt={review.name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover border-3 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg">{review.name}</h4>
                        <p className="text-gray-500 text-sm">{review.location}</p>
                        <p className="text-gray-800 text-sm font-medium mt-1">{review.product}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </section>
      <Footer />      
    </div>
  )
}