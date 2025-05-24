'use client'

import { useState } from 'react'
import Link from 'next/link'
import ChixLogo from '@/components/ChixLogo'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate login
    setTimeout(() => {
      alert('Login functionality will be implemented with Supabase!')
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <ChixLogo size="lg" className="mb-4" />
          <h1 className="minimal-title text-2xl">WELCOME BACK</h1>
          <p className="minimal-text text-gray-400 mt-2">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="minimal-text text-sm text-gray-400 block mb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-chix-gray border border-gray-800 px-4 py-3 minimal-text text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="minimal-text text-sm text-gray-400 block mb-2">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-chix-gray border border-gray-800 px-4 py-3 minimal-text text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-3 minimal-text hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'SIGNING IN...' : 'SIGN IN'}
          </button>
        </form>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/" className="minimal-text text-gray-400 hover:text-white transition-colors text-sm">
            ← Back to CHIX
          </Link>
        </div>
      </div>
    </div>
  )
}
