'use client'

import { useState } from 'react'
import { mockProducts } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import { Search, Filter } from 'lucide-react'

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fashion' | 'accessories'>('all')
  
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="minimal-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="minimal-title text-4xl md:text-5xl mb-4">
            COLLECTION
          </h1>
          <p className="minimal-text text-gray-400">
            Curated pieces for the discerning individual
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-chix-gray border border-gray-800 px-12 py-3 minimal-text text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 minimal-text border transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'border-white bg-white text-black'
                  : 'border-gray-800 hover:border-gray-600'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setSelectedCategory('fashion')}
              className={`px-6 py-3 minimal-text border transition-all duration-300 ${
                selectedCategory === 'fashion'
                  ? 'border-white bg-white text-black'
                  : 'border-gray-800 hover:border-gray-600'
              }`}
            >
              FASHION
            </button>
            <button
              onClick={() => setSelectedCategory('accessories')}
              className={`px-6 py-3 minimal-text border transition-all duration-300 ${
                selectedCategory === 'accessories'
                  ? 'border-white bg-white text-black'
                  : 'border-gray-800 hover:border-gray-600'
              }`}
            >
              ACCESSORIES
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="minimal-text text-gray-500 text-lg">
              No products found matching your criteria
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-12">
          <p className="minimal-text text-gray-500">
            Showing {filteredProducts.length} of {mockProducts.length} products
          </p>
        </div>
      </div>
    </div>
  )
}
