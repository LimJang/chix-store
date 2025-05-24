import './globals.css'
import Navigation from '@/components/Navigation'
import { CartProvider } from '@/context/CartContext'

export const metadata = {
  title: 'CHIX - Premium Fashion & Accessories',
  description: 'Minimal luxury fashion and accessories brand inspired by Kanye West aesthetics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
