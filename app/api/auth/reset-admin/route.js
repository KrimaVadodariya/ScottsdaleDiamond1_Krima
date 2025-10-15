import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import User from '../../../../models/User'
import bcrypt from 'bcryptjs'

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
    
    const hashedPassword = await bcrypt.hash('admin123', 12)
    
    await User.updateOne(
      { email: 'admin@jwelary.com' },
      { password: hashedPassword }
    )
    
    return NextResponse.json({ 
      message: 'Admin password reset successfully',
      credentials: 'admin@jwelary.com / admin123'
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to reset password' }, { status: 500 })
  }
}