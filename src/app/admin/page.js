'use client'

import { useState } from 'react'
import { mockProducts } from '@/lib/products'
import Image from 'next/image'
import { Plus, Edit, Trash2 } from 'lucide-react'

export default function AdminPage() {
  const [products, setProducts] = useState(mockProducts)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: '',
    category: 'fashion',
    image: '',
    inStock: true
  })

  const handleAddProduct = (e) => {
    e.preventDefault()
    const product = {
      id: Math.max(...products.map(p => p.id)) + 1,
      ...newProduct
    }
    setProducts([...products, product])
    setNewProduct({
      name: '',
      price: 0,
      description: '',
      category: 'fashion',
      image: '',
      inStock: true
    })
    setShowAddForm(false)
    alert('Product added successfully! (Demo mode)')
  }

  const handleDeleteProduct = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="minimal-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="minimal-title text-3xl md:text-4xl mb-2">ADMIN DASHBOARD</h1>
            <p className="minimal-text text-gray-400">Manage your CHIX collection</p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-white text-black px-6 py-3 minimal-text hover:bg-gray-200 transition-colors"
          >
            <Plus className="w-4 h-4" />
            ADD PRODUCT
          </button>
        </div>

        {/* Add Product Form */}
        {showAddForm && (
          <div className="mb-12 border border-gray-800 bg-chix-gray p-6">
            <h2 className="minimal-title text-xl mb-6">ADD NEW PRODUCT</h2>
            <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="minimal-text text-sm text-gray-400 block mb-2">
                  PRODUCT NAME
                </label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="w-full bg-black border border-gray-800 px-4 py-3 minimal-text text-white focus:border-gray-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="minimal-text text-sm text-gray-400 block mb-2">
                  PRICE ($)
                </label>
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value)})}
                  className="w-full bg-black border border-gray-800 px-4 py-3 minimal-text text-white focus:border-gray-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="minimal-text text-sm text-gray-400 block mb-2">
                  CATEGORY
                </label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  className="w-full bg-black border border-gray-800 px-4 py-3 minimal-text text-white focus:border-gray-600 focus:outline-none"
                >
                  <option value="fashion">Fashion</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>

              <div>
                <label className="minimal-text text-sm text-gray-400 block mb-2">
                  IMAGE URL
                </label>
                <input
                  type="url"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                  className="w-full bg-black border border-gray-800 px-4 py-3 minimal-text text-white focus:border-gray-600 focus:outline-none"
                  placeholder="https://images.unsplash.com/..."
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="minimal-text text-sm text-gray-400 block mb-2">
                  DESCRIPTION
                </label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  className="w-full bg-black border border-gray-800 px-4 py-3 minimal-text text-white focus:border-gray-600 focus:outline-none h-24"
                  required
                />
              </div>

              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-3 minimal-text hover:bg-gray-200 transition-colors"
                >
                  ADD PRODUCT
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="border border-gray-600 px-6 py-3 minimal-text hover:border-white transition-colors"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="border border-gray-800 bg-chix-gray p-6 text-center">
            <div className="minimal-title text-2xl mb-2">{products.length}</div>
            <div className="minimal-text text-gray-400">Total Products</div>
          </div>
          <div className="border border-gray-800 bg-chix-gray p-6 text-center">
            <div className="minimal-title text-2xl mb-2">{products.filter(p => p.inStock).length}</div>
            <div className="minimal-text text-gray-400">In Stock</div>
          </div>
          <div className="border border-gray-800 bg-chix-gray p-6 text-center">
            <div className="minimal-title text-2xl mb-2">{products.filter(p => p.category === 'fashion').length}</div>
            <div className="minimal-text text-gray-400">Fashion Items</div>
          </div>
          <div className="border border-gray-800 bg-chix-gray p-6 text-center">
            <div className="minimal-title text-2xl mb-2">{products.filter(p => p.category === 'accessories').length}</div>
            <div className="minimal-text text-gray-400">Accessories</div>
          </div>
        </div>

        {/* Simple Products List */}
        <div className="border border-gray-800 bg-chix-gray p-6">
          <h2 className="minimal-title text-xl mb-6">PRODUCTS ({products.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border border-gray-700 p-4 bg-black">
                <div className="aspect-[3/4] relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="minimal-text font-medium mb-2">{product.name}</h3>
                <p className="minimal-text text-gray-400 text-sm mb-2">${product.price}</p>
                <div className="flex justify-between items-center">
                  <span className={`minimal-text text-xs ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                  <button 
                    onClick={() => handleDeleteProduct(product.id)}
                    className="p-2 hover:bg-red-900 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
