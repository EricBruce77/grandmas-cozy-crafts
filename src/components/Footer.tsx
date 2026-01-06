import Link from "next/link";
import { Heart, Mail, Phone, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 fill-white" />
              <h3 className="text-xl font-bold font-playfair">
                Grandma's Cozy Crafts
              </h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Every item in our shop is lovingly handmade with care and
              attention to detail. We believe in creating treasures that bring
              warmth and comfort to your home.
            </p>
            <p className="mt-4 text-sm text-white/80 italic">
              Made with ❤️ by Grandma
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-playfair mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-white/90 hover:text-white hover:underline transition-colors"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-xl font-bold font-playfair mb-4">
              Get in Touch
            </h3>

            <div className="space-y-3 mb-6">
              <a
                href="mailto:hello@grandmascozycrafts.com"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@grandmascozycrafts.com</span>
              </a>
              <a
                href="tel:+15555551234"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(555) 555-1234</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold mb-3">Join Our Newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent hover:bg-accent-dark text-text-primary font-semibold rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-white/70 mt-2">
                We respect your privacy and never share your information.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            &copy; {currentYear} Grandma's Cozy Crafts. All rights reserved.
          </p>
          <p className="text-sm text-white/70 mt-2">
            Each piece is handcrafted with love and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
