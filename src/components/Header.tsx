"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import MobileMenu from "./MobileMenu";
import CartPanel from "./CartPanel";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state, openCart } = useCart();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          sticky top-0 z-30 bg-background-card transition-shadow duration-200
          ${isScrolled ? "shadow-warm" : ""}
        `}
      >
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-4 border-b border-border">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-background rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-primary font-playfair leading-tight">
                  Grandma's Cozy Crafts
                </h1>
                <p className="text-sm text-text-secondary hidden sm:block">
                  Handmade with Love
                </p>
              </div>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={openCart}
                className="relative p-2 hover:bg-background rounded-lg transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block py-4">
            <ul className="flex items-center justify-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-text-primary hover:text-primary transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Cart Panel */}
      <CartPanel />
    </>
  );
}
