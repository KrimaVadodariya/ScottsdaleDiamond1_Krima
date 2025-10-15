'use client'

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react'

interface CartItem {
  id: number
  name: string
  price: string
  image: string
  quantity: number
  category: string
  size?: string
  length?: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

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
  return `cart:${userId}`
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<string>('guest')
  const [items, setItems] = useState<CartItem[]>([])

  // Load initial user and cart
  useEffect(() => {
    const uid = getCurrentUserId()
    setUserId(uid)
    try {
      const saved = localStorage.getItem(storageKey(uid))
      if (saved) setItems(JSON.parse(saved))
    } catch {}
  }, [])

  // Persist cart whenever items or userId changes
  useEffect(() => {
    try {
      localStorage.setItem(storageKey(userId), JSON.stringify(items))
    } catch {}
  }, [items, userId])

  // React to login/logout (custom) and cross-tab changes
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

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(',', ''))
      return total + (price * item.quantity)
    }, 0)
  }

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
