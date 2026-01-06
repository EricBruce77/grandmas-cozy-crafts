export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  inStock: boolean;
  stockCount: number;
  featured: boolean;
  bestSeller: boolean;
  materials: string[];
  careInstructions: string;
  dimensions?: string;
  weight?: string;
  customizable: boolean;
  customizationOptions?: string[];
  createdAt: string;
}

export interface CartItem extends Product {
  quantity: number;
  customization?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  productPurchased: string;
  date: string;
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  itemCount: number;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: Product; quantity?: number; customization?: string }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };
