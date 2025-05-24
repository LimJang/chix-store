'use client'

import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext(undefined)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.product.id)
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        return calculateTotals({ ...state, items: updatedItems })
      } else {
        const newItems = [...state.items, { ...action.product, quantity: 1 }]
        return calculateTotals({ ...state, items: newItems })
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.id !== action.productId)
      return calculateTotals({ ...state, items: newItems })
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        const newItems = state.items.filter(item => item.id !== action.productId)
        return calculateTotals({ ...state, items: newItems })
      }
      
      const updatedItems = state.items.map(item =>
        item.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      )
      return calculateTotals({ ...state, items: updatedItems })
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 }
    
    case 'LOAD_CART':
      return calculateTotals({ ...state, items: action.items })
    
    default:
      return state
  }
}

const calculateTotals = (state) => {
  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  return { ...state, total, itemCount }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  })

  // Load cart from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('chix-cart')
      if (savedCart) {
        try {
          const items = JSON.parse(savedCart)
          dispatch({ type: 'LOAD_CART', items })
        } catch (error) {
          console.error('Error loading cart:', error)
        }
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('chix-cart', JSON.stringify(state.items))
    }
  }, [state.items])

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product })
  }

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId })
  }

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const contextValue = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
