'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Mail, Calendar, Search } from 'lucide-react'

export default function CustomersPage() {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    try {
      const res = await fetch('/api/users')
      const data = await res.json()
      setCustomers(data)
    } catch (error) {
      console.error('Error fetching customers:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-lg" style={{backgroundColor: '#EFE9E3'}}>
            <Users size={24} style={{color: '#6D6157'}} />
          </div>
          <div>
            <h1 className="text-3xl font-bold" style={{color: '#2F2F2F'}}>Customers</h1>
            <p className="text-sm" style={{color: '#6D6157'}}>Manage registered users</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold" style={{color: '#2F2F2F'}}>{customers.length}</p>
          <p className="text-sm" style={{color: '#6D6157'}}>Total Customers</p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{color: '#6D6157'}} />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-all"
            style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '2px', color: '#2F2F2F'}}
          />
        </div>
      </div>

      {/* Customers List */}
      <div className="rounded-2xl p-6 shadow-lg" style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px'}}>
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse flex items-center space-x-4 p-4 rounded-xl" style={{backgroundColor: '#FAF8F3'}}>
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredCustomers.length === 0 ? (
          <div className="text-center py-12">
            <Users size={48} className="mx-auto mb-4" style={{color: '#D4C2A8'}} />
            <h3 className="text-lg font-medium mb-2" style={{color: '#2F2F2F'}}>
              {searchTerm ? 'No customers found' : 'No customers yet'}
            </h3>
            <p className="text-sm" style={{color: '#6D6157'}}>
              {searchTerm ? 'Try adjusting your search terms' : 'Customers will appear here when they register'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCustomers.map((customer, index) => (
              <motion.div
                key={customer._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl transition-all hover:shadow-md"
                style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px'}}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold" style={{backgroundColor: '#CBAE9B', color: '#FAF8F3'}}>
                    {customer.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-medium" style={{color: '#2F2F2F'}}>{customer.name}</h3>
                    <div className="flex items-center space-x-2 text-sm" style={{color: '#6D6157'}}>
                      <Mail size={14} />
                      <span>{customer.email}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-sm" style={{color: '#6D6157'}}>
                    <Calendar size={14} />
                    <span>Joined {new Date(customer.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${customer.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {customer.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}