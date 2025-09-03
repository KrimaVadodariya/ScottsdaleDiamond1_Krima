'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Gem, ShoppingCart, Heart, Menu, X, User } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useAuth } from '../context/AuthContext'

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'COLLECTIONS', href: '/jewelry' },
  { name: 'RINGS', href: '/jewelry' },
  { name: 'NECKLACES', href: '/jewelry' },
  { name: 'EARRINGS', href: '/jewelry' },
  { name: 'BRACELETS', href: '/jewelry' },
  { name: 'WATCHES', href: '/jewelry' },
  { name: 'CREATE YOUR OWN', href: '/Boutique' },
  { name: 'BLOG', href: '/blog' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { getTotalItems } = useCart()
  const { getTotalItems: getWishlistItems } = useWishlist()
  const { user, isLoggedIn, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      {/* Top Utility Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              {/* <Link href="/store-locator" className="hover:text-yellow-600"></Link>
              <span>|</span>
              <Link href="/help" className="hover:text-yellow-600"></Link> */}
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/boutique" className="hover:text-yellow-600">Book Appointment</Link>
              <span>|</span>
              <Link href="/rewards" className="hover:text-yellow-600">Find a Store</Link>
              <span>|</span>
              <Link href="/credit-card" className="hover:text-yellow-600">Help Center</Link>
              <span>|</span>
              <Link href="/login" className="hover:text-yellow-600">Sign In / Create Account</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left Side - Empty */}
          <div className="flex-1"></div>
          
          {/* Center - Logo */}
          <div className="flex justify-center">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <Gem className="h-6 w-6 text-yellow-600" />
                <span className="text-2xl font-serif font-light text-gray-800 tracking-wide">
                  Scottsdale Diamond
                </span>
              </motion.div>
            </Link>
          </div>
          
          {/* Right Side - Search and Icons */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="What can we help you find?"
                className="w-72 pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
              />
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Icons */}
            <Link href="/wishlist">
              <motion.button whileHover={{ scale: 1.1 }} className="p-2">
                <Heart className="h-6 w-6 text-gray-700" />
              </motion.button>
            </Link>
            <Link href="/cart">
              <motion.button whileHover={{ scale: 1.1 }} className="p-2">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="border-t border-gray-200">
          <div className="flex justify-center py-4">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      pathname === item.href
                        ? 'text-yellow-600 border-b-2 border-yellow-600 pb-1'
                        : 'text-gray-700 hover:text-yellow-600'
                    }`}
                  >
                    {item.name.toUpperCase()}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}