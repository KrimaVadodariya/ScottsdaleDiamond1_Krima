'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Toast from '../../components/Toast'
import ConfirmPopup from '../../components/ConfirmPopup'

export default function ProductsAdmin() {
  const [products, setProducts] = useState([])
  const [toast, setToast] = useState({ isOpen: false, message: '' })
  const [confirmDelete, setConfirmDelete] = useState({ isOpen: false, productId: null })
  const searchParams = useSearchParams()

  useEffect(() => {
    fetchProducts()
    
    const success = searchParams.get('success')
    if (success === 'created') {
      setToast({
        isOpen: true,
        message: 'Product created successfully!'
      })
    } else if (success === 'updated') {
      setToast({
        isOpen: true,
        message: 'Product updated successfully!'
      })
    }
  }, [searchParams])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  const handleDeleteClick = (id) => {
    setConfirmDelete({ isOpen: true, productId: id })
  }

  const confirmDeleteProduct = async () => {
    try {
      const res = await fetch(`/api/products/${confirmDelete.productId}`, { method: 'DELETE' })
      if (res.ok) {
        setToast({
          isOpen: true,
          message: 'Product deleted successfully!'
        })
        fetchProducts()
      } else {
        alert('Failed to delete product')
      }
    } catch (error) {
      console.error('Error deleting product:', error)
      alert('Error deleting product')
    } finally {
      setConfirmDelete({ isOpen: false, productId: null })
    }
  }

  return (
    <div className="w-full">
      <Toast
        isOpen={toast.isOpen}
        onClose={() => setToast({ ...toast, isOpen: false })}
        message={toast.message}
      />
      <ConfirmPopup
        isOpen={confirmDelete.isOpen}
        onClose={() => setConfirmDelete({ isOpen: false, productId: null })}
        onConfirm={confirmDeleteProduct}
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
      />
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold" style={{color: '#2F2F2F'}}>Products Management</h1>
          <Link href="/admin/products/new">
            <button className="flex items-center px-6 py-3 rounded-lg font-semibold" style={{backgroundColor: '#CBAE9B', color: '#FAF8F3'}}>
              <Plus size={20} className="mr-2" />
              Add Product
            </button>
          </Link>
        </div>

        {/* Products Table */}
        <div className="rounded-2xl overflow-hidden shadow-lg" style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px'}}>
          <table className="w-full">
            <thead style={{backgroundColor: '#D4C2A8'}}>
              <tr>
                <th className="px-6 py-4 text-left font-semibold" style={{color: '#2F2F2F'}}>Image</th>
                <th className="px-6 py-4 text-left font-semibold" style={{color: '#2F2F2F'}}>Name</th>
                <th className="px-6 py-4 text-left font-semibold" style={{color: '#2F2F2F'}}>Category</th>
                <th className="px-6 py-4 text-left font-semibold" style={{color: '#2F2F2F'}}>Price</th>
                <th className="px-6 py-4 text-left font-semibold" style={{color: '#2F2F2F'}}>Stock</th>
                <th className="px-6 py-4 text-left font-semibold" style={{color: '#2F2F2F'}}>Status</th>
                <th className="px-6 py-4 text-left font-semibold" style={{color: '#2F2F2F'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id} className="border-b" style={{borderColor: '#D4C2A8'}}>
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden" style={{backgroundColor: '#FAF8F3'}}>
                      {product.images?.[0] ? (
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{color: '#6D6157'}}>No Image</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium" style={{color: '#2F2F2F'}}>{product.name}</td>
                  <td className="px-6 py-4" style={{color: '#6D6157'}}>{product.category}</td>
                  <td className="px-6 py-4 font-bold" style={{color: '#2F2F2F'}}>${product.price}</td>
                  <td className="px-6 py-4" style={{color: '#6D6157'}}>{product.stock || 0}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status || 'active'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-lg" style={{backgroundColor: '#D4C2A8', color: '#2F2F2F'}}>
                        <Eye size={16} />
                      </button>
                      <Link href={`/admin/products/edit/${product._id}`}>
                        <button className="p-2 rounded-lg" style={{backgroundColor: '#CBAE9B', color: '#FAF8F3'}}>
                          <Edit size={16} />
                        </button>
                      </Link>
                      <button 
                        onClick={() => handleDeleteClick(product._id)}
                        className="p-2 rounded-lg" 
                        style={{backgroundColor: '#9C7E6A', color: '#FAF8F3'}}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {products.length === 0 && (
            <div className="text-center py-12">
              <p style={{color: '#6D6157'}}>No products found. Add your first product!</p>
            </div>
          )}
        </div>
    </div>
  )
}