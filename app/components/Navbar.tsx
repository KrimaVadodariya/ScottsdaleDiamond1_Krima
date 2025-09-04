'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Heart, Search, User, Menu, X } from 'lucide-react'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
      className="fixed top-0 left-0 right-0 z-50 bg-[#FFFAF3]/95 backdrop-blur-md shadow-lg transition-all duration-300"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left Side - Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image src="/logo.png" alt="Logo" width={32} height={32} className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="text-lg sm:text-2xl font-bold text-[#D4AF37]">
                 Scottsdale Diamond
              </span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`text-base font-medium tracking-wide transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1'
                      : 'text-[#A89F91] hover:text-[#D4AF37]'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
          
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="hidden lg:block relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-full border bg-[#F5F2EB] border-[#CBAE8E] hover:border-[#D4AF37] transition-all duration-300"
              >
                <Search className="h-4 w-4 text-[#A89F91]" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm w-32 text-[#A89F91] placeholder:text-[#A89F91]/60"
                />
              </motion.div>
            </div>
            
            <Link href="/wishlist">
              <motion.button className="relative p-2 rounded-full hover:bg-[#F5F2EB]">
                <Heart className="h-5 w-5 text-[#A89F91]" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                    {wishlistItems.length}
                  </span>
                )}
              </motion.button>
            </Link>
            
            <Link href="/cart">
              <motion.button className="relative p-2 rounded-full hover:bg-[#F5F2EB]">
                <ShoppingCart className="h-5 w-5 text-[#A89F91]" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                    {items.length}
                  </span>
                )}
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-[#F5F2EB]"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-[#A89F91]" /> : <Menu className="h-6 w-6 text-[#A89F91]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#FFFAF3] border-t border-[#CBAE8E]/30 py-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <div className={`px-4 py-2 text-base font-medium ${
                    pathname === item.href ? 'text-[#D4AF37]' : 'text-[#A89F91]'
                  }`}>
                    {item.name}
                  </div>
                </Link>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-[#CBAE8E]/30">
                <Link href="/wishlist" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="relative p-2 rounded-full hover:bg-[#F5F2EB]">
                    <Heart className="h-5 w-5 text-[#A89F91]" />
                    {wishlistItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                        {wishlistItems.length}
                      </span>
                    )}
                  </button>
                </Link>
                <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="relative p-2 rounded-full hover:bg-[#F5F2EB]">
                    <ShoppingCart className="h-5 w-5 text-[#A89F91]" />
                    {items.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                        {items.length}
                      </span>
                    )}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}