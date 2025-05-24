'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Plus, Minus } from 'lucide-react'
import { mockProducts } from '@/lib/products'
import { useCart } from '@/context/CartContext'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = parseInt(params.id)
  const product = mockProducts.find(p => p.id === productId)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="minimal-title text-2xl mb-4">PRODUCT NOT FOUND</h1>
          <Link href="/products" className="minimal-text border border-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
            BACK TO COLLECTION
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="minimal-container">
        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center mb-8 minimal-text text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          BACK TO COLLECTION
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-[3/4] relative bg-chix-gray">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="minimal-text text-white text-lg">SOLD OUT</span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <span className="minimal-text text-gray-400 text-sm uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="minimal-title text-4xl md:text-5xl mt-2 mb-6">
                {product.name}
              </h1>
              <p className="minimal-text text-gray-300 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>
              <div className="text-3xl minimal-text font-light mb-8">
                ${product.price}
              </div>
            </div>

            {product.inStock && (
              <>
                {/* Quantity Selector */}
                <div className="mb-8">
                  <label className="minimal-text text-sm text-gray-400 mb-4 block">
                    QUANTITY
                  </label>
                  <div className="flex items-center border border-gray-800 w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-800 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-3 minimal-text">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-800 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 minimal-text border transition-all duration-300 ${
                    addedToCart
                      ? 'border-green-500 bg-green-500 text-black'
                      : 'border-white hover:bg-white hover:text-black'
                  }`}
                >
                  {addedToCart ? 'ADDED TO CART' : 'ADD TO CART'}
                </button>
              </>
            )}

            {!product.inStock && (
              <div className="border border-gray-600 py-4 text-center minimal-text text-gray-500">
                OUT OF STOCK
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
