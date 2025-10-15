'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Share2, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [visiblePosts, setVisiblePosts] = useState(6)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs?status=published', { cache: 'no-store' as any })
        const data = await res.json()
        setPosts(Array.isArray(data) ? data : [])
      } catch (e) {
        console.error('Failed to load blogs', e)
      }
    }
    fetchBlogs()
  }, [])

  const categories = useMemo(() => {
    const set = new Set<string>(['All'])
    posts.forEach(p => p.category && set.add(p.category))
    return Array.from(set)
  }, [posts])

  const filteredPosts = posts.filter(post => selectedCategory === 'All' || post.category === selectedCategory)

  const loadMore = () => setVisiblePosts(prev => prev + 3)

  const formatDate = (d?: string) => {
    try { return d ? new Date(d).toLocaleDateString() : '' } catch { return '' }
  }

  return (
    <div className="min-h-screen flex flex-col pt-19" style={{backgroundColor: '#FAF8F3'}}>
      <div className="max-w  flex-1 mb-6">
        {/* Hero Section */}
        <section className="py-20" style={{backgroundColor: '#EFE9E3'}}>
          <div className="max-w-4xl mx-auto px-8 pt-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="h-px w-20" style={{backgroundColor: '#D4C2A8'}} />
              <span className="mx-4 text-3xl">💎</span>
              <div className="h-px w-20" style={{backgroundColor: '#D4C2A8'}} />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-space font-black mb-6" 
              style={{color: '#2F2F2F'}}
            >
              Jewelry Journal
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl leading-relaxed mb-6" 
              style={{color: '#6D6157'}}
            >
              Stories, tips, and inspiration from the world of fine jewelry
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <div className="h-px w-32" style={{backgroundColor: '#D4C2A8'}} />
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-12 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-3 rounded-full font-medium transition-all backdrop-blur-sm"
              style={selectedCategory === category 
                ? {backgroundColor: '#2F2F2F', color: '#FAF8F3'} 
                : {backgroundColor: '#EFE9E3', color: '#6D6157', borderColor: '#D4C2A8', borderWidth: '1px'}
              }
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          layout
          className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mx-4 sm:mx-6 lg:mx-9"
        >
          {filteredPosts.slice(0, visiblePosts).map((post, index) => (
            <motion.article
              key={post._id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="backdrop-blur-sm rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
              style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px'}}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium" style={{backgroundColor: '#2F2F2F', color: '#FAF8F3'}}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center text-sm mb-3" style={{color: '#6D6157'}}>
                  <User size={14} className="mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar size={14} className="mr-2" />
                  <span className="mr-4">{formatDate(post.createdAt)}</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold mb-3 transition-colors" style={{color: '#2F2F2F'}}>
                  {post.title}
                </h2>

                <p className="text-sm sm:text-base mb-4 line-clamp-3" style={{color: '#6D6157'}}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <Link href={`/blog/${post._id}`}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center font-medium transition-colors"
                      style={{color: '#CBAE9B'}}
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </motion.button>
                  </Link>

                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-full transition-colors"
                      style={{backgroundColor: '#EFE9E3', color: '#6D6157'}}
                    >
                      <Share2 size={14} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-full transition-colors"
                      style={{backgroundColor: '#EFE9E3', color: '#6D6157'}}
                    >
                      <Instagram size={14} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-full transition-colors"
                      style={{backgroundColor: '#EFE9E3', color: '#6D6157'}}
                    >
                      <Twitter size={14} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              style={{backgroundColor: '#CBAE9B', color: '#FAF8F3'}}
            >
              Load More Stories
            </motion.button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-xl mx-4 sm:mx-6 lg:mx-9"
          style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px'}}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{color: '#2F2F2F'}}>
            Stay in the Loop
          </h3>
          <p className="mb-6" style={{color: '#6D6157'}}>
            Get the latest jewelry trends and styling tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-l-lg px-4 py-3 focus:outline-none"
              style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F'}}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-r-lg font-medium transition-colors"
              style={{backgroundColor: '#CBAE9B', color: '#FAF8F3'}}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}