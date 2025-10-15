import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import User from '../../../../models/User'
import jwt from 'jsonwebtoken'

const connectDB = async () => {
  if (mongoose.connections[0]?.readyState) return
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.error('Database connection error:', error)
  }
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export async function POST(request) {
  try {
    await connectDB()
    const body = await request.json()
    const emailInput = String(body?.email || '').trim()
    const passwordInput = String(body?.password || '').trim()

    if (!emailInput || !passwordInput) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    // Case-insensitive email lookup
    const user = await User.findOne({ email: { $regex: `^${escapeRegex(emailInput)}$`, $options: 'i' } })
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 })
    }

    const isValidPassword = await user.comparePassword(passwordInput)
    if (!isValidPassword) {
      return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    )

    const response = NextResponse.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    })

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60, // seconds
      sameSite: 'lax',
      path: '/'
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
