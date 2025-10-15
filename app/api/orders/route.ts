import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import Order from '@/models/Order'
import mongoose from 'mongoose'

const connectDB = async () => {
  if (mongoose.connections[0]?.readyState) return
  try {
    await mongoose.connect(process.env.MONGODB_URI || '')
  } catch (error) {
    console.error('Database connection error:', error)
  }
}

export async function POST(req: Request) {
  try {
    await connectDB()
    
    // Get user from token
    const token = cookies().get('token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    let user
    try {
      user = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret')
    } catch (e) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    if (!user?.email) {
      return NextResponse.json({ error: 'Invalid user data' }, { status: 400 })
    }

    const { items, total, shippingAddress, paymentMethod } = await req.json()
    
    // Create order with user's email
    const orderData = {
      customerEmail: user.email,
      items: items.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      })),
      subtotal: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      tax: 0, // Will be calculated
      shippingFee: 0, // Will be calculated
      total: total,
      shippingAddress: {
        name: shippingAddress.name,
        address: shippingAddress.address,
        city: shippingAddress.city,
        zipCode: shippingAddress.zipCode,
        email: shippingAddress.email
      },
      paymentMethod,
      status: 'pending' as const,
      orderNumber: `ORD-${Date.now()}`,
      trackingNumber: ''
    }

    // Calculate shipping and tax
    orderData.shippingFee = orderData.subtotal > 1000 ? 0 : 50;
    orderData.tax = orderData.subtotal * 0.08;

    const order = await Order.create(orderData)

    return NextResponse.json({ success: true, order })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
