'use client'

import { useEffect, useState } from 'react'

export default function AccountProfile() {
  const [user, setUser] = useState<any>(null)
  const [form, setForm] = useState({ name: '', email: '' })

  useEffect(() => {
    try {
      const raw = localStorage.getItem('user')
      if (raw) {
        const u = JSON.parse(raw)
        setUser(u)
        setForm({ name: u.name || '', email: u.email || '' })
      }
    } catch {}
  }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: In a real app, send a PUT to /api/users/me
    const updated = { ...user, name: form.name, email: form.email }
    setUser(updated)
    try {
      localStorage.setItem('user', JSON.stringify(updated))
      window.dispatchEvent(new Event('user:changed'))
      alert('Profile updated locally.')
    } catch {}
  }

  return (
    <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: '#EFE9E3', borderColor: '#D4C2A8', borderWidth: '1px' }}>
      <h1 className="text-2xl font-bold mb-4" style={{ color: '#2F2F2F' }}>Profile</h1>
      <form onSubmit={handleSave} className="space-y-4 max-w-lg">
        <div>
          <label className="block mb-2" style={{ color: '#2F2F2F' }}>Full Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded-lg"
            style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F' }}
          />
        </div>
        <div>
          <label className="block mb-2" style={{ color: '#2F2F2F' }}>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-lg"
            style={{ backgroundColor: '#FAF8F3', borderColor: '#D4C2A8', borderWidth: '1px', color: '#2F2F2F' }}
          />
        </div>
        <button type="submit" className="px-6 py-3 rounded-lg font-semibold" style={{ backgroundColor: '#CBAE9B', color: '#FAF8F3' }}>Save Changes</button>
      </form>
    </div>
  )
}
