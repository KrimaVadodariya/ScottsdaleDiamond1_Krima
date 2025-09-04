'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart, Trash2, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import Footer from '../components/Footer'

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()

  const moveToCart = (item: any) => {
    addToCart(item)
    removeFromWishlist(item.id)
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#FFFAF3] via-[#F5F2EB] to-[#CBAE8E]/20 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#D4AF37]/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#CBAE8E]/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#F5F2EB]/50 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-space font-bold text-[#A89F91]">My Wishlist</h1>
          <div className="flex items-center space-x-2 text-[#A89F91]">
            <Heart size={20} />
            <span className="text-sm sm:text-base">{items.length} items</span>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12 bg-[#FFFAF3]/80 backdrop-blur-sm rounded-2xl border border-[#CBAE8E]/30">
            <Heart className="mx-auto text-[#D4AF37] mb-4" size={64} />
            <h3 className="text-xl font-semibold text-[#A89F91] mb-2">Your wishlist is empty</h3>
            <p className="text-[#A89F91]/70">Add some beautiful jewelry to your wishlist!</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#FFFAF3]/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-[#CBAE8E]/30"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="relative w-full sm:w-24 h-48 sm:h-24 rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 w-full sm:w-auto">
                      <h3 className="text-base sm:text-lg font-semibold text-[#A89F91]">{item.name}</h3>
                      <p className="text-sm sm:text-base text-[#A89F91]/70">{item.category}</p>
                      <p className="text-lg sm:text-xl font-bold text-[#D4AF37]">{item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between sm:justify-start space-x-3 w-full sm:w-auto">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => moveToCart(item)}
                        className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center hover:bg-[#CBAE8E] text-[#FFFAF3]"
                      >
                        <ShoppingCart size={16} />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <Trash2 size={20} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {items.length > 0 && (
              <div className="mt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearWishlist}
                  className="bg-[#A89F91] hover:bg-[#CBAE8E] text-[#FFFAF3] px-6 py-2 rounded-lg font-medium"
                >
                  Clear Wishlist
                </motion.button>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}