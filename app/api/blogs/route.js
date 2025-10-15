import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import Blog from '../../../models/Blog'

const connectDB = async () => {
  if (mongoose.connections[0]?.readyState) return
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.error('Database connection error:', error)
  }
}

export async function GET(request) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')

    const query = {}
    if (status) query.status = status
    if (category) query.category = category
    if (featured === 'true') query.featured = true

    const blogs = await Blog.find(query).sort({ createdAt: -1 })
    return NextResponse.json(blogs)
  } catch (error) {
    console.error('Failed to fetch blogs:', error)
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await connectDB()
    const data = await request.json()

    // Basic validation
    const requiredFields = ['title', 'excerpt', 'content', 'image', 'author', 'category', 'readTime']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    const blog = new Blog({
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      image: data.image,
      author: data.author,
      category: data.category,
      readTime: data.readTime,
      status: data.status || 'draft',
      featured: !!data.featured
    })

    await blog.save()
    return NextResponse.json(blog, { status: 201 })
  } catch (error) {
    console.error('Failed to create blog:', error)
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 })
  }
}
