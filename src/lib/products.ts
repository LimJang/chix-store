// Mock product data for demo
export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: 'fashion' | 'accessories'
  inStock: boolean
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "MINIMAL TEE",
    price: 120,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
    description: "Premium cotton oversized tee with minimal branding",
    category: "fashion",
    inStock: true
  },
  {
    id: 2,
    name: "ESSENTIAL HOODIE",
    price: 280,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
    description: "Heavyweight cotton hoodie in classic black",
    category: "fashion",
    inStock: true
  },
  {
    id: 3,
    name: "CHAIN NECKLACE",
    price: 450,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop",
    description: "Sterling silver chain with minimal pendant",
    category: "accessories",
    inStock: true
  },
  {
    id: 4,
    name: "LEATHER WALLET",
    price: 180,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
    description: "Handcrafted Italian leather wallet",
    category: "accessories",
    inStock: true
  },
  {
    id: 5,
    name: "OVERSIZED COAT",
    price: 680,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
    description: "Wool blend oversized coat in charcoal",
    category: "fashion",
    inStock: false
  },
  {
    id: 6,
    name: "MINIMALIST WATCH",
    price: 320,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop",
    description: "Swiss movement with leather strap",
    category: "accessories",
    inStock: true
  },
  {
    id: 7,
    name: "CARGO PANTS",
    price: 240,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
    description: "Technical fabric cargo pants",
    category: "fashion",
    inStock: true
  },
  {
    id: 8,
    name: "SIGNATURE CAP",
    price: 95,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
    description: "Embroidered logo cap in black",
    category: "accessories",
    inStock: true
  }
]
