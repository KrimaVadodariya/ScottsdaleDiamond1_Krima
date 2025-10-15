'use client'

import { useEffect, useState } from 'react'

export default function AccountOrders() {
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

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

  const formatDate = (d?: string) => {
    try { return d ? new Date(d).toLocaleString() : '' } catch { return '' }
  }

  return (
    <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
      <h1 className="text-2xl font-bold mb-4" style={{ color: '#2F2F2F' }}>Order History</h1>
      {loading ? (
        <div>Loading...</div>
      ) : orders.length === 0 ? (
        <div style={{ color: '#6D6157' }}>No orders found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead style={{ backgroundColor: '#D4C2A8' }}>
              <tr>
                <th className="px-4 py-2 text-left">Order #</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o._id} className="border-b" style={{ borderColor: '#D4C2A8' }}>
                  <td className="px-4 py-2">{o.orderNumber}</td>
                  <td className="px-4 py-2">{formatDate(o.createdAt)}</td>
                  <td className="px-4 py-2 capitalize">{o.status}</td>
                  <td className="px-4 py-2">${o.total?.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
