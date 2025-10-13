'use client'

import { useState } from 'react'
import Footer from '../components/Footer'

export default function TrackOrder() {
  const [orderNumber, setOrderNumber] = useState('ORDER-COM-')
  const [lastName, setLastName] = useState('')

  return (
    <div className="min-h-screen pt-24" style={{backgroundColor: '#FAF8F3'}}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-light mb-8" style={{color: '#2F2F2F'}}>
            TRACK MY ORDER
          </h1>
          
          {/* Form Container */}
          <div className="rounded-lg p-8 shadow-sm" style={{backgroundColor: '#EFE9E3'}}>
            <div className="flex flex-col md:flex-row gap-4 items-end">
              
              {/* Order Number Field */}
              <div className="flex-1">
                <label className="block text-xs font-semibold mb-2 px-2 py-1 rounded" style={{backgroundColor: '#9C7E6A', color: 'white'}}>
                  ORDER NUMBER
                </label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                  style={{backgroundColor: 'white', color: '#2F2F2F'}}
                />
              </div>
              
              {/* Last Name Field */}
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2" style={{color: '#6D6157'}}>
                  LAST NAME*
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Please enter billing last name"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                  style={{backgroundColor: 'white', color: '#2F2F2F'}}
                />
                <p className="text-xs mt-1" style={{color: '#CBAE9B'}}>
                  Please enter billing last name
                </p>
              </div>
              
              {/* Search Button */}
              <div>
                <button 
                  className="px-8 py-3 rounded font-medium text-white transition-colors"
                  style={{backgroundColor: '#9C7E6A'}}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#CBAE9B'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#9C7E6A'}
                >
                  Search
                </button>
              </div>
              
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}