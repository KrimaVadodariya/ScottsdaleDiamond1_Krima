'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Package, Calendar, DollarSign, ChevronDown, ChevronUp, Truck, Hash } from 'lucide-react'

export default function AccountOrders() {
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<'all' | 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'>('all')
  const [sort, setSort] = useState<'date_desc' | 'date_asc' | 'total_desc' | 'total_asc'>('date_desc')
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/orders/user', { cache: 'no-store' as any })
        if (!res.ok) throw new Error('Failed to fetch orders')
        const data = await res.json()
        setOrders(Array.isArray(data) ? data : [])
      } catch (e) {
        setOrders([])
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [])

  const filtered = useMemo(() => {
    let list = [...orders]
    // Filter by status
    if (status !== 'all') list = list.filter(o => o.status === status)
    // Search by order number or tracking
    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(o =>
        String(o.orderNumber || '').toLowerCase().includes(q) ||
        String(o.trackingNumber || '').toLowerCase().includes(q)
      )
    }
    // Sort
    list.sort((a, b) => {
      switch (sort) {
        case 'date_asc':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        case 'date_desc':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case 'total_asc':
          return (a.total || 0) - (b.total || 0)
        case 'total_desc':
          return (b.total || 0) - (a.total || 0)
        default:
          return 0
      }
    })
    return list
  }, [orders, status, sort, query])

  const stats = useMemo(() => {
    const total = orders.length
    const delivered = orders.filter(o => o.status === 'delivered').length
    const inTransit = orders.filter(o => o.status === 'processing' || o.status === 'shipped').length
    const pending = orders.filter(o => o.status === 'pending' || o.status === 'cancelled').length
    return { total, delivered, inTransit, pending }
  }, [orders])

  const formatDate = (d?: string) => {
    try { return d ? new Date(d).toLocaleString() : '' } catch { return '' }
  }

  const formatCurrency = (n?: number) => {
    try { return n != null ? `$${n.toFixed(2)}` : '$0.00' } catch { return '$0.00' }
  }

  const toggleExpand = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }))

  const statusBadge = (s: string) => {
    const map: Record<string, { bg: string; text: string; label: string }> = {
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pending' },
      processing: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Processing' },
      shipped: { bg: 'bg-indigo-100', text: 'text-indigo-800', label: 'Shipped' },
      delivered: { bg: 'bg-green-100', text: 'text-green-800', label: 'Delivered' },
      cancelled: { bg: 'bg-red-100', text: 'text-red-800', label: 'Cancelled' }
    }
    const st = map[s] || map['pending']
    return <span className={`px-3 py-1 rounded-full text-xs font-medium ${st.bg} ${st.text}`}>{st.label}</span>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: '#2F2F2F' }}>Order History</h1>
            <p className="mt-1" style={{ color: '#6D6157' }}>Track your orders, view details, and manage your purchases.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#6D6157' }} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search order # or tracking"
                className="pl-9 pr-3 py-2 rounded-lg text-sm"
                style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F' }}
              />
            </div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="px-3 py-2 rounded-lg text-sm"
              style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F' }}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as any)}
              className="px-3 py-2 rounded-lg text-sm"
              style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F' }}
            >
              <option value="date_desc">Newest</option>
              <option value="date_asc">Oldest</option>
              <option value="total_desc">Total: High to Low</option>
              <option value="total_asc">Total: Low to High</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          <div className="rounded-xl p-4" style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
            <div className="text-xs" style={{ color: '#6D6157' }}>Total Orders</div>
            <div className="text-2xl font-bold" style={{ color: '#2F2F2F' }}>{stats.total}</div>
          </div>
          <div className="rounded-xl p-4" style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
            <div className="text-xs" style={{ color: '#6D6157' }}>Delivered</div>
            <div className="text-2xl font-bold" style={{ color: '#2F2F2F' }}>{stats.delivered}</div>
          </div>
          <div className="rounded-xl p-4" style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
            <div className="text-xs" style={{ color: '#6D6157' }}>In Transit</div>
            <div className="text-2xl font-bold" style={{ color: '#2F2F2F' }}>{stats.inTransit}</div>
          </div>
          <div className="rounded-xl p-4" style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
            <div className="text-xs" style={{ color: '#6D6157' }}>Pending/Cancelled</div>
            <div className="text-2xl font-bold" style={{ color: '#2F2F2F' }}>{stats.pending}</div>
          </div>
        </div>
      </div>

      {/* Orders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl p-5 animate-pulse" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
              <div className="h-6 w-1/3 mb-4 rounded" style={{ backgroundColor: '#FAF8F3' }} />
              <div className="h-4 w-1/2 mb-2 rounded" style={{ backgroundColor: '#FAF8F3' }} />
              <div className="h-4 w-2/3 mb-2 rounded" style={{ backgroundColor: '#FAF8F3' }} />
              <div className="h-10 w-full mt-2 rounded" style={{ backgroundColor: '#FAF8F3' }} />
            </div>
          ))
        ) : filtered.length === 0 ? (
          <div className="md:col-span-2 text-center rounded-2xl p-10" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
            <Package className="mx-auto mb-3" style={{ color: '#6D6157' }} />
            <div className="text-lg font-semibold mb-1" style={{ color: '#2F2F2F' }}>No orders found</div>
            <p className="mb-4" style={{ color: '#6D6157' }}>Start shopping and your orders will appear here.</p>
            <Link href="/jewelry">
              <button className="px-6 py-3 rounded-lg font-semibold" style={{ backgroundColor: '#CBAE9B', color: '#FAF8F3' }}>Shop Now</button>
            </Link>
          </div>
        ) : (
          filtered.map((o) => (
            <motion.div
              key={o._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl p-5 shadow-lg space-y-4"
              style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <Hash size={16} style={{ color: '#6D6157' }} />
                    <span className="font-semibold" style={{ color: '#2F2F2F' }}>Order #{o.orderNumber}</span>
                  </div>
                  <div className="mt-1 text-sm flex items-center gap-4" style={{ color: '#6D6157' }}>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(o.createdAt)}</span>
                    <span className="flex items-center gap-1"><DollarSign size={14} /> {formatCurrency(o.total)}</span>
                    <span className="flex items-center gap-1"><Package size={14} /> {o.items?.length || 0} items</span>
                  </div>
                </div>
                <div className="shrink-0">{statusBadge(o.status)}</div>
              </div>

              <div className="rounded-xl p-4" style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm" style={{ color: '#6D6157' }}>
                    <div className="flex items-center gap-2">
                      <Truck size={14} />
                      <span>Tracking:</span>
                      <strong style={{ color: '#2F2F2F' }}>{o.trackingNumber || '-'}</strong>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={`/account/track-order?tn=${encodeURIComponent(o.trackingNumber || '')}`}>
                      <button className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ backgroundColor: '#CBAE9B', color: '#FAF8F3' }}>Track</button>
                    </Link>
                    <button
                      onClick={() => toggleExpand(o._id)}
                      className="px-4 py-2 rounded-lg text-sm font-semibold"
                      style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F' }}
                    >
                      {expanded[o._id] ? (
                        <span className="inline-flex items-center gap-1">Hide Details <ChevronUp size={16} /></span>
                      ) : (
                        <span className="inline-flex items-center gap-1">View Details <ChevronDown size={16} /></span>
                      )}
                    </button>
                  </div>
                </div>

                {expanded[o._id] && (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-sm" style={{ color: '#6D6157' }}>
                          <th className="py-2 pr-2">Item</th>
                          <th className="py-2 pr-2">Qty</th>
                          <th className="py-2 pr-2">Price</th>
                          <th className="py-2 pr-2">Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(o.items || []).map((it: any, idx: number) => (
                          <tr key={idx} className="border-t" style={{ borderColor: '#D4C2A8' }}>
                            <td className="py-3 pr-2" style={{ color: '#2F2F2F' }}>{it.name}</td>
                            <td className="py-3 pr-2" style={{ color: '#2F2F2F' }}>{it.quantity}</td>
                            <td className="py-3 pr-2" style={{ color: '#2F2F2F' }}>${(it.price || 0).toFixed(2)}</td>
                            <td className="py-3 pr-2" style={{ color: '#2F2F2F' }}>${((it.price || 0) * (it.quantity || 0)).toFixed(2)}</td>
                          </tr>
                        ))}
                        <tr className="border-t" style={{ borderColor: '#D4C2A8' }}>
                          <td colSpan={3} className="py-3 pr-2 text-right font-semibold" style={{ color: '#2F2F2F' }}>Total</td>
                          <td className="py-3 pr-2 font-bold" style={{ color: '#2F2F2F' }}>{formatCurrency(o.total)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}
