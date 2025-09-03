'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Calendar, Mail, Phone, MapPin, MessageCircle, Instagram, Twitter, Facebook, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Footer from './components/Footer'
import TrustSection from './components/TrustSection'

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
  
  {
    id: 5,
    name: 'PENDENT',
    image: '/pendent1.jpg'
  }
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
        className="h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="https://assets.bounceexchange.com/assets/uploads/clients/4821/creatives/6fd81332b04cace4b6bf8ae8e2810b18.jpg"
            alt="Jewelry Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
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
          
           <h1 className="text-5xl pt-6 font-space font-black text-white mb-6 leading-tight text-start">
            NOW TRENDING
            <br />
            {/* <span className="text-yellow-400">JEWELRY</span> */}
          </h1>
          
          <p className="text-2xl text-gray-200 mb-8 font-light">
            Stack it. Layer it. Own it.
          </p> 

          <div className="flex space-x-4">
            <Link href="/jewelry">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4  font-bold text-lg transition-all duration-300"
              >
                Shop Now
                {/* <ArrowRight className="ml-2" size={20} /> */}
              </motion.button>
            </Link>

            <Link href="/boutique">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4  font-bold text-lg transition-all duration-300"
              >
                Customize
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="mx-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-space font-bold text-gray-800 mb-4">
             Shop By Category
            </h2>
            <p className="text-xl text-gray-600">
              Discover the perfect piece for every moment
            </p>
          </motion.div>
          
          <div className="grid grid-cols-5 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="text-center">
                <Link 
                  href={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
                  className="relative aspect-square cursor-pointer group rounded-lg overflow-hidden block"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <h3 className="text-lg font-medium text-gray-800 mt-3">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://media.istockphoto.com/id/1186205506/photo/cut-of-fire.jpg?s=612x612&w=0&k=20&c=TwHxO7IyBMk7dY7_Ng8rwlg24NRmtPu0_y_iVdwLffE="
            alt="Custom Jewelry Design"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 mx-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-sm uppercase tracking-wider mb-4 text-yellow-400">
              CUSTOM DESIGN YOUR SCOTTSDALE DIAMOND JEWELRY
            </p>
            
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              WANT A<br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent font-extrabold text-6xl tracking-wider drop-shadow-lg">
                UNIQUE
              </span><br />
              DESIGN?
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed">
              Get your dream jewelry in just 14 days.<br />
              Schedule your custom ring design<br />
              appointment with us.
            </p>
            
            <Link href="/boutique">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                TALK TO OUR DIAMOND EXPERTS
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Jewelry Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="mx-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-space font-bold text-gray-800 mb-4">
              Our Craftsmanship
            </h2>
            <p className="text-xl text-gray-600">
              Discover the artistry behind every piece
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Main Image */}
            <div className="relative flex items-center justify-center">
              <Image
                src="/Model2.webp"
                alt="Featured Jewelry"
                width={600}
                height={300}
                className="object-cover"
              />
             
            </div>

            {/* Right Side - 2x2 Grid with Hidden Scroll */}
            <div className="h-[700px] overflow-hidden">
              <div 
                className="h-full overflow-y-scroll" 
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      src: "/ring2.jpg",
                      price: "$2,499"
                    },
                    {
                      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoqUKBLzRlSzsrBlCzPYAvT3YEoI5emBGzReALDoD8LIOcN3ku_88IzfXpiZwx2w2OZg&usqp=CAU",
                      title: "Gold Necklace",
                      price: "$1,899"
                    },
                    {
                      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9r6zg2mgRV8E3Eh_8X6vqbVQAjths7d5YKw&s",
                      title: "Pearl Earrings",
                      price: "$899"
                    },
                    {
                      src: "https://nemichandjewels.com/cdn/shop/files/850_6499.jpg?v=1696850594&width=1946",
                      title: "Silver Bracelet",
                      price: "$599"
                    },
                    
                    {
                      src: "data:image/jpeg;base64,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",
                      title: "Custom Ring",
                      price: "$4,999"
                    },
                    
                    {
                      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsZDS9Ax1WKWIoIMNG1R7L1kFUyJpTcJCdA&s",
                      title: "Wedding Band",
                      price: "$799"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-4">
                        <div className="relative aspect-square w-50 h-50 mx-auto mb-3">
                          <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="px-3 pb-3">
                        <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                        <p className="text-yellow-600 font-bold text-lg">{item.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <TrustSection />

      {/* Customer Reviews Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 via-yellow-100/20 to-orange-100/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
            >
            </motion.div>
            <h2 className="text-5xl font-space font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from our jewelry lovers around the world 
            </p>
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
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
                  className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl p-8 min-w-[380px] max-w-[380px] shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
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
                        <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                          ✓ VERIFIED
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
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
                        <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                        <p className="text-gray-500 text-sm">{review.location}</p>
                        <p className="text-amber-600 text-sm font-medium mt-1">{review.product}</p>
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