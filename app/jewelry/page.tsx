'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, X, Heart, ShoppingCart, Eye, Star, ChevronDown, ChevronUp, XCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import { subcategories, materials, colors, sortOptions, priceRanges } from '../data/jewelryData'

export default function JewelryPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedType, setSelectedType] = useState('all')
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(['all'])
  const [selectedColor, setSelectedColor] = useState('all')
  const [selectedSubcategory, setSelectedSubcategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { requireAuth } = useAuth()
  const router = useRouter()

  const openProductModal = useCallback((product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
  }, [])

  const closeProductModal = useCallback(() => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset' // Re-enable scrolling
  }, [])

  const nextImage = useCallback((e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => 
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    )
  }, [selectedProduct])

  const prevImage = useCallback((e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => 
      prev === 0 ? (selectedProduct?.images.length || 1) - 1 : prev - 1
    )
  }, [selectedProduct])

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isModalOpen && e.target.classList.contains('modal-overlay')) {
        closeProductModal()
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isModalOpen, closeProductModal])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      if (!res.ok) {
        throw new Error('Failed to fetch products')
      }
      const data = await res.json()
      // Ensure all required fields are present
      const processedProducts = data.map(product => ({
        _id: product._id,
        name: product.name || 'Unnamed Product',
        description: product.description || '',
        price: product.price || 0,
        category: product.category || 'uncategorized',
        images: product.images || ['/placeholder-jewelry.jpg'],
        stock: product.stock || 0,
        rating: product.rating || 0,
        status: product.status || 'active',
        createdAt: product.createdAt || new Date().toISOString()
      }))
      setProducts(processedProducts)
    } catch (error) {
      console.error('Error fetching products:', error)
      // Set empty array to prevent errors
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  const filteredItems = products.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase()
    const priceMatch = item.price >= selectedPriceRange.min && item.price <= selectedPriceRange.max
    
    return categoryMatch && priceMatch && item.status === 'active'
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">FOR EVERY YOU</h1>
        <p className="text-gray-600 text-base sm:text-lg">Discover jewelry that matches your style</p>
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
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            All Jewelry
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('necklaces')}
            className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all ${
              selectedCategory === 'necklaces'
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
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
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Earrings
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('bracelets')}
            className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all ${
              selectedCategory === 'bracelets'
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
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
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-300 lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>
            
            {/* Material */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3">Material</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <label key={material} className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
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
                      className="w-4 h-4 text-gray-800 bg-white border-gray-300 rounded focus:ring-gray-800 focus:ring-2"
                    />
                    <span className="text-sm text-gray-600">
                      {material.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <motion.button
                    key={range.label}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedPriceRange(range)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedPriceRange.label === range.label
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
              className="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Clear All Filters
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
            <span className="text-gray-800 font-medium text-lg">
              {filteredItems.length} items found
            </span>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
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
          {loading ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading products...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white rounded-lg p-12 shadow-sm border border-gray-300 max-w-md mx-auto">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No Jewelry Found</h3>
                <p className="text-gray-600 mb-6">No jewelry matches your current selection. Try adjusting your filters.</p>
              </div>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8"
            >
            {filteredItems.map((item, index) => (
              <div 
                key={item._id}
                onClick={() => openProductModal(item)}
                className="cursor-pointer"
              >
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 -5px 15px rgba(0, 0, 0, 0.05)',
                  transition: { duration: 0.4 }
                }}
                className="bg-white rounded-3xl shadow-lg transition-all duration-400 overflow-hidden cursor-pointer group border border-gray-200 hover:border-gray-300"
                style={{
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                }}
              >

              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-t-3xl">
                <Image
                  src={item.images?.[0] || '/placeholder-jewelry.jpg'}
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
                    if (isInWishlist(item._id)) {
                      removeFromWishlist(item._id)
                    } else {
                      addToWishlist({
                        id: item._id,
                        name: item.name,
                        price: `$${item.price}`,
                        image: item.images?.[0],
                        category: item.category
                      })
                    }
                  }}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all shadow-lg backdrop-blur-sm ${
                    isInWishlist(item._id) 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white/90 text-gray-600 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Heart className={isInWishlist(item._id) ? 'fill-current' : ''} size={18} />
                </motion.button>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                
                {/* Stock Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg border border-gray-300">
                  <span className="text-sm font-semibold text-gray-600">
                    {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
                  </span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-1">
                    {item.name || 'Product Name'}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {item.description || 'No description available'}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {item.rating || '0.0'}
                    </span>
                  </div>
                  
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="flex gap-2 mb-3">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium border border-yellow-300">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Price and Status */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-800">
                      ${item.price || '0.00'}
                    </span>
                    <div className="flex items-center text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    )}
    </div>
  </div>
  
  {/* Product Details Modal */}
  <AnimatePresence>
    {isModalOpen && selectedProduct && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 modal-overlay">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        >
          <button 
            onClick={closeProductModal}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden">
              <Image
                src={selectedProduct.images[currentImageIndex] || '/placeholder-jewelry.jpg'}
                alt={selectedProduct.name}
                fill
                className="object-contain p-4"
              />
              
              {selectedProduct.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {selectedProduct.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-gray-800 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {selectedProduct.name}
                </h2>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.floor(selectedProduct.rating || 0)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      ({selectedProduct.rating?.toFixed(1) || '0.0'})
                    </span>
                  </div>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-green-600 font-medium">
                    {selectedProduct.stock > 0 
                      ? `${selectedProduct.stock} in stock` 
                      : 'Out of stock'}
                  </span>
                </div>
              </div>

              <div className="text-3xl font-bold text-gray-900">
                ${selectedProduct.price.toFixed(2)}
              </div>

              <p className="text-gray-600">
                {selectedProduct.description || 'No description available.'}
              </p>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <span className="w-24 text-gray-600">Material:</span>
                  <span className="font-medium">{selectedProduct.material}</span>
                  {selectedProduct.metalPurity && (
                    <span className="ml-2 px-2 py-0.5 bg-gray-100 text-xs rounded-full">
                      {selectedProduct.metalPurity}
                    </span>
                  )}
                </div>
                
                {selectedProduct.gemstone?.type && (
                  <div className="flex items-center">
                    <span className="w-24 text-gray-600">Gemstone:</span>
                    <span className="font-medium">
                      {selectedProduct.gemstone.type}
                      {selectedProduct.gemstone.carat && ` (${selectedProduct.gemstone.carat}ct)`}
                    </span>
                  </div>
                )}
                
                <div className="flex items-center">
                  <span className="w-24 text-gray-600">SKU:</span>
                  <span className="font-mono text-sm bg-gray-50 px-2 py-1 rounded">
                    {selectedProduct.sku}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    if (requireAuth()) return
                    addToCart({
                      id: selectedProduct._id,
                      name: selectedProduct.name,
                      price: selectedProduct.price,
                      image: selectedProduct.images[0],
                      category: selectedProduct.category || 'jewelry'
                    })
                  }}
                  disabled={selectedProduct.stock <= 0}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedProduct.stock > 0
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {selectedProduct.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    if (requireAuth()) return
                    if (isInWishlist(selectedProduct._id)) {
                      removeFromWishlist(selectedProduct._id)
                    } else {
                      addToWishlist({
                        id: selectedProduct._id,
                        name: selectedProduct.name,
                        price: selectedProduct.price,
                        image: selectedProduct.images[0],
                        category: selectedProduct.category
                      })
                    }
                  }}
                  className={`p-3 rounded-lg border transition-colors ${
                    isInWishlist(selectedProduct._id)
                      ? 'text-red-500 border-red-200 bg-red-50'
                      : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                  aria-label={isInWishlist(selectedProduct._id) ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart 
                    className={`w-5 h-5 ${isInWishlist(selectedProduct._id) ? 'fill-current' : ''}`} 
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
      </AnimatePresence>
      <Footer />
    </div>
  )
}