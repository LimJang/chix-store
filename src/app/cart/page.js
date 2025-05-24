'use client'

import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { Plus, Minus, Trash2, ArrowLeft } from 'lucide-react'

export default function CartPage() {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="minimal-title text-3xl mb-4">YOUR CART IS EMPTY</h1>
          <p className="minimal-text text-gray-400 mb-8">
            Discover our minimal luxury collection
          </p>
          <Link 
            href="/products"
            className="inline-block border border-white px-8 py-3 minimal-text hover:bg-white hover:text-black transition-all duration-300"
          >
            EXPLORE COLLECTION
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="minimal-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link href="/products" className="inline-flex items-center mb-4 minimal-text text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              CONTINUE SHOPPING
            </Link>
            <h1 className="minimal-title text-3xl md:text-4xl">SHOPPING CART</h1>
          </div>
          <button
            onClick={clearCart}
            className="minimal-text text-gray-400 hover:text-white transition-colors"
          >
            CLEAR ALL
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6 p-6 border border-gray-800 bg-chix-gray">
                  {/* Product Image */}
                  <div className="w-24 h-32 relative flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="minimal-title text-lg">{item.name}</h3>
                        <p className="minimal-text text-gray-400 text-sm">{item.category}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-700">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-700 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 py-2 minimal-text text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-700 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="minimal-text text-lg">${item.price * item.quantity}</div>
                        <div className="minimal-text text-gray-400 text-xs">${item.price} each</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-gray-800 bg-chix-gray p-6 sticky top-32">
              <h2 className="minimal-title text-xl mb-6">ORDER SUMMARY</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between minimal-text">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between minimal-text text-gray-400">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between minimal-title text-lg">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>
              </div>

              <Link 
                href="/products"
                className="block w-full border border-gray-600 text-center py-3 minimal-text hover:border-white transition-colors"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
