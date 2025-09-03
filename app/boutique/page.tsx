'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Mail, MessageSquare, Gem, Star, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Footer from '../components/Footer'

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
]

export default function BoutiquePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: new Date(),
    time: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Booking request submitted! We\'ll contact you soon.')
    setIsSubmitting(false)
    setFormData({
      name: '',
      email: '',
      date: new Date(),
      time: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen flex flex-col pt-19">
      <div className=" flex-1">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-96 flex items-center relative mb-16"
        >
          <div className="absolute inset-0 rounded-3xl mx-6 overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-yellow-800/50 to-yellow-900/60" />
          </div>
          
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center px-6 w-full flex items-center justify-center"
          >
            <div>
              <div className="flex items-center justify-center mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-20" />
                <span className="mx-4 text-3xl">💎</span>
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-20" />
              </div>
              
              <h1 className="text-6xl font-space font-bold text-yellow-400 mb-4">
                Personal Styling
              </h1>
              
              <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                Book a one-on-one consultation with our expert stylists
              </p>
              
              <div className="flex items-center justify-center mt-6">
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-32" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 max-w-6xl px-6 mx-auto gap-12">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-yellow-200/50"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Calendar className="mr-3 text-yellow-600" />
              Book Your Session
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 flex items-center font-medium">
                  <User className="mr-2" size={16} />
                  Full Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 flex items-center font-medium">
                  <Mail className="mr-2" size={16} />
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 flex items-center font-medium">
                  <Calendar className="mr-2" size={16} />
                  Preferred Date
                </label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <DatePicker
                    selected={formData.date}
                    onChange={(date) => setFormData({...formData, date: date || new Date()})}
                    minDate={new Date()}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                  />
                </motion.div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 flex items-center font-medium">
                  <Clock className="mr-2" size={16} />
                  Preferred Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData({...formData, time})}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                        formData.time === time
                          ? 'bg-yellow-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                      }`}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 flex items-center font-medium">
                  <MessageSquare className="mr-2" size={16} />
                  Special Requests
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your style preferences, occasion, or any specific pieces you're interested in..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-4 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  'Book My Session ✨'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-yellow-200/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Star className="mr-3 text-yellow-600" />
                What to Expect
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: '👥',
                    title: 'Personal Consultation',
                    desc: 'One-on-one session with our expert stylist'
                  },
                  {
                    icon: '💎',
                    title: 'Curated Selection',
                    desc: 'Handpicked pieces based on your style and preferences'
                  },
                  {
                    icon: '✨',
                    title: 'Styling Tips',
                    desc: 'Professional advice on how to wear and care for your jewelry'
                  },
                  {
                    icon: '🎁',
                    title: 'Exclusive Access',
                    desc: 'First look at new collections and limited editions'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="text-gray-800 font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-8 text-center shadow-lg border border-yellow-200"
            >
              <div className="text-4xl mb-4">🥂</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Premium Experience
              </h3>
              <p className="text-gray-600">
                Complimentary champagne and personalized gift wrapping included
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-space font-bold text-gray-800 mb-4">
              Questions? We're Here to Help! ✨
            </h2>
            <p className="text-xl text-gray-600">
              Can't find a time that works? Need more information? Get in touch!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center"
            >
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full w-fit mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
              <p className="text-sm text-yellow-600">Available Mon-Sat 9AM-7PM</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-fit mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-1">styling@luxejewelry.com</p>
              <p className="text-sm text-green-600">We reply within 2 hours</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50 text-center"
            >
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-1">123 Luxury Ave, NYC</p>
              <p className="text-sm text-purple-600">Walk-ins welcome</p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center space-x-4 mb-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="#"
                className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="#"
                className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="#"
                className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
            <p className="text-gray-600">
              Follow us for styling inspiration and behind-the-scenes content!
            </p>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  )
}