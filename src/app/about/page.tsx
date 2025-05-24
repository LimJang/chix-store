'use client'

import React from 'react'
import ChixLogo from '@/components/ChixLogo'

export default function AboutPage() {
  return (
    <div className=\"min-h-screen bg-black text-white py-12\">
      <div className=\"minimal-container\">
        {/* Hero Section */}
        <div className=\"text-center py-24\">
          <ChixLogo size=\"xl\" className=\"mb-8\" />
          <h1 className=\"minimal-title text-4xl md:text-6xl mb-6\">
            ABOUT CHIX
          </h1>
          <p className=\"minimal-text text-xl text-gray-300 max-w-2xl mx-auto\">
            Redefining luxury through minimal design and uncompromising quality
          </p>
        </div>

        {/* Story Section */}
        <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24\">
          <div>
            <h2 className=\"minimal-title text-3xl mb-8\">OUR STORY</h2>
            <div className=\"space-y-6 minimal-text text-gray-300 leading-relaxed\">
              <p>
                Born from the belief that true luxury lies in simplicity, CHIX represents a new era of fashion consciousness. Our journey began with a simple question: What if we stripped away everything unnecessary?
              </p>
              <p>
                Inspired by the architectural philosophy of 'less is more' and the aesthetic minimalism of modern icons, we create pieces that speak through their silence. Each item in our collection is carefully curated to embody timeless elegance.
              </p>
              <p>
                Our Old English 'C' symbol represents our commitment to classical values while embracing contemporary innovation. It's a mark of quality, authenticity, and the pursuit of perfection through reduction.
              </p>
            </div>
          </div>
          
          <div className=\"bg-chix-gray border border-gray-800 p-12 flex items-center justify-center\">
            <div className=\"text-center\">
              <ChixLogo size=\"lg\" className=\"mb-6\" />
              <p className=\"minimal-text text-gray-400 italic\">
                \"Simplicity is the ultimate sophistication\"
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className=\"py-24 border-t border-gray-800\">
          <h2 className=\"minimal-title text-3xl text-center mb-16\">OUR VALUES</h2>
          
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-12\">
            <div className=\"text-center\">
              <div className=\"w-16 h-16 border border-white mx-auto mb-6 flex items-center justify-center\">
                <span className=\"minimal-title text-2xl\">M</span>
              </div>
              <h3 className=\"minimal-title text-xl mb-4\">MINIMAL</h3>
              <p className=\"minimal-text text-gray-400\">
                Every design decision is intentional. We remove the superfluous to reveal the essential.
              </p>
            </div>
            
            <div className=\"text-center\">
              <div className=\"w-16 h-16 border border-white mx-auto mb-6 flex items-center justify-center\">
                <span className=\"minimal-title text-2xl\">Q</span>
              </div>
              <h3 className=\"minimal-title text-xl mb-4\">QUALITY</h3>
              <p className=\"minimal-text text-gray-400\">
                Premium materials, ethical production, and meticulous craftsmanship in every piece.
              </p>
            </div>
            
            <div className=\"text-center\">
              <div className=\"w-16 h-16 border border-white mx-auto mb-6 flex items-center justify-center\">
                <span className=\"minimal-title text-2xl\">T</span>
              </div>
              <h3 className=\"minimal-title text-xl mb-4\">TIMELESS</h3>
              <p className=\"minimal-text text-gray-400\">
                Designs that transcend trends and seasons, built to be cherished for years.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className=\"py-24 border-t border-gray-800\">
          <div className=\"max-w-4xl mx-auto text-center\">
            <h2 className=\"minimal-title text-3xl mb-8\">OUR MISSION</h2>
            <p className=\"minimal-text text-xl text-gray-300 leading-relaxed mb-12\">
              To create a world where style is defined not by excess, but by intention. 
              Where every garment tells a story of thoughtful design, sustainable practices, 
              and the courage to be different in a world of noise.
            </p>
            
            <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8 text-left\">
              <div className=\"border border-gray-800 bg-chix-gray p-8\">
                <h3 className=\"minimal-title text-lg mb-4\">SUSTAINABILITY</h3>
                <p className=\"minimal-text text-gray-400\">
                  Committed to ethical sourcing, sustainable materials, and responsible production practices that respect both people and planet.
                </p>
              </div>
              
              <div className=\"border border-gray-800 bg-chix-gray p-8\">
                <h3 className=\"minimal-title text-lg mb-4\">INNOVATION</h3>
                <p className=\"minimal-text text-gray-400\">
                  Constantly pushing the boundaries of what minimal design can achieve while maintaining our core philosophy of simplicity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className=\"text-center py-24 border-t border-gray-800\">
          <h2 className=\"minimal-title text-3xl mb-6\">JOIN THE MOVEMENT</h2>
          <p className=\"minimal-text text-gray-400 mb-8 max-w-md mx-auto\">
            Become part of a community that values quality over quantity, intention over impulse.
          </p>
          <div className=\"flex flex-col md:flex-row gap-4 justify-center\">
            <a 
              href=\"mailto:hello@chix.com\"
              className=\"border border-white px-8 py-3 minimal-text hover:bg-white hover:text-black transition-all duration-300\"
            >
              GET IN TOUCH
            </a>
            <a 
              href=\"/products\"
              className=\"border border-gray-600 px-8 py-3 minimal-text hover:border-white transition-all duration-300\"
            >
              EXPLORE COLLECTION
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
