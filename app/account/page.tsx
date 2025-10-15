'use client'

import { useEffect, useState } from 'react'

export default function AccountOverview() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    try {
      const u = localStorage.getItem('user')
      if (u) setUser(JSON.parse(u))
    } catch {}
  }, [])

  return (
    <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
      <h1 className="text-2xl font-bold mb-4" style={{ color: '#2F2F2F' }}>Welcome back{user?.name ? `, ${user.name}` : ''}!</h1>
      <p style={{ color: '#6D6157' }}>From here you can manage your orders, profile, transactions, and track shipments.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="rounded-xl p-4" style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
          <div className="text-sm" style={{ color: '#6D6157' }}>Account</div>
          <div className="text-xl font-bold" style={{ color: '#2F2F2F' }}>{user?.email}</div>
        </div>
        <div className="rounded-xl p-4" style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
          <div className="text-sm" style={{ color: '#6D6157' }}>Orders</div>
          <div className="text-xl font-bold" style={{ color: '#2F2F2F' }}>View recent orders in Order History</div>
        </div>
        <div className="rounded-xl p-4" style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
          <div className="text-sm" style={{ color: '#6D6157' }}>Support</div>
          <div className="text-xl font-bold" style={{ color: '#2F2F2F' }}>Need help? Visit FAQ or contact us</div>
        </div>
      </div>
    </div>
  )
}
