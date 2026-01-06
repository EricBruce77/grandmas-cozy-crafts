import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-20">
            {/* 404 Image/Icon */}
            <div className="mb-8">
              <div className="text-9xl font-bold text-primary opacity-20 font-playfair">
                404
              </div>
            </div>

            {/* Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-playfair">
              Oops! Page Not Found
            </h1>

            <p className="text-xl text-text-secondary mb-8">
              Looks like this page wandered off to the sewing room! We can't seem to find
              what you're looking for.
            </p>

            {/* Suggestions */}
            <div className="bg-background-card rounded-xl p-8 mb-8">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                Here's what you can do:
              </h2>
              <ul className="text-left space-y-3 text-text-secondary max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Check the URL for typos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Go back to the homepage and start over</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Browse our shop for handmade treasures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Contact us if you need help finding something</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>

              <Link href="/shop" className="btn-outline flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Browse Shop
              </Link>
            </div>

            {/* Help Link */}
            <div className="mt-12">
              <p className="text-text-secondary">
                Still can't find what you're looking for?{" "}
                <Link href="/contact" className="text-primary hover:underline font-semibold">
                  Contact us
                </Link>{" "}
                and we'll be happy to help!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
