import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle, Package, Mail, Home } from "lucide-react";

export default function OrderConfirmationPage() {
  // In a real app, this would come from the order data
  const orderNumber = `GCC${Math.floor(Math.random() * 10000000)}`;
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" }
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Success Message */}
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-playfair">
                Thank You for Your Order!
              </h1>

              <p className="text-xl text-text-secondary mb-8">
                Your order has been received and is being carefully prepared with love.
              </p>
            </div>

            {/* Order Details */}
            <div className="card p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h2 className="font-semibold text-text-primary mb-2">Order Number</h2>
                  <p className="text-2xl font-bold text-primary">{orderNumber}</p>
                </div>

                <div>
                  <h2 className="font-semibold text-text-primary mb-2">
                    Estimated Delivery
                  </h2>
                  <p className="text-lg text-text-secondary">{estimatedDelivery}</p>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      Confirmation Email Sent
                    </h3>
                    <p className="text-text-secondary">
                      We've sent a confirmation email with your order details and tracking
                      information. Please check your inbox!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-6 font-playfair">
                What Happens Next?
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Order Confirmation
                    </h3>
                    <p className="text-text-secondary">
                      You'll receive a confirmation email with your order details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Careful Crafting & Packaging
                    </h3>
                    <p className="text-text-secondary">
                      I'll prepare your items with extra care and package them securely.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Shipping</h3>
                    <p className="text-text-secondary">
                      Your order will ship within 2-3 business days, and you'll receive
                      tracking information.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Delivery</h3>
                    <p className="text-text-secondary">
                      Enjoy your handmade treasure! We hope it brings warmth and comfort to
                      your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="flex-1">
                <button className="w-full btn-primary flex items-center justify-center gap-2">
                  <Package className="w-5 h-5" />
                  Continue Shopping
                </button>
              </Link>

              <Link href="/" className="flex-1">
                <button className="w-full btn-outline flex items-center justify-center gap-2">
                  <Home className="w-5 h-5" />
                  Back to Home
                </button>
              </Link>
            </div>

            {/* Help */}
            <div className="mt-12 text-center">
              <p className="text-text-secondary mb-4">
                Have questions about your order?
              </p>
              <Link href="/contact" className="text-primary hover:underline font-semibold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
