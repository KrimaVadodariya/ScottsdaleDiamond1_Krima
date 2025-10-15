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
    <div className="min-h-screen flex flex-col pt-19" style={{backgroundColor: '#FAF8F3'}}>
      <div className="max-w flex-1 mb-6">
        {/* Hero Section */}
        <section className="py-20" style={{backgroundColor: '#EFE9E3'}}>
          <div className="w-full px-8 pt-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="h-px w-20" style={{backgroundColor: '#D4C2A8'}} />
              <span className="mx-4 text-3xl">💎</span>
              <div className="h-px w-20" style={{backgroundColor: '#D4C2A8'}} />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-space font-black mb-6" 
              style={{color: '#2F2F2F'}}
            >
              Personal Boutique
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl leading-relaxed mb-6" 
              style={{color: '#6D6157'}}
            >
              Book your appointment for expert jewelry consultation and styling
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <div className="h-px w-32" style={{backgroundColor: '#D4C2A8'}} />
            </motion.div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 max-w-6xl px-4 sm:px-6 mx-auto gap-6 lg:gap-12 mt-12 mb-6">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl"
            style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px'}}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center" style={{color: '#2F2F2F'}}>
              <Calendar className="mr-3" style={{color: '#2F2F2F'}} />
              Book Your Session
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 flex items-center font-medium" style={{color: '#2F2F2F'}}>
                  <User className="mr-2" size={16} style={{color: '#2F2F2F'}} />
                  Full Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors"
                  style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F'}}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block mb-2 flex items-center font-medium" style={{color: '#2F2F2F'}}>
                  <Mail className="mr-2" size={16} style={{color: '#2F2F2F'}} />
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors"
                  style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F'}}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block mb-2 flex items-center font-medium" style={{color: '#2F2F2F'}}>
                  <Calendar className="mr-2" size={16} style={{color: '#2F2F2F'}} />
                  Preferred Date
                </label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <DatePicker
                    selected={formData.date}
                    onChange={(date) => setFormData({...formData, date: date || new Date()})}
                    minDate={new Date()}
                    className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors"
                    style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F'}}
                  />
                </motion.div>
              </div>

              <div>
                <label className="block mb-2 flex items-center font-medium" style={{color: '#2F2F2F'}}>
                  <Clock className="mr-2" size={16} style={{color: '#2F2F2F'}} />
                  Preferred Time
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormData({...formData, time})}
                      className="py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                      style={formData.time === time
                        ? {backgroundColor: '#2F2F2F', color: '#FAF8F3'}
                        : {backgroundColor: '#EFE9E3', color: '#6D6157', borderColor: '#D4C2A8', borderWidth: '1px'}
                      }
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-2 flex items-center font-medium" style={{color: '#2F2F2F'}}>
                  <MessageSquare className="mr-2" size={16} style={{color: '#2F2F2F'}} />
                  Special Requests
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors resize-none"
                  style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F'}}
                  placeholder="Tell us about your style preferences, occasion, or any specific pieces you're interested in..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                style={{backgroundColor: '#CBAE9B', color: '#FAF8F3'}}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-6 h-6 border-2 border-t-transparent rounded-full"
                    style={{borderColor: '#FAF8F3'}}
                  />
                ) : (
                  'Book My Session'
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
            <div className="backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl" style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px'}}>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center" style={{color: '#2F2F2F'}}>
                <Star className="mr-3" style={{color: '#2F2F2F'}} />
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
                      <h4 className="font-semibold mb-1" style={{color: '#2F2F2F'}}>
                        {item.title}
                      </h4>
                      <p className="text-sm" style={{color: '#6D6157'}}>
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
              className="rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-lg"
              style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px'}}
            >
              <div className="text-4xl mb-4">🥂</div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#2F2F2F'}}>
                Premium Experience
              </h3>
              <p style={{color: '#6D6157'}}>
                Complimentary champagne and personalized gift wrapping included
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}