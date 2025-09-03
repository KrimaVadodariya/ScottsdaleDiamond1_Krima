'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, X, Heart, ShoppingCart, Eye, Star } from 'lucide-react'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { jewelryItems, jewelryCategories, subcategories, materials, colors, sortOptions, priceRanges } from '../data/jewelryData'

const heroImages = [
  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
]

export default function JewelryPage() {
  const [showCategories, setShowCategories] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedType, setSelectedType] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [selectedColor, setSelectedColor] = useState('all')
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { requireAuth } = useAuth()
  const router = useRouter()

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setShowCategories(false)
  }

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  if (showCategories) {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[400px] flex items-center relative mb-16"
        >
          <div className="absolute inset-0 rounded-3xl mx-6 overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: `url(${heroImages[0]})`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-yellow-800/50 to-yellow-900/60" />
          </div>
          
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center px-6 w-full flex items-center justify-center"
          >
            <div>
              <h1 className="text-6xl font-space font-bold text-yellow-400 mb-4">
                Choose Category
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                Select a category to explore our collection
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Categories Grid */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            {jewelryCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                onClick={() => handleCategorySelect(category.slug)}
                className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-yellow-400">{category.count} items</p>
                  <p className="text-sm text-gray-300 mt-1">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategorySelect('all')}
              className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl"
            >
              View All Jewelry
            </motion.button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl ">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowCategories(true)}
          className=" bg-white/20 hover:bg-white/30 text-gray-800 px-6 py-3 rounded-full font-medium flex items-center space-x-2"
        >
          <span>← Back to Categories</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[400px] flex items-center relative mb-16"
      >
        <div className="absolute inset-0 rounded-3xl mx-6 overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: `url(${heroImages[0]})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-yellow-800/50 to-yellow-900/60" />
        </div>
        
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-6 w-full flex items-center justify-center"
        >
          <div>
            <h1 className="text-6xl font-space font-bold text-yellow-400 mb-4">
              {selectedCategory === 'all' ? 'All Jewelry' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Discover our exclusive pieces crafted with love and precision
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w mx-auto px-6">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-between items-center mb-8 glass rounded-2xl p-6"
        >
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            {['all', ...jewelryCategories.map(cat => cat.slug)].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all backdrop-blur-sm ${
                  selectedCategory === category
                    ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-600/30'
                    : 'bg-white/40 text-gray-800 hover:bg-white/60 border border-white/30'
                }`}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1) + 's'}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">
              {filteredItems.length} items found
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white/30 hover:bg-white/50 text-gray-800 px-4 py-2 rounded-full"
            >
              <Filter size={16} />
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200/50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
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
                              ? 'bg-yellow-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                          }`}
                        >
                          {option.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Type */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Category</h3>
                    <div className="space-y-2">
                      {['all', ...jewelryCategories.map(cat => cat.slug)].map((type) => (
                        <motion.button
                          key={type}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedType(type)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedType === type
                              ? 'bg-yellow-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                          }`}
                        >
                          {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
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
                              ? 'bg-yellow-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                          }`}
                        >
                          {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
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
                              ? 'bg-yellow-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                          }`}
                        >
                          {material.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
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
                              ? 'bg-yellow-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
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
                              ? 'bg-yellow-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
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
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
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
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-yellow-200/50 max-w-md mx-auto">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Products Available</h3>
              <p className="text-gray-600 mb-6">No jewelry matches your current filters. Try adjusting your search criteria.</p>
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
                className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
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
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
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
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all ${
                    isInWishlist(item.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/80 text-gray-600 hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  <Heart className={isInWishlist(item.id) ? 'fill-current' : ''} size={16} />
                </motion.button>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {item.category.toUpperCase()}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={12} />
                  <span className="text-xs font-medium">{item.rating}</span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex gap-1 mb-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    {item.material.replace('-', ' ')}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">
                    {item.subcategory}
                  </span>
                </div>
                
                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-yellow-600">
                    {item.price}
                  </span>
                  <div className="flex items-center text-xs text-gray-600">
                    <Star className="text-yellow-400 fill-current mr-1" size={14} />
                    <span>{item.rating} ({item.reviews})</span>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
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
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2.5 rounded-lg font-medium transition-colors"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
            ))}
          </motion.div>
        )}

        {/* Enhanced Product Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-2 sm:p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl w-full max-w-4xl max-h-[80vh] my-auto shadow-2xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row h-[70vh]">
                  {/* Enhanced Image Section */}
                  <div className="relative h-64 md:h-full md:w-1/2 bg-gray-200 flex-shrink-0">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Close Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setSelectedItem(null)}
                      className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:bg-white shadow-lg z-10"
                    >
                      <X size={18} />
                    </motion.button>
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {selectedItem.category.toUpperCase()}
                      </span>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xs ${i < Math.floor(selectedItem.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                      ))}
                      <span className="text-xs text-gray-600 ml-1">{selectedItem.rating}</span>
                    </div>
                  </div>
                  
                  {/* Enhanced Details Section */}
                  <div className="flex-1 p-3 md:p-4 overflow-y-auto max-h-[70vh]">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            {selectedItem.name}
                          </h2>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600">
                            <span>SKU: JW{selectedItem.id.toString().padStart(4, '0')}</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="text-green-600 font-medium">Free Shipping</span>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => {
                            if (isInWishlist(selectedItem.id)) {
                              removeFromWishlist(selectedItem.id)
                            } else {
                              addToWishlist({
                                id: selectedItem.id,
                                name: selectedItem.name,
                                price: selectedItem.price,
                                image: selectedItem.image,
                                category: selectedItem.category
                              })
                            }
                          }}
                          className={`p-3 rounded-full transition-all ${
                            isInWishlist(selectedItem.id)
                              ? 'bg-red-500 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                          }`}
                        >
                          <Heart className={isInWishlist(selectedItem.id) ? 'fill-current' : ''} size={20} />
                        </motion.button>
                      </div>
                      
                      {/* Price & Savings */}
                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-3 rounded-xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-2xl font-bold text-yellow-600">{selectedItem.price}</span>
                          <span className="text-base text-gray-500 line-through">$399</span>
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">25% OFF</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Save $100 • Limited time offer</p>
                      </div>
                      
                      {/* Description */}
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">Description</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {selectedItem.description}
                        </p>
                      </div>
                      
                      {/* Specifications */}
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">Specifications</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-1 text-sm">Material</h4>
                            <p className="text-gray-600 text-xs">{selectedItem.material?.replace('-', ' ')}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-1 text-sm">Category</h4>
                            <p className="text-gray-600 text-xs">{selectedItem.category}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-1 text-sm">Occasion</h4>
                            <p className="text-gray-600 text-xs">{selectedItem.subcategory}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-1 text-sm">Rating</h4>
                            <p className="text-gray-600 text-xs">{selectedItem.rating}/5 ({selectedItem.reviews} reviews)</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">Features</h3>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="flex items-center space-x-2 text-xs text-gray-600">
                            <span className="text-green-500">✓</span>
                            <span>Hypoallergenic</span>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-600">
                            <span className="text-green-500">✓</span>
                            <span>Water resistant</span>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-600">
                            <span className="text-green-500">✓</span>
                            <span>Gift box included</span>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-600">
                            <span className="text-green-500">✓</span>
                            <span>30-day returns</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="space-y-2 pt-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            if (!requireAuth()) {
                              router.push('/login')
                              return
                            }
                            addToCart({
                              id: selectedItem.id,
                              name: selectedItem.name,
                              price: selectedItem.price,
                              image: selectedItem.image,
                              category: selectedItem.category
                            })
                            setSelectedItem(null)
                          }}
                          className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                        >
                          <ShoppingCart size={18} />
                          <span>Add to Cart</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}