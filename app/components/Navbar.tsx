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
  { name: 'Shop', href: '/jewelry' },
  { name: 'About Us', href: '/about' },
  { name: 'Boutique', href: '/boutique' },
  { name: 'Journal', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { items } = useCart()
  const { items: wishlistItems } = useWishlist()
  const isCategoryPage = pathname.startsWith('/category/')
  const isWishlistOrCartPage = pathname === '/wishlist' || pathname === '/cart'
  const isProductPage = pathname.startsWith('/product/')
  const isJewelryPage = pathname === '/jewelry'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary-bg/70 backdrop-blur-md shadow-lg transition-all duration-300"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left Side - Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image src="/logo.png" alt="Logo" width={32} height={52} className=" sm:h-11 sm:w-8" />
              <div className="flex flex-col leading-tight">
                <span className="text-base sm:text-xl font-bold text-text-primary tracking-[0.2em] uppercase">
                  SCOTTSDALE
                </span>
                <span className="text-xs sm:text-sm font-bold text-text-secondary tracking-[0.15em] uppercase">
                  DIAMOND COMPANY
                </span>
              </div>
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
                      ? 'text-text-primary border-b-2 border-cta pb-1'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
          
          {/* Icons & Menu */}
          <div className="flex items-center space-x-2">
            <div className="hidden lg:block relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-full border bg-primary-bg/50 border-accent hover:border-cta transition-all duration-300"
              >
                <Search className="h-4 w-4 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm w-32 text-text-secondary placeholder:text-text-secondary/60"
                />
              </motion.div>
            </div>
            
            <Link href="/wishlist">
              <motion.button className="relative p-2 rounded-full hover:bg-secondary-bg">
                <Heart className="h-5 w-5 text-text-secondary" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-cta text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                    {wishlistItems.length}
                  </span>
                )}
              </motion.button>
            </Link>
            
            <Link href="/cart">
              <motion.button className="relative p-2 rounded-full hover:bg-secondary-bg">
                <ShoppingCart className="h-5 w-5 text-text-secondary" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-text-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                    {items.length}
                  </span>
                )}
              </motion.button>
            </Link>
            
            <Link href="/login">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="p-2 rounded-full hover:bg-secondary-bg"
              >
                <User className="h-5 w-5 text-text-secondary" />
              </motion.button>
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-secondary-bg ml-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-text-secondary" /> : <Menu className="h-6 w-6 text-text-secondary" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-primary-bg border-t border-accent py-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <div className={`px-4 py-2 text-base font-medium ${
                    pathname === item.href ? 'text-text-primary' : 'text-text-secondary'
                  }`}>
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}