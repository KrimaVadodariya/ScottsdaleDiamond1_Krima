'use client'

import { useState } from 'react'

export default function AccountTrackOrder() {
  const [tracking, setTracking] = useState('')
  const [result, setResult] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResult(null)

    try {
      // For now, query the order by trackingNumber through a simple endpoint
      const res = await fetch(`/api/orders/track?tn=${encodeURIComponent(tracking)}`, { cache: 'no-store' as any })
      if (!res.ok) throw new Error('Not found')
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setError('Tracking number not found.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
      <h1 className="text-2xl font-bold mb-4" style={{ color: '#2F2F2F' }}>Track Order</h1>
      <form onSubmit={handleTrack} className="flex gap-2 max-w-lg">
        <input
          value={tracking}
          onChange={(e) => setTracking(e.target.value)}
          className="flex-1 p-3 rounded-lg"
          placeholder="Enter your tracking number"
          style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F' }}
        />
        <button className="px-6 rounded-lg font-semibold" style={{ backgroundColor: '#CBAE9B', color: '#FAF8F3' }}>Track</button>
      </form>

      {loading && <div className="mt-4">Searching...</div>}
      {error && <div className="mt-4" style={{ color: '#9C3D3D' }}>{error}</div>}
      {result && (
        <div className="mt-6 rounded-xl p-4" style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
          <div><strong>Order #:</strong> {result.orderNumber}</div>
          <div><strong>Status:</strong> {result.status}</div>
          <div><strong>Tracking:</strong> {result.trackingNumber || '-'}</div>
          <div><strong>Total:</strong> ${result.total?.toFixed(2)}</div>
        </div>
      )}
    </div>
  )
}
