'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, Share2, Instagram, Twitter, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/Footer'

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blogs/${params.id}`, { cache: 'no-store' as any })
        if (!res.ok) throw new Error('Not found')
        const data = await res.json()
        setPost(data)
      } catch (e) {
        setPost(null)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center mt-6">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{borderColor: '#CBAE9B'}}></div>
          <p style={{color: '#6D6157'}}>Loading...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center mt-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
          <Link href="/blog">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium mt-6">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (d?: string) => {
    try { return d ? new Date(d).toLocaleDateString() : '' } catch { return '' }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col pt-20 ">
      <div className="max-w-4xl mx-auto px-6 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 mt-6"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </motion.button>
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-300 mb-6"
        >
          <div className="relative h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="bg-gray-800/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl font-space font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center text-white/80 text-sm">
                <User size={16} className="mr-2" />
                <span className="mr-6">{post.author}</span>
                <Calendar size={16} className="mr-2" />
                <span className="mr-6">{formatDate(post.createdAt)}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium"
                >
                  <Heart size={16} />
                  <span>Like</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium"
                >
                  <Share2 size={16} />
                  <span>Share</span>
                </motion.button>
              </div>

              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 hover:text-gray-800"
                >
                  <Instagram size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 hover:text-gray-800"
                >
                  <Twitter size={18} />
                </motion.button>
              </div>
            </div>

            <div 
              className="text-gray-700 leading-relaxed space-y-6 prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </motion.article>
      </div>
      <Footer />
    </div>
  )
}