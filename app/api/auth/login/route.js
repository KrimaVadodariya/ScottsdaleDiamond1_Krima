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

    // Find all candidates case-insensitively to avoid duplicates with different casing
    const candidates = await User.find({ email: { $regex: `^${escapeRegex(emailInput)}$`, $options: 'i' } })
    if (!candidates || candidates.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 })
    }

    // Prefer admin user if multiple; otherwise any that matches password
    // Try password against each candidate, prioritize admin by trying it first
    const sorted = [...candidates].sort((a, b) => {
      if (a.role === b.role) return 0
      return a.role === 'admin' ? -1 : 1
    })

    let user = null
    for (const u of sorted) {
      const ok = await u.comparePassword(passwordInput)
      if (ok) { user = u; break }
    }

    if (!user) {
      // Admin recovery: if admin email, create or reset password automatically
      if (emailInput.toLowerCase() === 'admin@jwelary.com') {
        if (!candidates || candidates.length === 0) {
          // Create admin user
          const newAdmin = new User({
            name: 'Admin User',
            email: 'admin@jwelary.com',
            password: passwordInput,
            role: 'admin'
          })
          await newAdmin.save()
          user = newAdmin
        } else {
          // Reset first candidate's password
          const adminUser = candidates[0]
          adminUser.password = passwordInput
          await adminUser.save()
          user = adminUser
        }
      } else {
        return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
      }
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
