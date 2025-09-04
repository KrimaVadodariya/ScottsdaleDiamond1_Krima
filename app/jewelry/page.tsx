'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, X, Heart, ShoppingCart, Eye, Star, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { jewelryItems, jewelryCategories, subcategories, materials, colors, sortOptions, priceRanges } from '../data/jewelryData'

export default function JewelryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedType, setSelectedType] = useState('all')
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(['all'])
  const [selectedColor, setSelectedColor] = useState('all')
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { requireAuth } = useAuth()
  const router = useRouter()

  const filteredItems = jewelryItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory
    const typeMatch = selectedType === 'all' || item.category === selectedType
    const materialMatch = selectedMaterials.includes('all') || selectedMaterials.includes(item.material)
    const colorMatch = selectedColor === 'all' || item.color === selectedColor
    const subcategoryMatch = selectedSubcategory === 'all' || item.subcategory === selectedSubcategory
    const priceMatch = item.priceValue >= selectedPriceRange.min && item.priceValue <= selectedPriceRange.max
    
    return categoryMatch && typeMatch && materialMatch && colorMatch && subcategoryMatch && priceMatch
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.priceValue - b.priceValue
      case 'price-high':
        return b.priceValue - a.priceValue
      case 'popular':
        return b.reviews - a.reviews
      case 'rating':
        return b.rating - a.rating
      default:
        return a.id - b.id
    }
  })

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#FFFAF3] via-[#F5F2EB] to-[#CBAE8E]/20">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A89F91] mb-4">FOR EVERY YOU</h1>
        <p className="text-[#A89F91]/70 text-base sm:text-lg">Discover jewelry that matches your style</p>
      </div>

      {/* Category Filters - Horizontal */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#D4AF37] text-[#FFFAF3] shadow-lg'
                : 'bg-[#FFFAF3] text-[#A89F91] hover:bg-[#F5F2EB] border border-[#CBAE8E]/30'
            }`}
          >
            All Jewelry
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('ring')}
            className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all ${
              selectedCategory === 'ring'
                ? 'bg-[#D4AF37] text-[#FFFAF3] shadow-lg'
                : 'bg-[#FFFAF3] text-[#A89F91] hover:bg-[#F5F2EB] border border-[#CBAE8E]/30'
            }`}
          >
            Rings
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('necklace')}
            className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all ${
              selectedCategory === 'necklace'
                ? 'bg-[#D4AF37] text-[#FFFAF3] shadow-lg'
                : 'bg-[#FFFAF3] text-[#A89F91] hover:bg-[#F5F2EB] border border-[#CBAE8E]/30'
            }`}
          >
            Necklaces
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('earrings')}
            className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all ${
              selectedCategory === 'earrings'
                ? 'bg-[#D4AF37] text-[#FFFAF3] shadow-lg'
                : 'bg-[#FFFAF3] text-[#A89F91] hover:bg-[#F5F2EB] border border-[#CBAE8E]/30'
            }`}
          >
            Earrings
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('bracelet')}
            className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all ${
              selectedCategory === 'bracelet'
                ? 'bg-[#D4AF37] text-[#FFFAF3] shadow-lg'
                : 'bg-[#FFFAF3] text-[#A89F91] hover:bg-[#F5F2EB] border border-[#CBAE8E]/30'
            }`}
          >
            Bracelets
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Sidebar Filters */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-80 flex-shrink-0"
        >
          <div className="bg-[#FFFAF3] rounded-2xl p-4 sm:p-6 shadow-lg border border-[#CBAE8E]/30 lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-[#A89F91] mb-6">Filters</h2>
            
            {/* Material */}
            <div className="mb-6">
              <h3 className="font-bold text-[#A89F91] mb-3">Material</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <label key={material} className="flex items-center space-x-2 px-3 py-2 hover:bg-[#F5F2EB] rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(material)}
                      onChange={(e) => {
                        if (material === 'all') {
                          setSelectedMaterials(['all'])
                        } else {
                          if (e.target.checked) {
                            setSelectedMaterials(prev => prev.filter(m => m !== 'all').concat(material))
                          } else {
                            const newMaterials = selectedMaterials.filter(m => m !== material)
                            setSelectedMaterials(newMaterials.length === 0 ? ['all'] : newMaterials)
                          }
                        }
                      }}
                      className="w-4 h-4 text-[#D4AF37] bg-[#FFFAF3] border-[#CBAE8E] rounded focus:ring-[#D4AF37] focus:ring-2"
                    />
                    <span className="text-sm text-[#A89F91]">
                      {material.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-bold text-[#A89F91] mb-3">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <motion.button
                    key={range.label}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedPriceRange(range)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedPriceRange.label === range.label
                        ? 'bg-[#D4AF37] text-[#FFFAF3]'
                        : 'bg-[#F5F2EB] text-[#A89F91] hover:bg-[#CBAE8E]/30'
                    }`}
                  >
                    {range.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                setSelectedCategory('all')
                setSelectedType('all')
                setSelectedMaterials(['all'])
                setSelectedColor('all')
                setSelectedSubcategory('all')
                setSelectedPriceRange(priceRanges[0])
                setSortBy('newest')
              }}
              className="w-full bg-[#CBAE8E] hover:bg-[#D4AF37] text-[#FFFAF3] px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Clear All Filters
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
            <span className="text-[#A89F91] font-medium text-lg">
              {filteredItems.length} items found
            </span>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FFFAF3] border border-[#CBAE8E]/30 rounded-lg px-4 py-2 text-[#A89F91] font-medium focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="popular">Popular</option>
                <option value="rating">Best Seller</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Jewelry Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-[#FFFAF3] rounded-lg p-12 shadow-sm border border-[#CBAE8E]/30 max-w-md mx-auto">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-[#A89F91] mb-4">No Jewelry Found</h3>
                <p className="text-[#A89F91]/70 mb-6">No jewelry matches your current selection. Try adjusting your filters.</p>
              </div>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
            >
            {filteredItems.map((item, index) => (
            <Link href={`/product/${item.id}`} key={item.id}>
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-[#FFFAF3] to-[#F5F2EB] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group border border-[#CBAE8E]/20"
              >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-t-3xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Wishlist Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    if (isInWishlist(item.id)) {
                      removeFromWishlist(item.id)
                    } else {
                      addToWishlist({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        category: item.category
                      })
                    }
                  }}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all shadow-md ${
                    isInWishlist(item.id) 
                      ? 'bg-[#D4AF37] text-[#FFFAF3]' 
                      : 'bg-[#FFFAF3] text-[#A89F91] hover:bg-[#F5F2EB]'
                  }`}
                >
                  <Heart className={isInWishlist(item.id) ? 'fill-current' : ''} size={18} />
                </motion.button>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D4AF37] text-[#FFFAF3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="absolute bottom-4 right-4 bg-[#FFFAF3]/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                  <Star className="text-yellow-400 fill-current" size={14} />
                  <span className="text-sm font-semibold text-[#A89F91]">{item.rating}</span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <div className="mb-4">
                  <h3 className="font-bold text-[#A89F91] text-lg mb-2 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-[#A89F91]/70 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#F5F2EB] text-[#A89F91] text-xs rounded-full font-medium">
                    {item.material.replace('-', ' ')}
                  </span>
                  <span className="px-3 py-1 bg-[#CBAE8E]/30 text-[#A89F91] text-xs rounded-full font-medium">
                    {item.subcategory}
                  </span>
                </div>
                
                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-[#A89F91]">
                    {item.price}
                  </span>
                  <div className="flex items-center text-sm text-[#A89F91]/70">
                    <Star className="text-yellow-400 fill-current mr-1" size={16} />
                    <span className="font-semibold">{item.rating} ({item.reviews})</span>
                  </div>
                </div>

              </div>
              </motion.div>
            </Link>
            ))}
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}