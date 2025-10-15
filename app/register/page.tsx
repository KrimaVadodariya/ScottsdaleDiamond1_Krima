'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      const data = await res.json()
      
      if (res.ok) {
        alert('Registration successful! Please login.')
        router.push('/login')
      } else {
        alert(data.error)
      }
    } catch (error) {
      alert('Registration failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#FAF8F3'}}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-2xl shadow-xl"
        style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px'}}
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20" style={{backgroundColor: '#D4C2A8'}} />
            <span className="mx-4 text-3xl">💎</span>
            <div className="h-px w-20" style={{backgroundColor: '#D4C2A8'}} />
          </div>
          
          <h1 className="text-3xl font-bold mb-2" style={{color: '#2F2F2F'}}>Create Account</h1>
          <p style={{color: '#6D6157'}}>Join our jewelry community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium" style={{color: '#2F2F2F'}}>
              <User size={16} className="inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-4 rounded-lg focus:outline-none"
              style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F'}}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium" style={{color: '#2F2F2F'}}>
              <Mail size={16} className="inline mr-2" />
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-4 rounded-lg focus:outline-none"
              style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F'}}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium" style={{color: '#2F2F2F'}}>
              <Lock size={16} className="inline mr-2" />
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full p-4 rounded-lg focus:outline-none pr-12"
                style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F'}}
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                style={{color: '#6D6157'}}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-4 rounded-lg font-semibold transition-colors disabled:opacity-50"
            style={{backgroundColor: '#CBAE9B', color: '#FAF8F3'}}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p style={{color: '#6D6157'}}>
            Already have an account?{' '}
            <a href="/login" className="font-semibold" style={{color: '#CBAE9B'}}>
              Sign in
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}