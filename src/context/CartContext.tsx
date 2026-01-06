"use client";

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { CartState, CartAction, CartItem, Product } from '@/types';
import toast from 'react-hot-toast';

interface CartContextType {
  state: CartState;
  addItem: (product: Product, quantity?: number, customization?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const calculateSubtotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newItems: CartItem[];

  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.customization === action.customization
      );

      if (existingItemIndex > -1) {
        newItems = [...state.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + (action.quantity || 1),
        };
      } else {
        newItems = [
          ...state.items,
          {
            ...action.payload,
            quantity: action.quantity || 1,
            customization: action.customization,
          },
        ];
      }

      return {
        items: newItems,
        subtotal: calculateSubtotal(newItems),
        itemCount: calculateItemCount(newItems),
      };

    case 'REMOVE_ITEM':
      newItems = state.items.filter(item => item.id !== action.payload);
      return {
        items: newItems,
        subtotal: calculateSubtotal(newItems),
        itemCount: calculateItemCount(newItems),
      };

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        newItems = state.items.filter(item => item.id !== action.payload.id);
      } else {
        newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
      return {
        items: newItems,
        subtotal: calculateSubtotal(newItems),
        itemCount: calculateItemCount(newItems),
      };

    case 'CLEAR_CART':
      return {
        items: [],
        subtotal: 0,
        itemCount: 0,
      };

    case 'LOAD_CART':
      return {
        items: action.payload,
        subtotal: calculateSubtotal(action.payload),
        itemCount: calculateItemCount(action.payload),
      };

    default:
      return state;
  }
};

export function CartProvider({ children }: { children: ReactNode }) {
  const initialState: CartState = {
    items: [],
    subtotal: 0,
    itemCount: 0,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isInitialized, setIsInitialized] = React.useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('grandmas-cart');
      if (savedCart) {
        const items = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: items });
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem('grandmas-cart', JSON.stringify(state.items));
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    }
  }, [state.items, isInitialized]);

  const addItem = (product: Product, quantity = 1, customization?: string) => {
    dispatch({ type: 'ADD_ITEM', payload: product, quantity, customization });
    toast.success(`${product.name} added to cart!`);
    setIsCartOpen(true);
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
    toast.success('Item removed from cart');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.success('Cart cleared');
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
