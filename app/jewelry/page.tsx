'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, X, Heart, ShoppingCart, Eye, Star } from 'lucide-react'
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
  const [selectedMaterial, setSelectedMaterial] = useState('all')
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
    const materialMatch = selectedMaterial === 'all' || item.material === selectedMaterial
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
    <div className="min-h-screen pt-20 bg-gradient-to-br from-pearl-white via-antique-white to-vintage-cream">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-between items-center mb-8 bg-white rounded-lg shadow-sm border p-6"
        >
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            {['all', ...jewelryCategories.map(cat => cat.slug)].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1) + 's'}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">
              {filteredItems.length} items
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            >
              <Filter size={16} />
              <span>Filters</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Advanced Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {/* Sort */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Sort By</h3>
                    <div className="space-y-2">
                      {sortOptions.map((option) => (
                        <motion.button
                          key={option}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSortBy(option)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            sortBy === option
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {option.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Material */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Material</h3>
                    <div className="space-y-2">
                      {materials.map((material) => (
                        <motion.button
                          key={material}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedMaterial(material)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedMaterial === material
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {material.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Subcategory */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Occasion</h3>
                    <div className="space-y-2">
                      {subcategories.map((subcategory) => (
                        <motion.button
                          key={subcategory}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedSubcategory(subcategory)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedSubcategory === subcategory
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Color */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Color</h3>
                    <div className="space-y-2">
                      {colors.map((color) => (
                        <motion.button
                          key={color}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedColor(color)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedColor === color
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {color.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <motion.button
                          key={range.label}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedPriceRange(range)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedPriceRange.label === range.label
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {range.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => {
                      setSelectedType('all')
                      setSelectedMaterial('all')
                      setSelectedColor('all')
                      setSelectedSubcategory('all')
                      setSelectedPriceRange(priceRanges[0])
                      setSortBy('newest')
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Clear All Filters
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Jewelry Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-lg p-12 shadow-sm border max-w-md mx-auto">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Products Available</h3>
              <p className="text-gray-600 mb-6">No jewelry matches your current filters.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedType('all')
                  setSelectedMaterial('all')
                  setSelectedColor('all')
                  setSelectedSubcategory('all')
                  setSelectedPriceRange(priceRanges[0])
                  setSortBy('newest')
                }}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Clear All Filters
              </motion.button>
            </div>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
            <Link href={`/product/${item.id}`} key={item.id}>
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-vintage-cream to-antique-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
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
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart className={isInWishlist(item.id) ? 'fill-current' : ''} size={18} />
                </motion.button>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                  <Star className="text-yellow-400 fill-current" size={14} />
                  <span className="text-sm font-semibold text-gray-800">{item.rating}</span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full font-medium">
                    {item.material.replace('-', ' ')}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">
                    {item.subcategory}
                  </span>
                </div>
                
                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-gray-800">
                    {item.price}
                  </span>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="text-yellow-400 fill-current mr-1" size={16} />
                    <span className="font-semibold">{item.rating} ({item.reviews})</span>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    if (!requireAuth()) {
                      router.push('/login')
                      return
                    }
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                      category: item.category
                    })
                  }}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Add to Cart
                </motion.button>
              </div>
              </motion.div>
            </Link>
            ))}
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  )
}