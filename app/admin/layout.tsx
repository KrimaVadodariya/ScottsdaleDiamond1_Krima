'use client'

import { Bell, Search } from 'lucide-react'
import AdminSidebar from '../components/AdminSidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF8F3'}}>
      <style jsx global>{`
        nav[class*="fixed top-0"] { display: none !important; }
        body { margin: 0; padding: 0; }
      `}</style>
      
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-72">
        {/* Top Bar */}
        <header className="h-16 shadow-sm flex items-center justify-between px-6" style={{backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderBottomWidth: '1px'}}>
          <div className="flex items-center py-4 space-x-4">
            <div className="flex items-center space-x-3 px-4 py-2 rounded-lg" style={{backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px'}}>
              <Search size={16} style={{color: '#6D6157'}} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent outline-none text-sm w-64" 
                style={{color: '#2F2F2F'}}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg relative" style={{color: '#6D6157'}}>
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full" style={{backgroundColor: '#CBAE9B'}}></span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full" style={{backgroundColor: '#D4C2A8'}}></div>
              <span className="font-medium" style={{color: '#2F2F2F'}}>Admin User</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 overflow-y-auto" style={{height: 'calc(100vh - 64px)'}}>
          <div className="max-w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}