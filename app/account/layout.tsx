'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, Package, CreditCard, Truck, LogOut, Grid } from 'lucide-react'

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    try {
      const data = localStorage.getItem('user')
      if (data) setUser(JSON.parse(data))
      else router.push('/login')
    } catch {
      router.push('/login')
    }
  }, [router])

  const logout = () => {
    try {
      localStorage.removeItem('user')
      window.dispatchEvent(new Event('user:changed'))
    } catch {}
    router.push('/login')
  }

  return (
    <div className="min-h-screen pt-19" style={{ backgroundColor: '#FAF8F3' }}>
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-1 rounded-2xl p-6 shadow-lg" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#CBAE9B' }}>
              <User className="text-white" />
            </div>
            <div className="font-bold" style={{ color: '#2F2F2F' }}>{user?.name || 'Guest'}</div>
            <div className="text-sm" style={{ color: '#6D6157' }}>{user?.email || ''}</div>
          </div>

          <nav className="space-y-2">
            <Link href="/account">
              <div className="flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer" style={{ color: '#2F2F2F', backgroundColor: '#FAF8F3' }}>
                <Grid size={18} />
                <span>Overview</span>
              </div>
            </Link>
            <Link href="/account/profile">
              <div className="flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer" style={{ color: '#2F2F2F', backgroundColor: '#FAF8F3' }}>
                <User size={18} />
                <span>Profile</span>
              </div>
            </Link>
            <Link href="/account/orders">
              <div className="flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer" style={{ color: '#2F2F2F', backgroundColor: '#FAF8F3' }}>
                <Package size={18} />
                <span>Order History</span>
              </div>
            </Link>
            <Link href="/account/transactions">
              <div className="flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer" style={{ color: '#2F2F2F', backgroundColor: '#FAF8F3' }}>
                <CreditCard size={18} />
                <span>Transactions</span>
              </div>
            </Link>
            <Link href="/account/track-order">
              <div className="flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer" style={{ color: '#2F2F2F', backgroundColor: '#FAF8F3' }}>
                <Truck size={18} />
                <span>Track Order</span>
              </div>
            </Link>
          </nav>

          <button onClick={logout} className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg" style={{ backgroundColor: '#9C7E6A', color: '#FAF8F3' }}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </aside>

        {/* Content */}
        <section className="md:col-span-3">
          {children}
        </section>
      </div>
    </div>
  )
}
