"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import QuantitySelector from "@/components/QuantitySelector";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  const shipping = state.subtotal > 75 ? 0 : 8.99;
  const tax = state.subtotal * 0.08; // 8% tax
  const total = state.subtotal + shipping + tax;

  if (state.items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-8">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Breadcrumb items={[{ label: "Shopping Cart" }]} />
            </div>

            <div className="max-w-4xl mx-auto text-center py-20">
              <ShoppingBag className="w-24 h-24 text-border mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-text-primary mb-4 font-playfair">
                Your Cart is Empty
              </h1>
              <p className="text-text-secondary mb-8">
                Add some handmade treasures to get started!
              </p>
              <Link href="/shop" className="btn-primary">
                Start Shopping
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Shopping Cart" }]} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 font-playfair">
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Header - Desktop Only */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-border font-semibold text-text-secondary text-sm">
                <div className="col-span-6">PRODUCT</div>
                <div className="col-span-2 text-center">PRICE</div>
                <div className="col-span-2 text-center">QUANTITY</div>
                <div className="col-span-2 text-right">TOTAL</div>
              </div>

              {/* Cart Items */}
              {state.items.map((item) => (
                <div
                  key={`${item.id}-${item.customization || ""}`}
                  className="card p-4 md:p-6"
                >
                  <div className="grid md:grid-cols-12 gap-4 items-center">
                    {/* Product Info */}
                    <div className="md:col-span-6 flex gap-4">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/shop/${item.id}`}
                          className="font-semibold text-text-primary hover:text-primary transition-colors line-clamp-2"
                        >
                          {item.name}
                        </Link>

                        {item.customization && (
                          <p className="text-sm text-text-secondary mt-1">
                            {item.customization}
                          </p>
                        )}

                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700 mt-2 md:hidden"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                      <span className="md:hidden text-text-secondary">Price:</span>
                      <span className="font-semibold text-text-primary">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                      <span className="md:hidden text-text-secondary">Qty:</span>
                      <QuantitySelector
                        quantity={item.quantity}
                        onChange={(qty) => updateQuantity(item.id, qty)}
                        max={item.stockCount}
                        size="sm"
                      />
                    </div>

                    {/* Total */}
                    <div className="md:col-span-2 flex md:justify-end items-center gap-2">
                      <span className="md:hidden text-text-secondary">Total:</span>
                      <span className="font-bold text-primary text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="hidden md:block ml-4 p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Cart */}
              <div className="flex justify-between items-center pt-4">
                <Link href="/shop" className="text-primary hover:underline flex items-center gap-2">
                  Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:underline text-sm"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="card p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-text-primary mb-6 font-playfair">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal ({state.itemCount} items)</span>
                    <span>${state.subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-text-secondary">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  {shipping === 0 ? (
                    <p className="text-sm text-success">
                      🎉 You qualify for free shipping!
                    </p>
                  ) : (
                    <p className="text-sm text-text-secondary">
                      Add ${(75 - state.subtotal).toFixed(2)} more for free shipping
                    </p>
                  )}

                  <div className="flex justify-between text-text-secondary">
                    <span>Tax (estimated)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary text-2xl">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Discount Code */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Discount Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="input-field flex-1"
                    />
                    <button className="btn-outline px-4">Apply</button>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link href="/checkout" className="block w-full">
                  <button className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2">
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                <p className="text-xs text-text-secondary text-center mt-4">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
