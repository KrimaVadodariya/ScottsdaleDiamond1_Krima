'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { jewelryItems, jewelryCategories } from '../../data/jewelryData'
import Footer from '../../components/Footer'

const categoryMapping: { [key: string]: string } = {
  'rings': 'ring',
  'necklaces': 'necklace', 
  'earrings': 'earrings',
  'bracelets': 'bracelet',
  'pendent': 'pendant'
}

export default function CategoryPage() {
  const params = useParams()
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const slug = params.slug as string
  
  // Map slug to category
  const categoryType = categoryMapping[slug]
  const categoryInfo = jewelryCategories.find(cat => cat.slug === categoryType)
  
  // Filter items by category
  const categoryItems = jewelryItems.filter(item => item.category === categoryType)
  
  if (!categoryInfo || categoryItems.length === 0) {
    return (
      <div className="min-h-screen pt-20  bg-gradient-to-br from-amber-50 via-yellow-100 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <Link href="/" className="text-yellow-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    )
  }

  const handleWishlistToggle = (item: any) => {
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
  }

  return (
    <div className="min-h-screen pt-20  bg-gradient-to-br from-amber-50 via-yellow-100 to-orange-50">
      <div className="w-full px-4">
        {/* Header */}
        <div className="mb-8">
         
          <div className="text-center">
            <h1 className="text-4xl font-space font-bold text-gray-800">{categoryInfo.name}</h1>
            <p className="text-gray-600 mt-2">{categoryInfo.description}</p>
            <p className="text-sm text-gray-500 mt-1">{categoryItems.length} items available</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryItems.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {item.category}
                  </span>
                </div>
                
                {/* Wishlist Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleWishlistToggle(item)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md"
                >
                  <Heart 
                    size={18} 
                    className={isInWishlist(item.id) ? "text-red-500 fill-red-500" : "text-gray-600"} 
                  />
                </motion.button>
                
                {/* Rating Badge */}
                <div className="absolute bottom-3 right-3 bg-white rounded-full px-2 py-1 flex items-center space-x-1 shadow-md">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
                
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {item.material}
                  </span>
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                    {item.subcategory}
                  </span>
                </div>
                
                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-800">{item.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{item.rating} ({item.reviews})</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    category: item.category
                  })}
                  disabled={!item.inStock}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                </motion.button>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    
  )
}