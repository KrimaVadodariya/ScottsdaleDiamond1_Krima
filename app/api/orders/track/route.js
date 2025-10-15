import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import Order from '../../../../models/Order'

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
    const tn = searchParams.get('tn')
    if (!tn) return NextResponse.json({ error: 'Missing tracking number' }, { status: 400 })

    const order = await Order.findOne({ trackingNumber: tn })
    if (!order) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return NextResponse.json(order)
  } catch (e) {
    return NextResponse.json({ error: 'Failed to track order' }, { status: 500 })
  }
}
