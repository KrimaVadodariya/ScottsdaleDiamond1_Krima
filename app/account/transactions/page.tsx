'use client'

import { useEffect, useState } from 'react'

// Placeholder: In a real application, transactions would be separate documents or a gateway callback history
export default function AccountTransactions() {
  const [transactions, setTransactions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // For now, derive simple transaction entries from orders endpoint
    const fetchData = async () => {
      try {
        const res = await fetch('/api/orders/user', { cache: 'no-store' as any })
        if (!res.ok) throw new Error('Failed to fetch')
        const orders = await res.json()
        const tx = (orders || []).map((o: any) => ({
          id: o._id,
          createdAt: o.createdAt,
          amount: o.total,
          status: o.status === 'delivered' ? 'paid' : 'pending',
          method: 'Card',
          ref: o.orderNumber
        }))
        setTransactions(tx)
      } catch {
        setTransactions([])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const formatDate = (d?: string) => {
    try { return d ? new Date(d).toLocaleString() : '' } catch { return '' }
  }

  return (
    <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
      <h1 className="text-2xl font-bold mb-4" style={{ color: '#2F2F2F' }}>Transactions</h1>
      {loading ? (
        <div>Loading...</div>
      ) : transactions.length === 0 ? (
        <div style={{ color: '#6D6157' }}>No transactions found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead style={{ backgroundColor: '#D4C2A8' }}>
              <tr>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Method</th>
                <th className="px-4 py-2 text-left">Reference</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b" style={{ borderColor: '#D4C2A8' }}>
                  <td className="px-4 py-2">{formatDate(t.createdAt)}</td>
                  <td className="px-4 py-2">${t.amount?.toFixed(2)}</td>
                  <td className="px-4 py-2 capitalize">{t.status}</td>
                  <td className="px-4 py-2">{t.method}</td>
                  <td className="px-4 py-2">{t.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
