import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import Blog from '../../../../models/Blog'

const connectDB = async () => {
  if (mongoose.connections[0]?.readyState) return
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.error('Database connection error:', error)
  }
}

export async function GET(request, { params }) {
  try {
    await connectDB()
    const blog = await Blog.findById(params.id)
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }
    return NextResponse.json(blog)
  } catch (error) {
    console.error('Failed to fetch blog:', error)
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB()
    const data = await request.json()

    const updated = await Blog.findByIdAndUpdate(params.id, data, { new: true })
    if (!updated) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }
    return NextResponse.json(updated)
  } catch (error) {
    console.error('Failed to update blog:', error)
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB()
    const deleted = await Blog.findByIdAndDelete(params.id)
    if (!deleted) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }
    return NextResponse.json({ message: 'Blog deleted successfully' })
  } catch (error) {
    console.error('Failed to delete blog:', error)
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 })
  }
}
