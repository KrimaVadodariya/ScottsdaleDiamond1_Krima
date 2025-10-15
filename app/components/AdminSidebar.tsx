'use client'

import { 
  LayoutDashboard, Package, ShoppingCart, FileText, Users, 
  Settings, LogOut, BarChart3
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sidebarItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Blog', href: '/admin/blog', icon: FileText },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings }
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-72 shadow-xl flex-shrink-0 h-screen fixed left-0 top-0 z-50" style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderRightWidth: '1px'}}>
      <div className="flex items-center justify-between h-16 px-6" style={{borderColor: '#D4C2A8', borderBottomWidth: '1px'}}>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#CBAE9B'}}>
            <span className="text-sm font-bold" style={{color: '#FAF8F3'}}>J</span>
          </div>
          <span className="text-xl font-bold" style={{color: '#2F2F2F'}}>Jwelary Admin</span>
        </div>
      </div>

      <nav className="mt-8 px-4">
        {sidebarItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <div
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors cursor-pointer ${
                pathname === item.href ? 'shadow-md' : 'hover:shadow-sm'
              }`}
              style={pathname === item.href 
                ? {backgroundColor: '#CBAE9B', color: '#FAF8F3'} 
                : {color: '#6D6157'}
              }
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button 
          onClick={() => {
            localStorage.removeItem('user')
            try { window.dispatchEvent(new Event('user:changed')) } catch {}
            window.location.href = '/login'
          }}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg w-full transition-colors hover:shadow-sm cursor-pointer" 
          style={{color: '#6D6157'}}
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}