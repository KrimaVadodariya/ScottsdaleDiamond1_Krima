'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      const data = await res.json()
      
      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data.user))
        try { window.dispatchEvent(new Event('user:changed')) } catch {}
        if (data.user.role === 'admin') {
          router.push('/admin')
        } else {
          router.push('/')
        }
      } else {
        alert(data.error)
      }
    } catch (error) {
      alert('Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen mt-6 flex items-center justify-center" style={{backgroundColor: '#FAF8F3'}}>
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
          
          <h1 className="text-3xl font-bold mb-2" style={{color: '#2F2F2F'}}>Login</h1>
          <p style={{color: '#6D6157'}}>Access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="Enter your password"
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
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p style={{color: '#6D6157'}}>
            Don't have an account?{' '}
            <a href="/register" className="font-semibold" style={{color: '#CBAE9B'}}>
              Sign up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}