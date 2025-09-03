'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function AboutPage() {
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
            src="/aboutbackground.jpg"
            alt="About Us Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-4xl mx-auto px-8"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-[#D4AF37] mb-6 font-light tracking-[0.3em] uppercase"
          >
            Proudly AAPI Female Founded & Led
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl font-light text-white fw-700 mb-8 leading-tight tracking-wide"
          >
            We are <span className="italic">Scottsdale Diamond</span>™
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto"
          >
            Crafting a legacy of modern luxury.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Company Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-extralight text-[#A89F91] mb-6 tracking-wide">Our Heritage</h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
          </motion.div>
            {/* <h2 className="text-4xl font-light text-[#A89F91] mb-8">Our Heritage</h2> */}
            <p className="text-xl text-[#A89F91] leading-relaxed">
              For over three decades, Scottsdale Diamond has been at the forefront of luxury jewelry design. 
              What began as a passion for exceptional craftsmanship has evolved into a legacy of creating 
              timeless pieces that celebrate life's most precious moments.
            </p>
            <p className="text-lg text-[#A89F91] leading-relaxed">
              Every diamond we select, every setting we craft, and every design we create is a testament 
              to our unwavering commitment to excellence and our dedication to making your dreams a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-2">
        <div className="grid md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-screen"
          >
            <Image
              src="/about1.jpg"
              alt="Jewelry design sketch"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-screen"
          >
            <Image
              src="/about2.jpg"
              alt="Jewelry craftsmanship"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#F5F2EB]">
        {/* Top Text */}
        <div className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto px-8 space-y-8"
          >
            <p className="text-xl text-[#A89F91] leading-relaxed">
              "We create jewelry that lasts for generations—crafted with uncompromising quality, precious materials, and timeless design. Each piece is more than an accessory; it’s a story waiting to be told, becoming more meaningful with every wear."            </p>
            
            <p className="text-xl text-[#A89F91] leading-relaxed">
              "More than adornment, our jewelry is an expression of identity—crafted with precision, authenticity, and soul. Designed to live with you daily, each piece evolves into a timeless keepsake of your journey."            </p>
          </motion.div>
        </div>

      </section>

      {/* Design Section */}
      <section className="grid grid-cols-2 min-h-screen">
        {/* Left - Image */}
        <div className=" bg-[#F5F2EB] relative  ">
          <div className=" relative h-full">
            <Image
              src="/about3.webp"
              alt="Jewelry craftsmanship"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        
        {/* Right - Text content */}
        <div className="bg-[#F5F2EB] flex items-center justify-center px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-xs"
          >
            <h3 className="text-4xl font-light text-gray-800 italic mb-6 leading-tight">
              Thoughtful<br/>
              Design,<br/>
              Conscious<br/>
              Expansion
            </h3>
            
            <p className="text-xl text-[#A89F91] leading-relaxed">
              In an opaque industry veiled with steep markups and unfavorable manufacturing practices, Kinn stands apart. Guided by our ethos, we act as stewards of our planet, creating jewelry with a conscience for the ever-evolving needs of our modern world. We use recycled 14k gold and ethically sourced gemstones, ensuring each piece meets our high standards of quality and supports responsible production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-br from-[#FFFAF3] to-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-extralight text-[#A89F91] mb-6 tracking-wide">How It Works</h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {[
              {
                step: "01",
                title: "Let's Chat",
                description: "Schedule a one-on-one design appointment in person or virtually. Tell us what you love, what inspires you, or what you've been dreaming of.",
                image: "/about4.webp"
              },
              {
                step: "02",
                title: "We Sketch & Source",
                description: "Our team will create a custom design and select exceptional diamonds or gemstones that align with your aesthetic, budget, and timeline.",
                image: "/about5.jpg"
              },
              {
                step: "03",
                title: "You Approve the Magic",
                description: "We'll share a 3D render or sketch for approval. Once it feels perfect, we bring it to life in our studio.",
                image: "/about6.jpg"
              },
              {
                step: "04",
                title: "Your Piece, Delivered",
                description: "Crafted with care and precision, your one-of-a-kind piece arrives ready to wear, gift, or celebrate.",
                image: "/about7.webp"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className="relative h-64 mb-8 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="relative pt-6">
                  <div className="absolute -top-2 left-0 w-12 h-12 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-light text-[#A89F91] mb-4 tracking-wide ml-16">{item.title}</h3>
                  <p className="text-[#A89F91] leading-relaxed opacity-80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <h3 className="text-4xl font-extralight text-[#A89F91] mb-6 tracking-wide">Start Your Custom Journey</h3>
            <p className="text-xl text-[#A89F91] leading-relaxed mb-10 opacity-90">
              A custom piece from Scottsdale Diamond Company isn't just a design—it's a legacy in the making.<br/>
              Let's begin something unforgettable.
            </p>
            <Link href="/boutique">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-12 py-4 rounded-full font-medium text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
              >
                Talk to a Diamond Expert
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-xl"
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-extralight text-[#A89F91] mb-6 tracking-wide">What Drives Us </h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Quality",
                description: "We source only the finest materials and employ time-honored techniques to ensure each piece meets our exacting standards."
              },
              {
                title: "Authenticity",
                description: "Every design tells a story, reflecting genuine craftsmanship and the unique vision of our artisans."
              },
              {
                title: "Legacy",
                description: "We create jewelry meant to be treasured for generations, becoming part of your family's story."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-2xl font-light text-[#D4AF37] mb-4">{value.title}</h3>
                <p className="text-lg text-[#A89F91] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Founder Section */}
      <section className="grid grid-cols-2 min-h-screen">
        {/* Left - Text content */}
        <div className="bg-white flex items-center justify-center px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-md"
          >
            <h2 className="text-4xl font-light text-[#A89F91] italic mb-6 leading-tight">
              Meet Our<br/>
              Founder
            </h2>
            
            <h3 className="text-2xl font-medium text-[#D4AF37] mb-4">Maria Santos</h3>
            
            <p className="text-base text-[#A89F91] leading-relaxed mb-6">
              With over 35 years of experience in luxury jewelry design, Maria founded Scottsdale Diamond with a vision to create timeless pieces that celebrate life's most precious moments.
            </p>
            
            <p className="text-base text-[#A89F91] leading-relaxed">
              Her passion for exceptional craftsmanship and dedication to quality has made Scottsdale Diamond a trusted name in luxury jewelry, serving discerning clients who appreciate artistry and elegance.
            </p>
          </motion.div>
        </div>
        
        {/* Right - Image */}
        <div className="relative p-16">
          <div className="relative h-full">
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=face"
              alt="Maria Santos - Founder"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

<Footer />
    </div>
  )
}