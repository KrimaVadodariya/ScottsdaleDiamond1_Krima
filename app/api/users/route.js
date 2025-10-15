import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import User from '../../../models/User'

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.error('Database connection error:', error)
  }
}

export async function GET() {
  try {
    await connectDB()
    const users = await User.find({ role: 'user' }).select('-password').sort({ createdAt: -1 })
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}