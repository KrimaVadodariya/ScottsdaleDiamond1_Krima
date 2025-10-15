'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Toast from '../../components/Toast'
import ConfirmPopup from '../../components/ConfirmPopup'

export default function BlogAdmin() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [toast, setToast] = useState({ isOpen: false, message: '' })
  const [confirmDelete, setConfirmDelete] = useState<{ isOpen: boolean; blogId: string | null }>({ isOpen: false, blogId: null })
  const searchParams = useSearchParams()

  useEffect(() => {
    fetchBlogs()

    const success = searchParams.get('success')
    if (success === 'created') {
      setToast({ isOpen: true, message: 'Blog created successfully!' })
    } else if (success === 'updated') {
      setToast({ isOpen: true, message: 'Blog updated successfully!' })
    }
  }, [searchParams])

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs')
      const data = await res.json()
      setBlogs(data)
    } catch (error) {
      console.error('Error fetching blogs:', error)
    }
  }

  const handleDeleteClick = (id: string) => {
    setConfirmDelete({ isOpen: true, blogId: id })
  }

  const confirmDeleteBlog = async () => {
    try {
      const res = await fetch(`/api/blogs/${confirmDelete.blogId}`, { method: 'DELETE' })
      if (res.ok) {
        setToast({ isOpen: true, message: 'Blog deleted successfully!' })
        fetchBlogs()
      } else {
        alert('Failed to delete blog')
      }
    } catch (error) {
      console.error('Error deleting blog:', error)
      alert('Error deleting blog')
    } finally {
      setConfirmDelete({ isOpen: false, blogId: null })
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
        onClose={() => setConfirmDelete({ isOpen: false, blogId: null })}
        onConfirm={confirmDeleteBlog}
        title="Delete Blog"
        message="Are you sure you want to delete this blog post? This action cannot be undone."
      />

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold" style={{ color: '#2F2F2F' }}>Blog Management</h1>
        <Link href="/admin/blog/new">
          <button className="flex items-center px-6 py-3 rounded-lg font-semibold" style={{ backgroundColor: '#CBAE9B', color: '#FAF8F3' }}>
            <Plus size={20} className="mr-2" />
            Add Blog
          </button>
        </Link>
      </div>

      {/* Blogs Table */}
      <div className="rounded-2xl overflow-hidden shadow-lg" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
        <table className="w-full">
          <thead style={{ backgroundColor: '#D4C2A8' }}>
            <tr>
              <th className="px-6 py-4 text-left font-semibold" style={{ color: '#2F2F2F' }}>Image</th>
              <th className="px-6 py-4 text-left font-semibold" style={{ color: '#2F2F2F' }}>Title</th>
              <th className="px-6 py-4 text-left font-semibold" style={{ color: '#2F2F2F' }}>Category</th>
              <th className="px-6 py-4 text-left font-semibold" style={{ color: '#2F2F2F' }}>Status</th>
              <th className="px-6 py-4 text-left font-semibold" style={{ color: '#2F2F2F' }}>Featured</th>
              <th className="px-6 py-4 text-left font-semibold" style={{ color: '#2F2F2F' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-b" style={{ borderColor: '#D4C2A8' }}>
                <td className="px-6 py-4">
                  <div className="w-16 h-12 rounded-lg overflow-hidden" style={{ backgroundColor: '#FAF8F3' }}>
                    {blog.image ? (
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ color: '#6D6157' }}>No Image</div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 font-medium" style={{ color: '#2F2F2F' }}>{blog.title}</td>
                <td className="px-6 py-4" style={{ color: '#6D6157' }}>{blog.category}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {blog.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${blog.featured ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                    {blog.featured ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    {/* <button
                      onClick={() => window.open(`/blog/${blog._id}`, '_blank', 'noopener,noreferrer')}
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: '#D4C2A8', color: '#2F2F2F' }}
                    >
                      <Eye size={16} />
                    </button> */}
                    <Link href={`/admin/blog/edit/${blog._id}`}>
                      <button className="p-2 rounded-lg" style={{ backgroundColor: '#CBAE9B', color: '#FAF8F3' }}>
                        <Edit size={16} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(blog._id)}
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: '#9C7E6A', color: '#FAF8F3' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {blogs.length === 0 && (
          <div className="text-center py-12">
            <p style={{ color: '#6D6157' }}>No blog posts found. Add your first blog!</p>
          </div>
        )}
      </div>
    </div>
  )
}
