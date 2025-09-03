'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Calendar, Mail, Phone, MapPin, MessageCircle, Instagram, Twitter, Facebook, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Footer from './components/Footer'

const categories = [
  {
    id: 1,
    name: 'RINGS',
    image: 'https://www.davidyurman.com/on/demandware.static/-/Library-Sites-DavidYurmanSharedLibrary/default/dw8fb96691/images/2025/7-14-Amulets/Womens-LP/2025_Summer4_WLP_Promo4_1_Desktop.jpg'
  },
  {
    id: 2,
    name: 'NECKLACES',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQ1FwzqazZbbBtHRePxcDbrD_4AtIhno6x5gC2u9BTbfsvDviL_nOSaLaA-JTPcW-hkE&usqp=CAU'
  },
  {
    id: 3,
    name: 'EARRINGS',
    image: 'https://i.etsystatic.com/12190216/r/il/cc6d0a/3491076281/il_570xN.3491076281_dpvj.jpg'
  },
  {
    id: 4,
    name: 'BRACELETS',
    image: 'https://m.media-amazon.com/images/I/8105Yyl1IGL._UY350_.jpg'
  },
  {
    id: 5,
    name: 'WATCHES',
    image: 'https://jokerandwitch.com/cdn/shop/products/x-min_1080x.jpg?v=1591790629'
  },
  {
    id: 6,
    name: 'PERSONALIZED',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/VO/MJ/GD/110514042/screenshot-20220602-192310-meesho-500x500.jpg'
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
    <div className="min-h-screen mx-6 mt-12">
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
          
          <div className="grid grid-cols-6 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="text-center">
                <Link 
                  href={`/jewelry?category=${category.name.toLowerCase().replace(' ', '-')}`}
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-amber-50">
        <div className="mx-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <MessageCircle className="text-yellow-600" size={50} />
            </motion.div>
            <h2 className="text-5xl font-space font-bold text-gray-800 mb-4">
              Let's Connect 
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to find your perfect piece? We're here to help make your jewelry dreams come true!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.6 }}
                className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-yellow-200/50 hover:shadow-xl hover:border-yellow-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@luxejewelry.com</p>
                    <p className="text-sm text-yellow-600 group-hover:text-yellow-700">We reply within 24 hours!</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-yellow-200/50 hover:shadow-xl hover:border-yellow-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-green-600 group-hover:text-green-700">Mon-Sat 9AM-7PM EST</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-yellow-200/50 hover:shadow-xl hover:border-yellow-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Visit Our Boutique</h3>
                    <p className="text-gray-600">123 Luxury Ave, NYC 10001</p>
                    <p className="text-sm text-purple-600 group-hover:text-purple-700">Private appointments available</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-200/50 p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Quick Message 💌
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your dream jewelry piece..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300 resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2" size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}