'use client'

import React, { useState } from 'react'
import { mockProducts, Product } from '@/lib/products'
import Image from 'next/image'
import { Plus, Edit, Trash2, Upload } from 'lucide-react'

export default function AdminPage() {
  const [products, setProducts] = useState(mockProducts)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: '',
    category: 'fashion' as 'fashion' | 'accessories',
    image: '',
    inStock: true
  })

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    const product: Product = {
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

  const handleDeleteProduct = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id))
    }
  }

  return (
    <div className=\"min-h-screen bg-black text-white py-12\">
      <div className=\"minimal-container\">
        {/* Header */}
        <div className=\"flex items-center justify-between mb-12\">
          <div>
            <h1 className=\"minimal-title text-3xl md:text-4xl mb-2\">ADMIN DASHBOARD</h1>
            <p className=\"minimal-text text-gray-400\">Manage your CHIX collection</p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className=\"flex items-center gap-2 bg-white text-black px-6 py-3 minimal-text hover:bg-gray-200 transition-colors\"
          >
            <Plus className=\"w-4 h-4\" />
            ADD PRODUCT
          </button>
        </div>

        {/* Add Product Form */}
        {showAddForm && (
          <div className=\"mb-12 border border-gray-800 bg-chix-gray p-6\">
            <h2 className=\"minimal-title text-xl mb-6\">ADD NEW PRODUCT</h2>
            <form onSubmit={handleAddProduct} className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">
              <div>
                <label className=\"minimal-text text-sm text-gray-400 block mb-2\">
                  PRODUCT NAME
                </label>
                <input
                  type=\"text\"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className=\"w-full bg-black border border-gray-800 px-4 py-3 minimal-text text-white focus:border-gray-600 focus:outline-none\"
                  required
                />
              </div>

              <div>
                <label className=\"minimal-text text-sm text-gray-400 block mb-2\">
                  PRICE ($)
                </label>
                <input
                  type=\"number\"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value)})}
                  className=\"w-full bg-black border border-gray-800 px-4 py-3 minimal-text text-white focus:border-gray-600 focus:outline-none\"
                  required
                />
              </div>

              <div>
                <label className=\"minimal-text text-sm text-gray-400 block mb-2\">
                  CATEGORY
                </label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value as 'fashion' | 'accessories'})}
                  className=\"w-full bg-black border border-gray-800 px-4 py-3 minimal-text text-white focus:border-gray-600 focus:outline-none\"
                >
                  <option value=\"fashion\">Fashion</option>
                  <option value=\"accessories\">Accessories</option>
                </select>
              </div>

              <div>
                <label className=\"minimal-text text-sm text-gray-400 block mb-2\">
                  IMAGE URL
                </label>
                <input
                  type=\"url\"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                  className=\"w-full bg-black border border-gray-800 px-4 py-3 minimal-text text-white focus:border-gray-600 focus:outline-none\"
                  placeholder=\"https://images.unsplash.com/...\"
                  required
                />
              </div>

              <div className=\"md:col-span-2\">
                <label className=\"minimal-text text-sm text-gray-400 block mb-2\">
                  DESCRIPTION
                </label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  className=\"w-full bg-black border border-gray-800 px-4 py-3 minimal-text text-white focus:border-gray-600 focus:outline-none h-24\"
                  required
                />
              </div>

              <div className=\"md:col-span-2 flex items-center gap-4\">
                <label className=\"flex items-center\">
                  <input
                    type=\"checkbox\"
                    checked={newProduct.inStock}
                    onChange={(e) => setNewProduct({...newProduct, inStock: e.target.checked})}
                    className=\"mr-2\"
                  />
                  <span className=\"minimal-text text-sm\">In Stock</span>
                </label>
              </div>

              <div className=\"md:col-span-2 flex gap-4\">
                <button
                  type=\"submit\"
                  className=\"bg-white text-black px-6 py-3 minimal-text hover:bg-gray-200 transition-colors\"
                >
                  ADD PRODUCT
                </button>
                <button
                  type=\"button\"
                  onClick={() => setShowAddForm(false)}
                  className=\"border border-gray-600 px-6 py-3 minimal-text hover:border-white transition-colors\"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products Table */}
        <div className=\"border border-gray-800 bg-chix-gray\">
          <div className=\"p-6 border-b border-gray-800\">
            <h2 className=\"minimal-title text-xl\">PRODUCTS ({products.length})</h2>
          </div>
          
          <div className=\"overflow-x-auto\">
            <table className=\"w-full\">
              <thead>
                <tr className=\"border-b border-gray-800\">
                  <th className=\"text-left p-4 minimal-text text-gray-400 text-sm\">IMAGE</th>
                  <th className=\"text-left p-4 minimal-text text-gray-400 text-sm\">NAME</th>
                  <th className=\"text-left p-4 minimal-text text-gray-400 text-sm\">CATEGORY</th>
                  <th className=\"text-left p-4 minimal-text text-gray-400 text-sm\">PRICE</th>
                  <th className=\"text-left p-4 minimal-text text-gray-400 text-sm\">STATUS</th>
                  <th className=\"text-left p-4 minimal-text text-gray-400 text-sm\">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className=\"border-b border-gray-800 hover:bg-black transition-colors\">
                    <td className=\"p-4\">
                      <div className=\"w-12 h-16 relative\">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className=\"object-cover\"
                        />
                      </div>
                    </td>
                    <td className=\"p-4\">
                      <div className=\"minimal-text font-medium\">{product.name}</div>
                      <div className=\"minimal-text text-gray-400 text-sm mt-1 line-clamp-1\">
                        {product.description}
                      </div>
                    </td>
                    <td className=\"p-4\">
                      <span className=\"minimal-text text-sm capitalize\">{product.category}</span>
                    </td>
                    <td className=\"p-4\">
                      <span className=\"minimal-text\">${product.price}</span>
                    </td>
                    <td className=\"p-4\">
                      <span className={`minimal-text text-sm ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                    <td className=\"p-4\">
                      <div className=\"flex gap-2\">
                        <button className=\"p-2 hover:bg-gray-700 rounded transition-colors\">
                          <Edit className=\"w-4 h-4\" />
                        </button>
                        <button 
                          onClick={() => handleDeleteProduct(product.id)}
                          className=\"p-2 hover:bg-red-900 rounded transition-colors\"
                        >
                          <Trash2 className=\"w-4 h-4\" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats */}
        <div className=\"grid grid-cols-1 md:grid-cols-4 gap-6 mt-12\">
          <div className=\"border border-gray-800 bg-chix-gray p-6 text-center\">
            <div className=\"minimal-title text-2xl mb-2\">{products.length}</div>
            <div className=\"minimal-text text-gray-400\">Total Products</div>
          </div>
          <div className=\"border border-gray-800 bg-chix-gray p-6 text-center\">
            <div className=\"minimal-title text-2xl mb-2\">{products.filter(p => p.inStock).length}</div>
            <div className=\"minimal-text text-gray-400\">In Stock</div>
          </div>
          <div className=\"border border-gray-800 bg-chix-gray p-6 text-center\">
            <div className=\"minimal-title text-2xl mb-2\">{products.filter(p => p.category === 'fashion').length}</div>
            <div className=\"minimal-text text-gray-400\">Fashion Items</div>
          </div>
          <div className=\"border border-gray-800 bg-chix-gray p-6 text-center\">
            <div className=\"minimal-title text-2xl mb-2\">{products.filter(p => p.category === 'accessories').length}</div>
            <div className=\"minimal-text text-gray-400\">Accessories</div>
          </div>
        </div>
      </div>
    </div>
  )
}
