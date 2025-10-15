import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import User from '../../../../models/User'

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.error('Database connection error:', error)
  }
}

export async function POST(request) {
  try {
    await connectDB()
    const { email, password } = await request.json()

    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 })
    }

    // Simple password check without hashing for testing
    if (password === 'admin123') {
      return NextResponse.json({
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      })
    }

    return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}