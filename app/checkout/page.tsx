'use client'

import { motion } from 'framer-motion'
import { CreditCard, Lock, ArrowLeft, Smartphone, Wallet } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import Footer from '../components/Footer'

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCart()
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  })
  const [paymentMethod, setPaymentMethod] = useState('card')

  const subtotal = getTotalPrice()
  const shipping = subtotal > 1000 ? 0 : 50
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Payment processing logic would go here
    alert('Payment processed successfully!')
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#FFFAF3] via-[#F5F2EB] to-[#CBAE8E]/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center mb-8">
          <Link href="/cart" className="flex items-center text-[#D4AF37] hover:underline">
            <ArrowLeft size={20} className="mr-2" />
            Back to Cart
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-[#FFFAF3]/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#CBAE8E]/30">
            <h2 className="text-2xl font-bold text-[#A89F91] mb-6 flex items-center">
              <Lock size={24} className="mr-2" />
              Secure Checkout
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-[#A89F91] mb-3">Contact Information</h3>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-[#CBAE8E]/30 focus:border-[#D4AF37] focus:outline-none"
                  required
                />
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-lg font-semibold text-[#A89F91] mb-3">Shipping Address</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="p-3 rounded-lg border border-[#CBAE8E]/30 focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="p-3 rounded-lg border border-[#CBAE8E]/30 focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-[#CBAE8E]/30 focus:border-[#D4AF37] focus:outline-none mt-4"
                  required
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="p-3 rounded-lg border border-[#CBAE8E]/30 focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="p-3 rounded-lg border border-[#CBAE8E]/30 focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div>
                <h3 className="text-lg font-semibold text-[#A89F91] mb-3">Payment Method</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-lg border text-center flex items-center justify-center space-x-2 ${paymentMethod === 'card' ? 'border-[#D4AF37] bg-[#F5F2EB]' : 'border-[#CBAE8E]/30'}`}
                  >
                    <CreditCard size={20} />
                    <span>Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-3 rounded-lg border text-center flex items-center justify-center space-x-2 ${paymentMethod === 'paypal' ? 'border-[#D4AF37] bg-[#F5F2EB]' : 'border-[#CBAE8E]/30'}`}
                  >
                    <Wallet size={20} />
                    <span>PayPal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    className={`p-3 rounded-lg border text-center flex items-center justify-center space-x-2 ${paymentMethod === 'apple' ? 'border-[#D4AF37] bg-[#F5F2EB]' : 'border-[#CBAE8E]/30'}`}
                  >
                    <Smartphone size={20} />
                    <span>Apple Pay</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('google')}
                    className={`p-3 rounded-lg border text-center flex items-center justify-center space-x-2 ${paymentMethod === 'google' ? 'border-[#D4AF37] bg-[#F5F2EB]' : 'border-[#CBAE8E]/30'}`}
                  >
                    <Wallet size={20} />
                    <span>Google Pay</span>
                  </button>
                </div>
              </div>

              {/* Payment Information */}
              {paymentMethod === 'card' && (
                <div>
                  <h3 className="text-lg font-semibold text-[#A89F91] mb-3 flex items-center">
                    <CreditCard size={20} className="mr-2" />
                    Card Information
                  </h3>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-[#CBAE8E]/30 focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Name on card"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-[#CBAE8E]/30 focus:border-[#D4AF37] focus:outline-none mt-4"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="p-3 rounded-lg border border-[#CBAE8E]/30 focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="p-3 rounded-lg border border-[#CBAE8E]/30 focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="text-center p-8 bg-[#F5F2EB] rounded-lg">
                  <p className="text-[#A89F91] mb-4">You will be redirected to PayPal to complete your payment</p>
                  <div className="flex justify-center mb-2">
                    <Wallet size={48} className="text-[#D4AF37]" />
                  </div>
                  <p className="text-sm text-[#A89F91]/70">Secure PayPal checkout</p>
                </div>
              )}

              {paymentMethod === 'apple' && (
                <div className="text-center p-8 bg-[#F5F2EB] rounded-lg">
                  <p className="text-[#A89F91] mb-4">Use Touch ID or Face ID to pay with Apple Pay</p>
                  <div className="flex justify-center mb-2">
                    <Smartphone size={48} className="text-[#D4AF37]" />
                  </div>
                  <p className="text-sm text-[#A89F91]/70">Quick and secure payment</p>
                </div>
              )}

              {paymentMethod === 'google' && (
                <div className="text-center p-8 bg-[#F5F2EB] rounded-lg">
                  <p className="text-[#A89F91] mb-4">Pay quickly with your Google account</p>
                  <div className="flex justify-center mb-2">
                    <Wallet size={48} className="text-[#D4AF37]" />
                  </div>
                  <p className="text-sm text-[#A89F91]/70">Fast Google Pay checkout</p>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#CBAE8E] text-[#FFFAF3] py-4 rounded-xl font-semibold text-lg shadow-lg mt-6"
              >
                {paymentMethod === 'card' ? 'Complete Payment' : 
                 paymentMethod === 'paypal' ? 'Continue with PayPal' :
                 paymentMethod === 'apple' ? 'Pay with Apple Pay' :
                 'Pay with Google Pay'}
              </motion.button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-[#FFFAF3]/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#CBAE8E]/30 h-fit">
            <h2 className="text-2xl font-bold text-[#A89F91] mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-[#A89F91]">{item.name}</p>
                    <p className="text-sm text-[#A89F91]/70">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">{item.price}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t pt-4">
              <div className="flex justify-between">
                <span className="text-[#A89F91]/70">Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A89F91]/70">Shipping</span>
                <span>${shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A89F91]/70">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t pt-2">
                <span>Total</span>
                <span className="text-[#D4AF37]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}