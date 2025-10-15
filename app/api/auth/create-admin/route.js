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

export async function GET() {
  try {
    await connectDB()
    
    const existingAdmin = await User.findOne({ email: 'admin@jwelary.com' })
    if (existingAdmin) {
      return NextResponse.json({ message: 'Admin already exists' })
    }

    const admin = new User({
      name: 'Admin User',
      email: 'admin@jwelary.com',
      password: 'admin123',
      role: 'admin'
    })
    
    await admin.save()
    
    return NextResponse.json({ 
      message: 'Admin created successfully',
      credentials: 'admin@jwelary.com / admin123'
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 })
  }
}

export async function POST() {
  try {
    await connectDB()
    
    const existingAdmin = await User.findOne({ email: 'admin@jwelary.com' })
    if (existingAdmin) {
      return NextResponse.json({ message: 'Admin already exists' })
    }

    const admin = new User({
      name: 'Admin User',
      email: 'admin@jwelary.com',
      password: 'admin123',
      role: 'admin'
    })
    
    await admin.save()
    
    return NextResponse.json({ 
      message: 'Admin created successfully',
      credentials: 'admin@jwelary.com / admin123'
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 })
  }
}