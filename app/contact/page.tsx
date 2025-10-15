'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F3'}}>
      {/* Hero Section */}
      <section className="py-20" style={{backgroundColor: '#EFE9E3'}}>
        <div className="max-w-4xl mx-auto px-8 pt-10 text-center">
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
            Contact Us
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl leading-relaxed mb-6" 
            style={{color: '#6D6157'}}
          >
            Ready to create something extraordinary? Let's start the conversation.
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

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-light mb-8" style={{color: '#2F2F2F'}}>
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: '#D4C2A8'}}>
                    <Phone size={20} style={{color: '#2F2F2F'}} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{color: '#2F2F2F'}}>Phone</h3>
                    <p style={{color: '#6D6157'}}>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: '#D4C2A8'}}>
                    <Mail size={20} style={{color: '#2F2F2F'}} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{color: '#2F2F2F'}}>Email</h3>
                    <p style={{color: '#6D6157'}}>hello@scottsdaledc.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: '#D4C2A8'}}>
                    <MapPin size={20} style={{color: '#2F2F2F'}} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{color: '#2F2F2F'}}>Address</h3>
                    <p style={{color: '#6D6157'}}>123 Diamond District<br />Scottsdale, AZ 85251</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: '#D4C2A8'}}>
                    <Clock size={20} style={{color: '#2F2F2F'}} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{color: '#2F2F2F'}}>Hours</h3>
                    <p style={{color: '#6D6157'}}>Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM<br />Sun: By Appointment</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 rounded-2xl" 
              style={{backgroundColor: '#EFE9E3'}}
            >
              <h2 className="text-3xl font-light mb-8" style={{color: '#2F2F2F'}}>
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 focus:outline-none focus:border-opacity-100"
                    style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', color: '#2F2F2F'}}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 focus:outline-none focus:border-opacity-100"
                    style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', color: '#2F2F2F'}}
                    required
                  />
                </div>
                
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border-2 focus:outline-none focus:border-opacity-100"
                  style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', color: '#2F2F2F'}}
                />
              
                
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg border-2 focus:outline-none focus:border-opacity-100 resize-none"
                  style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', color: '#2F2F2F'}}
                  required
                />
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                  style={{backgroundColor: '#CBAE9B', color: '#FAF8F3'}}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16" style={{backgroundColor: '#EFE9E3'}}>
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light mb-4" style={{color: '#2F2F2F'}}>
              Visit Our Showroom
            </h2>
            <p className="text-lg" style={{color: '#6D6157'}}>
              Experience our jewelry collection in person
            </p>
          </motion.div>
          
          <div className="h-96 rounded-2xl overflow-hidden" style={{backgroundColor: '#D4C2A8'}}>
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-lg" style={{color: '#2F2F2F'}}>Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}