import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CHIX - Premium Fashion & Accessories',
  description: 'Minimal luxury fashion and accessories brand inspired by Kanye West aesthetics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navigation />
          <main className="pt-20">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  )
}
