'use client'

import { useState } from 'react'
import { Save, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NewBlog() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: '',
    category: 'Style Guide',
    readTime: '',
    status: 'draft',
    featured: false
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        router.push('/admin/blog?success=created')
      } else {
        const data = await res.json()
        alert(data.error || 'Failed to create blog')
      }
    } catch (error) {
      alert('Error creating blog')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link href="/admin/blog">
            <button className="p-2 rounded-lg" style={{ backgroundColor: '#EFE9E3', color: '#6D6157' }}>
              <ArrowLeft size={20} />
            </button>
          </Link>
          <h1 className="text-3xl font-bold" style={{ color: '#2F2F2F' }}>Add New Blog</h1>
        </div>
      </div>

      {/* Form */}
      <div className="rounded-2xl p-8 shadow-lg" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold pb-2 border-b" style={{ color: '#2F2F2F', borderColor: '#D4C2A8' }}>Basic Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{ color: '#2F2F2F' }}>Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F' }}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{ color: '#2F2F2F' }}>Author *</label>
                <input
                  type="text"
                  required
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F' }}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{ color: '#2F2F2F' }}>Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F' }}
                >
                  <option>Style Guide</option>
                  <option>Sustainability</option>
                  <option>Care Tips</option>
                  <option>Trends</option>
                  <option>Education</option>
                  <option>Bridal</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{ color: '#2F2F2F' }}>Read Time *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., 5 min read"
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F' }}
                />
              </div>
            </div>
          </div>

          {/* Media & Excerpt */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold pb-2 border-b" style={{ color: '#2F2F2F', borderColor: '#D4C2A8' }}>Media & Excerpt</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{ color: '#2F2F2F' }}>Cover Image URL *</label>
                <input
                  type="url"
                  required
                  placeholder="https://..."
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F' }}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold" style={{ color: '#2F2F2F' }}>Status *</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F' }}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-semibold" style={{ color: '#2F2F2F' }}>Excerpt *</label>
                <textarea
                  required
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 resize-none transition-all"
                  style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F' }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold pb-2 border-b" style={{ color: '#2F2F2F', borderColor: '#D4C2A8' }}>Content</h2>
            <p className="text-sm p-3 rounded-lg" style={{ color: '#6D6157', backgroundColor: '#FAF8F3' }}>
              You can paste HTML content. It will render on the blog post page using dangerouslySetInnerHTML.
            </p>
            <textarea
              required
              rows={12}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full p-4 rounded-xl focus:outline-none focus:ring-2 resize-none transition-all"
              style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F' }}
            />
          </div>

          {/* Settings */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold pb-2 border-b" style={{ color: '#2F2F2F', borderColor: '#D4C2A8' }}>Settings</h2>
            <label className="flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all" style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px' }}>
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-5 h-5 rounded"
                style={{ accentColor: '#CBAE9B' }}
              />
              <div>
                <span className="font-semibold" style={{ color: '#2F2F2F' }}>Featured Post</span>
                <p className="text-sm" style={{ color: '#6D6157' }}>Showcase this post on the blog page</p>
              </div>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t" style={{ borderColor: '#D4C2A8' }}>
            <Link href="/admin/blog">
              <button type="button" className="px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-md" style={{ backgroundColor: '#FAF8F3', color: '#6D6157', borderColor: '#D4C2A8', borderWidth: '2px' }}>
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center px-8 py-4 rounded-xl font-semibold disabled:opacity-50 transition-all hover:shadow-lg"
              style={{ backgroundColor: '#CBAE9B', color: '#FAF8F3' }}
            >
              <Save size={20} className="mr-2" />
              {isLoading ? 'Saving Blog...' : 'Save Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
