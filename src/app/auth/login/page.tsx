'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ChixLogo from '@/components/ChixLogo'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate login
    setTimeout(() => {
      alert('Login functionality will be implemented with Supabase!')
      setLoading(false)
    }, 1000)
  }

  return (
    <div className=\"min-h-screen bg-black text-white flex items-center justify-center py-12\">
      <div className=\"w-full max-w-md\">
        {/* Logo */}
        <div className=\"text-center mb-12\">
          <ChixLogo size=\"lg\" className=\"mb-4\" />
          <h1 className=\"minimal-title text-2xl\">WELCOME BACK</h1>
          <p className=\"minimal-text text-gray-400 mt-2\">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className=\"space-y-6\">
          <div>
            <label className=\"minimal-text text-sm text-gray-400 block mb-2\">
              EMAIL ADDRESS
            </label>
            <input
              type=\"email\"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=\"w-full bg-chix-gray border border-gray-800 px-4 py-3 minimal-text text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none\"
              placeholder=\"Enter your email\"
              required
            />
          </div>

          <div>
            <label className=\"minimal-text text-sm text-gray-400 block mb-2\">
              PASSWORD
            </label>
            <input
              type=\"password\"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=\"w-full bg-chix-gray border border-gray-800 px-4 py-3 minimal-text text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none\"
              placeholder=\"Enter your password\"
              required
            />
          </div>

          <div className=\"flex items-center justify-between\">
            <label className=\"flex items-center\">
              <input type=\"checkbox\" className=\"mr-2\" />
              <span className=\"minimal-text text-sm text-gray-400\">Remember me</span>
            </label>
            <Link href=\"/auth/forgot-password\" className=\"minimal-text text-sm text-gray-400 hover:text-white transition-colors\">
              Forgot password?
            </Link>
          </div>

          <button
            type=\"submit\"
            disabled={loading}
            className=\"w-full bg-white text-black py-3 minimal-text hover:bg-gray-200 transition-colors disabled:opacity-50\"
          >
            {loading ? 'SIGNING IN...' : 'SIGN IN'}
          </button>
        </form>

        {/* Social Login */}
        <div className=\"mt-8 pt-8 border-t border-gray-800\">
          <div className=\"space-y-3\">
            <button className=\"w-full border border-gray-800 py-3 minimal-text hover:border-gray-600 transition-colors\">
              CONTINUE WITH GOOGLE
            </button>
            <button className=\"w-full border border-gray-800 py-3 minimal-text hover:border-gray-600 transition-colors\">
              CONTINUE WITH APPLE
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className=\"text-center mt-8\">
          <p className=\"minimal-text text-gray-400\">
            Don't have an account?{' '}
            <Link href=\"/auth/register\" className=\"text-white hover:text-gray-300 transition-colors\">
              Create one
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className=\"text-center mt-6\">
          <Link href=\"/\" className=\"minimal-text text-gray-400 hover:text-white transition-colors text-sm\">
            ← Back to CHIX
          </Link>
        </div>
      </div>
    </div>
  )
}
