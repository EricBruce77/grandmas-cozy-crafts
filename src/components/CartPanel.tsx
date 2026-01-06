"use client";

import { useCart } from "@/context/CartContext";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import QuantitySelector from "./QuantitySelector";

export default function CartPanel() {
  const { state, closeCart, isCartOpen, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Cart Panel */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background-card shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-text-primary">
                  Shopping Cart
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-background rounded-lg transition-colors"
                aria-label="Close cart"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-20 h-20 text-border mb-4" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Add some handmade treasures to get started!
                  </p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="btn-primary"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div
                      key={`${item.id}-${item.customization || ""}`}
                      className="flex gap-4 p-4 rounded-lg bg-background hover:shadow-warm transition-shadow"
                    >
                      {/* Product Image */}
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/shop/${item.id}`}
                          onClick={closeCart}
                          className="font-semibold text-text-primary hover:text-primary transition-colors line-clamp-1"
                        >
                          {item.name}
                        </Link>

                        {item.customization && (
                          <p className="text-xs text-text-secondary mt-1">
                            {item.customization}
                          </p>
                        )}

                        <p className="text-primary font-bold mt-1">
                          ${item.price.toFixed(2)}
                        </p>

                        {/* Quantity Selector */}
                        <div className="mt-2 flex items-center gap-3">
                          <QuantitySelector
                            quantity={item.quantity}
                            onChange={(qty) => updateQuantity(item.id, qty)}
                            size="sm"
                          />

                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Line Total */}
                      <div className="text-right flex-shrink-0">
                        <p className="font-bold text-text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between text-lg">
                  <span className="font-semibold text-text-primary">Subtotal:</span>
                  <span className="font-bold text-primary text-xl">
                    ${state.subtotal.toFixed(2)}
                  </span>
                </div>

                <p className="text-sm text-text-secondary">
                  Shipping and taxes calculated at checkout
                </p>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="block w-full text-center btn-primary"
                  >
                    Checkout
                  </Link>

                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="block w-full text-center btn-outline"
                  >
                    View Cart
                  </Link>

                  <button
                    onClick={closeCart}
                    className="w-full text-center text-text-secondary hover:text-primary transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
