'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NewArrival() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data.slice(0, 5))
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">The Latest Spark</h2>
            <p className="text-lg sm:text-xl text-gray-600">Discover our latest collections</p>
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse bg-gray-200 rounded-3xl h-96 w-96"></div>
          </div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return (
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">The Latest Spark</h2>
            <p className="text-lg sm:text-xl text-gray-600">New products coming soon...</p>
          </div>
        </div>
      </section>
    )
  }

  const sizes = ['max-w-64 h-80', 'max-w-80 h-96', 'max-w-96 h-[28rem]', 'max-w-80 h-96', 'max-w-64 h-80']
  const textSizes = ['text-3xl', 'text-3xl sm:text-4xl', 'text-4xl sm:text-5xl lg:text-6xl', 'text-3xl sm:text-4xl', 'text-2xl sm:text-3xl']

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">The Latest Spark</h2>
          <p className="text-lg sm:text-xl text-gray-600">Discover our latest collections</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-end justify-center">
          {products.map((product, index) => (
            <Link key={product._id} href={`/jewelry?product=${product._id}`}>
              <div className={`relative w-full ${sizes[index] || sizes[0]} lg:w-${sizes[index]?.split(' ')[1]?.replace('max-w-', '') || '64'} rounded-3xl overflow-hidden group cursor-pointer shadow-2xl shadow-gray-500/20`}>
                <img
                  src={product.images?.[0] || '/placeholder.jpg'}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#A89F91]/80 via-[#A89F91]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-[#FFFAF3]">
                  <h2 className={`${textSizes[index] || textSizes[0]} font-serif italic mb-1`}>{product.name}</h2>
                  <p className="text-sm opacity-90">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}