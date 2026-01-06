"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Lock, CreditCard, Package, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const router = useRouter();
  const { state, clearCart } = useCart();

  const [formData, setFormData] = useState({
    // Contact
    email: "",
    // Shipping
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    // Payment
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    // Order notes
    notes: "",
  });

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateShipping = () => {
    if (state.subtotal > 75) return 0;
    if (shippingMethod === "express") return 14.99;
    return 8.99;
  };

  const shipping = calculateShipping();
  const tax = state.subtotal * 0.08;
  const total = state.subtotal + shipping + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Clear cart
    clearCart();

    toast.success("Order placed successfully!");
    router.push("/order-confirmation");
  };

  if (state.items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center py-20">
              <Package className="w-24 h-24 text-border mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-text-primary mb-4 font-playfair">
                Your cart is empty
              </h1>
              <p className="text-text-secondary mb-8">
                Add some items before checking out!
              </p>
              <Link href="/shop" className="btn-primary">
                Continue Shopping
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
            <Breadcrumb
              items={[{ label: "Cart", href: "/cart" }, { label: "Checkout" }]}
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 font-playfair">
            Secure Checkout
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-text-primary mb-6 font-playfair">
                    Contact Information
                  </h2>
                  <div>
                    <label className="block font-semibold text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-text-primary mb-6 font-playfair">
                    Shipping Address
                  </h2>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-text-primary mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-text-primary mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-text-primary mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Street address"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-text-primary mb-2">
                        Apartment, suite, etc. (optional)
                      </label>
                      <input
                        type="text"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-semibold text-text-primary mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-text-primary mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-text-primary mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-text-primary mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="(555) 555-1234"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-text-primary mb-6 font-playfair">
                    Shipping Method
                  </h2>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="radio"
                        name="shipping"
                        value="standard"
                        checked={shippingMethod === "standard"}
                        onChange={() => setShippingMethod("standard")}
                        className="w-5 h-5"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Standard Shipping</div>
                        <div className="text-sm text-text-secondary">5-7 business days</div>
                      </div>
                      <div className="font-bold">
                        {state.subtotal > 75 ? "FREE" : "$8.99"}
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={shippingMethod === "express"}
                        onChange={() => setShippingMethod("express")}
                        className="w-5 h-5"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Express Shipping</div>
                        <div className="text-sm text-text-secondary">2-3 business days</div>
                      </div>
                      <div className="font-bold">$14.99</div>
                    </label>
                  </div>
                </div>

                {/* Payment */}
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-text-primary mb-6 font-playfair flex items-center gap-2">
                    <Lock className="w-6 h-6" />
                    Payment Information
                  </h2>

                  <div className="bg-accent/10 border border-accent rounded-lg p-4 mb-6 flex items-start gap-3">
                    <Lock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      Your payment information is encrypted and secure. We use Stripe for
                      secure payment processing.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-semibold text-text-primary mb-2">
                        Card Number *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          className="input-field pl-12"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-text-primary mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Name on card"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-text-primary mb-2">
                          Expiration Date *
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-text-primary mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Notes */}
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-text-primary mb-6 font-playfair">
                    Order Notes (Optional)
                  </h2>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="input-field resize-none"
                    rows={4}
                    placeholder="Any special instructions or gift message?"
                  />
                </div>

                {/* Submit */}
                <div className="flex gap-4">
                  <Link href="/cart" className="btn-outline flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Cart
                  </Link>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? "Processing..." : "Place Order"}
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="card p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-text-primary mb-6 font-playfair">
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {state.items.map((item) => (
                    <div key={`${item.id}-${item.customization || ""}`} className="flex gap-3">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm line-clamp-1">{item.name}</p>
                        {item.customization && (
                          <p className="text-xs text-text-secondary">{item.customization}</p>
                        )}
                        <p className="text-sm font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal</span>
                    <span>${state.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold border-t border-border pt-3">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
                    <Lock className="w-4 h-4" />
                    <span>Secure checkout powered by Stripe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
