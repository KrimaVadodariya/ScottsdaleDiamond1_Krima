'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail } from 'lucide-react'
import Image from 'next/image'

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('hasSeenWelcomePopup', 'true')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleClose()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex max-w-4xl w-full h-[600px]">
              <div className="w-1/2 relative">
                <Image
                  src="/welcomepopup.webp"
                  alt="Jewelry"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="w-1/2 p-12 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-500" />
                </button>

                <div className="max-w-sm">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Join Our Email List!
                  </h2>
                  
                  <p className="text-gray-600 mb-8">
                    Be the first to know about beautiful new designs, promotions and so much more!
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors mt-6"
                    >
                      SUBSCRIBE
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Your Privacy is <span className="underline cursor-pointer">Our Policy</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}