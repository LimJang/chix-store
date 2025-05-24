'use client'

import React from 'react'

interface ChixLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export default function ChixLogo({ size = 'md', className = '' }: ChixLogoProps) {
  const sizeClasses = {
    sm: 'text-4xl',
    md: 'text-6xl',
    lg: 'text-8xl',
    xl: 'text-9xl'
  }

  return (
    <div className={`old-english-c ${sizeClasses[size]} ${className}`}>
      <span className="inline-block transform hover:scale-105 transition-transform duration-300">
        C
      </span>
    </div>
  )
}
