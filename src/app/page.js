'use client'

import ChixLogo from '@/components/ChixLogo'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <ChixLogo size="xl" className="mb-8" />
          <h1 className="minimal-title text-4xl md:text-6xl mb-6">
            CHIX
          </h1>
          <p className="minimal-text text-lg md:text-xl text-gray-300 mb-12 max-w-md">
            PREMIUM FASHION & ACCESSORIES
          </p>
          <Link 
            href="/products/"
            className="inline-block border border-white px-12 py-4 minimal-text hover:bg-white hover:text-black transition-all duration-300"
          >
            EXPLORE COLLECTION
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24">
        <div className="minimal-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="minimal-title text-xl mb-4">MINIMAL</h3>
              <p className="minimal-text text-gray-400">
                Less is more. Pure aesthetic.
              </p>
            </div>
            <div className="text-center">
              <h3 className="minimal-title text-xl mb-4">QUALITY</h3>
              <p className="minimal-text text-gray-400">
                Premium materials only.
              </p>
            </div>
            <div className="text-center">
              <h3 className="minimal-title text-xl mb-4">EXCLUSIVE</h3>
              <p className="minimal-text text-gray-400">
                Limited collections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 border-t border-gray-800">
        <div className="minimal-container text-center">
          <h2 className="minimal-title text-3xl md:text-4xl mb-8">
            JOIN THE MOVEMENT
          </h2>
          <p className="minimal-text text-gray-400 mb-8 max-w-md mx-auto">
            Be part of the minimal luxury revolution
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/products/"
              className="border border-white px-8 py-3 minimal-text hover:bg-white hover:text-black transition-all duration-300"
            >
              SHOP NOW
            </Link>
            <Link 
              href="/about/"
              className="border border-gray-600 px-8 py-3 minimal-text hover:border-white transition-all duration-300"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
