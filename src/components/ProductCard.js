'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}/`} className="group">
      <div className="bg-chix-gray border border-gray-800 hover:border-gray-600 transition-all duration-300">
        <div className="aspect-[3/4] relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="minimal-text text-white text-sm">SOLD OUT</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="minimal-title text-white text-sm mb-2">
            {product.name}
          </h3>
          <p className="minimal-text text-gray-400 text-xs mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="minimal-text text-white font-medium">
              ${product.price}
            </span>
            <span className="minimal-text text-xs text-gray-500 uppercase">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
