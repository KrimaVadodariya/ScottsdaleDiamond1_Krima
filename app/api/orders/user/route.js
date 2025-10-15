import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import Order from '@/models/Order'
import { cookies } from 'next/headers'

const connectDB = async () => {
  if (mongoose.connections[0]?.readyState) return
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.error('Database connection error:', error)
  }
}

export async function GET() {
  try {
    await connectDB()

    const token = cookies().get('token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    let payload
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret')
    } catch (e) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const email = payload?.email
    if (!email) {
      return NextResponse.json({ error: 'Invalid token payload' }, { status: 401 })
    }

    // Fetch orders only for the logged-in user
    const orders = await Order.find({ customerEmail: email }).sort({ createdAt: -1 })
    return NextResponse.json(orders)
  } catch (error) {
    console.error('Failed to fetch user orders:', error)
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 })
  }
}
