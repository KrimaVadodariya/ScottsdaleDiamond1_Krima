'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCart } from '../../context/CartContext'

const categoryData = {
  'daily-wear': {
    name: 'Daily Wear',
    description: 'Elegant pieces for everyday sophistication',
    items: [
      { id: 1, name: 'Simple Gold Ring', price: '$299', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400' },
      { id: 2, name: 'Pearl Stud Earrings', price: '$199', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400' },
      { id: 3, name: 'Delicate Chain Necklace', price: '$399', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400' }
    ]
  },
  'office-wear': {
    name: 'Office Wear',
    description: 'Professional elegance for the workplace',
    items: [
      { id: 4, name: 'Classic Watch', price: '$599', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400' },
      { id: 5, name: 'Professional Earrings', price: '$249', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400' },
      { id: 6, name: 'Minimalist Bracelet', price: '$179', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400' }
    ]
  },
  'party-wear': {
    name: 'Party Wear',
    description: 'Glamorous pieces for special occasions',
    items: [
      { id: 7, name: 'Statement Necklace', price: '$899', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400' },
      { id: 8, name: 'Diamond Earrings', price: '$1299', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400' },
      { id: 9, name: 'Cocktail Ring', price: '$699', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400' }
    ]
  },
  'bridal-wear': {
    name: 'Bridal Wear',
    description: 'Exquisite pieces for your special day',
    items: [
      { id: 10, name: 'Bridal Necklace Set', price: '$2499', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400' },
      { id: 11, name: 'Wedding Ring', price: '$1899', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400' },
      { id: 12, name: 'Bridal Earrings', price: '$999', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400' }
    ]
  },
  'casual-wear': {
    name: 'Casual Wear',
    description: 'Comfortable style for relaxed moments',
    items: [
      { id: 13, name: 'Casual Hoops', price: '$149', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400' },
      { id: 14, name: 'Layered Necklace', price: '$229', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400' },
      { id: 15, name: 'Charm Bracelet', price: '$189', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400' }
    ]
  }
}

export default function CategoryPage() {
  const params = useParams()
  const { addToCart } = useCart()
  const slug = params.slug as string
  const category = categoryData[slug as keyof typeof categoryData]

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-amber-50 via-yellow-100 to-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </motion.button>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-space font-bold text-gray-800">{category.name}</h1>
            <p className="text-gray-600 mt-2">{category.description}</p>
          </div>
          <div className="w-32"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart size={20} className="text-gray-600" />
                </motion.button>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-2xl font-bold text-yellow-600 mb-4">{item.price}</p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  category: category.name
                })}
                className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow"
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}