'use client'

import { motion } from 'framer-motion'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import Footer from '../components/Footer'

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart()

  const subtotal = getTotalPrice()
  const shipping = subtotal > 1000 ? 0 : 50
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

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
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-space font-bold text-[#A89F91]">Shopping Cart</h1>
          <div className="flex items-center space-x-2 text-[#A89F91]">
            <ShoppingBag size={20} />
            <span className="text-sm sm:text-base">{items.length} items</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12 bg-[#FFFAF3]/80 backdrop-blur-sm rounded-2xl border border-[#CBAE8E]/30">
                <ShoppingBag className="mx-auto text-[#D4AF37] mb-4" size={64} />
                <h3 className="text-xl font-semibold text-[#A89F91] mb-2">Your cart is empty</h3>
                <p className="text-[#A89F91]/70">Add some beautiful jewelry to get started!</p>
              </div>
            ) : (
              items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
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
                      <p className="text-sm sm:text-base text-[#A89F91]/70">
                        {item.size && `Size: ${item.size}`}
                        {item.length && `Length: ${item.length}`}
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-[#D4AF37]">
                        {typeof item.price === 'string' ? item.price : `$${(item.price as number).toLocaleString()}`}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between sm:justify-start space-x-4 w-full sm:w-auto">
                      <div className="flex items-center space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-[#F5F2EB] flex items-center justify-center hover:bg-[#CBAE8E]/30"
                        >
                          <Minus size={16} />
                        </motion.button>
                        
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-[#F5F2EB] flex items-center justify-center hover:bg-[#CBAE8E]/30"
                        >
                          <Plus size={16} />
                        </motion.button>
                      </div>
                    
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <Trash2 size={20} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-[#FFFAF3]/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#CBAE8E]/30 h-fit">
            <h2 className="text-2xl font-bold text-[#A89F91] mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-[#A89F91]/70">Subtotal</span>
                <span className="font-semibold">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A89F91]/70">Shipping</span>
                <span className="font-semibold">${shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A89F91]/70">Tax</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-[#D4AF37]">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <Link href={items.length > 0 ? "/checkout" : "#"}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={items.length === 0}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#CBAE8E] text-[#FFFAF3] py-4 rounded-xl font-semibold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Checkout
              </motion.button>
            </Link>
            
            <p className="text-center text-sm text-[#A89F91]/60 mt-4">
              Free shipping on orders over $1,000
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}