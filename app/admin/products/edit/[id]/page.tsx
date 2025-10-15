'use client'

import { useState, useEffect } from 'react'
import { Save, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import Popup from '../../../../components/Popup'

export default function EditProduct() {
  const router = useRouter()
  const params = useParams()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'NECKLACES',
    images: [],
    stock: '',
    featured: false,
    status: 'active'
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [popup, setPopup] = useState({ isOpen: false, type: 'success', title: '', message: '' })

  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchProduct = async () => {
    try {
      const res = await fetch(`/api/products/${params.id}`)
      if (!res.ok) {
        throw new Error('Failed to fetch product')
      }
      const product = await res.json()
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price?.toString() || '',
        category: product.category || 'NECKLACES',
        images: product.images || [],
        stock: product.stock?.toString() || '',
        featured: product.featured || false,
        status: product.status || 'active'
      })
    } catch (error) {
      console.error('Error fetching product:', error)
      alert('Failed to load product data')
    } finally {
      setIsLoadingData(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const res = await fetch(`/api/products/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock)
        })
      })
      
      if (res.ok) {
        router.push('/admin/products?success=updated')
      } else {
        alert('Failed to update product')
      }
    } catch (error) {
      alert('Error updating product')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoadingData) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{borderColor: '#CBAE9B'}}></div>
          <p style={{color: '#6D6157'}}>Loading product data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <Popup
        isOpen={popup.isOpen}
        onClose={() => setPopup({ ...popup, isOpen: false })}
        type={popup.type}
        title={popup.title}
        message={popup.message}
      />
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link href="/admin/products">
            <button className="p-2 rounded-lg" style={{backgroundColor: '#EFE9E3', color: '#6D6157'}}>
              <ArrowLeft size={20} />
            </button>
          </Link>
          <h1 className="text-3xl font-bold" style={{color: '#2F2F2F'}}>Edit Product</h1>
        </div>
      </div>

      {/* Form */}
      <div className="rounded-2xl p-8 shadow-lg" style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px'}}>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold pb-2 border-b" style={{color: '#2F2F2F', borderColor: '#D4C2A8'}}>Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{color: '#2F2F2F'}}>Product Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F'}}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{color: '#2F2F2F'}}>Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F'}}
                >
                  <option value="NECKLACES">Necklaces</option>
                  <option value="BRACELETS">Bracelets</option>
                  <option value="EARRINGS">Earrings</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{color: '#2F2F2F'}}>Price ($) *</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F'}}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{color: '#2F2F2F'}}>Stock Quantity *</label>
                <input
                  type="number"
                  required
                  value={formData.stock}
                  onChange={(e) => setFormData({...formData, stock: e.target.value})}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F'}}
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold pb-2 border-b" style={{color: '#2F2F2F', borderColor: '#D4C2A8'}}>Product Description</h2>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold" style={{color: '#2F2F2F'}}>Description *</label>
              <textarea
                required
                rows={5}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 resize-none transition-all"
                style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F'}}
              />
            </div>
          </div>

          {/* Product Images */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold pb-2 border-b" style={{color: '#2F2F2F', borderColor: '#D4C2A8'}}>Product Images</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="space-y-3">
                  <label className="block text-sm font-semibold" style={{color: '#2F2F2F'}}>Image {index}</label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0]
                        if (file) {
                          const reader = new FileReader()
                          reader.onload = (event) => {
                            const newImages = [...formData.images]
                            newImages[index - 1] = event.target.result
                            setFormData({...formData, images: newImages})
                          }
                          reader.readAsDataURL(file)
                        }
                      }}
                      className="w-full p-3 rounded-xl focus:outline-none text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:cursor-pointer"
                      style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F'}}
                    />
                  </div>
                  {formData.images[index - 1] && (
                    <div className="w-full h-32 rounded-xl overflow-hidden shadow-md" style={{backgroundColor: '#EFE9E3'}}>
                      <img 
                        src={formData.images[index - 1]} 
                        alt={`Preview ${index}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm mt-4 p-3 rounded-lg" style={{color: '#6D6157', backgroundColor: '#FAF8F3'}}>📸 Upload new images to replace existing ones. Supported formats: JPG, PNG, WEBP</p>
          </div>

          {/* Settings */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold pb-2 border-b" style={{color: '#2F2F2F', borderColor: '#D4C2A8'}}>Product Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all" style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px'}}>
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                    className="w-5 h-5 rounded"
                    style={{accentColor: '#CBAE9B'}}
                  />
                  <div>
                    <span className="font-semibold" style={{color: '#2F2F2F'}}>Featured Product</span>
                    <p className="text-sm" style={{color: '#6D6157'}}>Show on homepage</p>
                  </div>
                </label>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{color: '#2F2F2F'}}>Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F'}}
                >
                  <option value="active">✅ Active</option>
                  <option value="inactive">❌ Inactive</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t" style={{borderColor: '#D4C2A8'}}>
            <Link href="/admin/products">
              <button type="button" className="px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-md" style={{backgroundColor: '#FAF8F3', color: '#6D6157', borderColor: '#D4C2A8', borderWidth: '2px'}}>
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center px-8 py-4 rounded-xl font-semibold disabled:opacity-50 transition-all hover:shadow-lg"
              style={{backgroundColor: '#CBAE9B', color: '#FAF8F3'}}
            >
              <Save size={20} className="mr-2" />
              {isLoading ? 'Updating Product...' : 'Update Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}