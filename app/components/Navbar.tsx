'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Gem, ShoppingCart, Heart, Search, User } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Jewelry', href: '/jewelry' },
  { name: 'About Us', href: '/about' },
  { name: 'Boutique', href: '/boutique' },
  { name: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const { items } = useCart()
  const { items: wishlistItems } = useWishlist()
  const isCategoryPage = pathname.startsWith('/category/')
  const isWishlistOrCartPage = pathname === '/wishlist' || pathname === '/cart'
  const isProductPage = pathname.startsWith('/product/')
  const isJewelryPage = pathname === '/jewelry'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isCategoryPage || isWishlistOrCartPage || isProductPage || isJewelryPage ? 'bg-[#FFFAF3]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left Side - Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Gem className="h-8 w-8 text-[#D4AF37]" />
              <span className="text-2xl font-bold text-[#D4AF37]">
                 Scottsdale Diamond
              </span>
            </motion.div>
          </Link>
          
          {/* Center - Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`text-base font-medium tracking-wide transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1'
                      : isScrolled || isCategoryPage || isWishlistOrCartPage || isProductPage || isJewelryPage
                        ? 'text-[#A89F91] hover:text-[#D4AF37]'
                        : 'text-[#FFFAF3] hover:text-[#D4AF37]'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
          
          {/* Right Side - Modern Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Modern Search */}
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  isScrolled || isCategoryPage || isWishlistOrCartPage || isProductPage || isJewelryPage
                    ? 'bg-[#F5F2EB] border-[#CBAE8E] hover:border-[#D4AF37]' 
                    : 'bg-[#FFFAF3]/10 border-[#FFFAF3]/20 hover:border-[#FFFAF3]/40 backdrop-blur-sm'
                }`}
              >
                <Search className={`h-4 w-4 ${
                  isScrolled || isCategoryPage || isWishlistOrCartPage || isProductPage || isJewelryPage ? 'text-[#A89F91]' : 'text-[#FFFAF3]/70'
                }`} />
                <input
                  type="text"
                  placeholder="Search jewelry..."
                  className={`bg-transparent border-none outline-none text-sm w-40 placeholder:transition-colors ${
                    isScrolled || isCategoryPage || isWishlistOrCartPage || isProductPage || isJewelryPage
                      ? 'text-[#A89F91] placeholder:text-[#A89F91]/60' 
                      : 'text-[#FFFAF3] placeholder:text-[#FFFAF3]/50'
                  }`}
                />
              </motion.div>
            </div>

            {/* Icons */}
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors ${
                isScrolled || isCategoryPage || isWishlistOrCartPage || isProductPage || isJewelryPage ? 'hover:bg-[#F5F2EB]' : 'hover:bg-[#FFFAF3]/10'
              }`}
            >
              <User className={`h-5 w-5 ${
                isScrolled || isCategoryPage || isWishlistOrCartPage || isProductPage || isJewelryPage ? 'text-[#A89F91]' : 'text-[#FFFAF3]'
              }`} />
            </motion.button>
            
            <Link href="/wishlist">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                className={`relative p-2 rounded-full transition-colors ${
                  isScrolled || isCategoryPage || isWishlistOrCartPage || isProductPage || isJewelryPage ? 'hover:bg-[#F5F2EB]' : 'hover:bg-[#FFFAF3]/10'
                }`}
              >
                <Heart className={`h-5 w-5 ${
                  isScrolled || isCategoryPage || isWishlistOrCartPage || isProductPage || isJewelryPage ? 'text-[#A89F91]' : 'text-[#FFFAF3]'
                }`} />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {wishlistItems.length}
                  </span>
                )}
              </motion.button>
            </Link>
            
            <Link href="/cart">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                className={`relative p-2 rounded-full transition-colors ${
                  isScrolled || isCategoryPage || isWishlistOrCartPage || isProductPage || isJewelryPage ? 'hover:bg-[#F5F2EB]' : 'hover:bg-[#FFFAF3]/10'
                }`}
              >
                <ShoppingCart className={`h-5 w-5 ${
                  isScrolled || isCategoryPage || isWishlistOrCartPage || isProductPage || isJewelryPage ? 'text-[#A89F91]' : 'text-[#FFFAF3]'
                }`} />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {items.length}
                  </span>
                )}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}