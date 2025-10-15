'use client'

import { motion } from 'framer-motion'
import { Package, ShoppingCart, FileText, Users, TrendingUp, DollarSign, Eye, Plus } from 'lucide-react'
import Link from 'next/link'

const statsCards = [
  { title: 'Total Revenue', value: '$24,580', change: '+12%', icon: DollarSign, color: '#CBAE9B' },
  { title: 'Products', value: '156', change: '+8', icon: Package, color: '#D4C2A8' },
  { title: 'Orders', value: '89', change: '+23%', icon: ShoppingCart, color: '#9C7E6A' },
  { title: 'Customers', value: '1,247', change: '+15%', icon: Users, color: '#CBAE9B' }
]

const recentOrders = [
  { id: '#1234', customer: 'Sarah Johnson', product: 'Diamond Necklace', amount: '$1,299', status: 'Completed' },
  { id: '#1235', customer: 'Mike Chen', product: 'Gold Ring', amount: '$899', status: 'Processing' },
  { id: '#1236', customer: 'Emma Davis', product: 'Pearl Earrings', amount: '$599', status: 'Shipped' }
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold" style={{color: '#2F2F2F'}}>Dashboard</h1>
          <p style={{color: '#6D6157'}}>Welcome back! Here's what's happening with your store.</p>
        </div>
        <div className="flex space-x-3">
          <Link href="/admin/products/new">
            <button className="flex items-center px-4 py-2 rounded-lg font-medium" style={{backgroundColor: '#CBAE9B', color: '#FAF8F3'}}>
              <Plus size={16} className="mr-2" />
              Add Product
            </button>
          </Link>
          <button className="flex items-center px-4 py-2 rounded-lg font-medium" style={{backgroundColor: '#D4C2A8', color: '#2F2F2F'}}>
            <Eye size={16} className="mr-2" />
            View Store
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl shadow-sm"
            style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px'}}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-full" style={{backgroundColor: card.color}}>
                <card.icon size={20} style={{color: '#FAF8F3'}} />
              </div>
              <span className="text-sm font-medium px-2 py-1 rounded-full" style={{backgroundColor: '#D4C2A8', color: '#2F2F2F'}}>
                {card.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-1" style={{color: '#2F2F2F'}}>{card.value}</h3>
            <p className="text-sm" style={{color: '#6D6157'}}>{card.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 rounded-2xl"
          style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px'}}
        >
          <h2 className="text-xl font-bold mb-6" style={{color: '#2F2F2F'}}>Sales Overview</h2>
          <div className="h-64 flex items-center justify-center rounded-lg" style={{backgroundColor: '#FAF8F3'}}>
            <div className="text-center">
              <TrendingUp size={48} style={{color: '#CBAE9B'}} className="mx-auto mb-4" />
              <p style={{color: '#6D6157'}}>Chart will be integrated here</p>
            </div>
          </div>
        </motion.div>

        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 rounded-2xl"
          style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px'}}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold" style={{color: '#2F2F2F'}}>Recent Orders</h2>
            <Link href="/admin/orders" className="text-sm font-medium" style={{color: '#CBAE9B'}}>
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 rounded-lg" style={{backgroundColor: '#FAF8F3'}}>
                <div>
                  <p className="font-medium" style={{color: '#2F2F2F'}}>{order.customer}</p>
                  <p className="text-sm" style={{color: '#6D6157'}}>{order.product}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold" style={{color: '#2F2F2F'}}>{order.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}