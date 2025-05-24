'use client'

import Link from 'next/link'
import { ShoppingBag, User, Search } from 'lucide-react'
import ChixLogo from './ChixLogo'
import { useCart } from '@/context/CartContext'

export default function Navigation() {
  const { itemCount } = useCart()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="minimal-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <ChixLogo size="sm" />
            <span className="ml-4 minimal-title text-white text-xl">CHIX</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex space-x-12">
            <Link href="/" className="minimal-text text-white hover:text-gray-300 transition-colors">
              HOME
            </Link>
            <Link href="/products" className="minimal-text text-white hover:text-gray-300 transition-colors">
              PRODUCTS
            </Link>
            <Link href="/about" className="minimal-text text-white hover:text-gray-300 transition-colors">
              ABOUT
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
            <Link href="/auth/login">
              <User className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingBag className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
