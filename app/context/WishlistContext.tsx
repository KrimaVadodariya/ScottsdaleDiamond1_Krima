'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface WishlistItem {
  id: number
  name: string
  price: string
  image: string
  category: string
}

interface WishlistContextType {
  items: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: number) => void
  isInWishlist: (id: number) => boolean
  clearWishlist: () => void
  getTotalItems: () => number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

function getCurrentUserId() {
  try {
    const raw = localStorage.getItem('user')
    if (!raw) return 'guest'
    const parsed = JSON.parse(raw)
    return parsed?.id || 'guest'
  } catch {
    return 'guest'
  }
}

function storageKey(userId: string) {
  return `wishlist:${userId}`
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<string>('guest')
  const [items, setItems] = useState<WishlistItem[]>([])

  // initial load
  useEffect(() => {
    const uid = getCurrentUserId()
    setUserId(uid)
    try {
      const saved = localStorage.getItem(storageKey(uid))
      if (saved) setItems(JSON.parse(saved))
    } catch {}
  }, [])

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(storageKey(userId), JSON.stringify(items))
    } catch {}
  }, [items, userId])

  // react to user changes and storage
  useEffect(() => {
    const handleUserChange = () => {
      const uid = getCurrentUserId()
      setUserId(uid)
      try {
        const saved = localStorage.getItem(storageKey(uid))
        setItems(saved ? JSON.parse(saved) : [])
      } catch {
        setItems([])
      }
    }

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'user') handleUserChange()
      if (e.key === storageKey(userId)) {
        try {
          const saved = localStorage.getItem(storageKey(userId))
          setItems(saved ? JSON.parse(saved) : [])
        } catch {}
      }
    }

    window.addEventListener('user:changed', handleUserChange as any)
    window.addEventListener('storage', handleStorage)
    return () => {
      window.removeEventListener('user:changed', handleUserChange as any)
      window.removeEventListener('storage', handleStorage)
    }
  }, [userId])

  const addToWishlist = (item: WishlistItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) return prev
      return [...prev, item]
    })
  }

  const removeFromWishlist = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const isInWishlist = (id: number) => {
    return items.some(item => item.id === id)
  }

  const clearWishlist = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.length
  }

  return (
    <WishlistContext.Provider value={{
      items,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
      clearWishlist,
      getTotalItems
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider')
  }
  return context
}
