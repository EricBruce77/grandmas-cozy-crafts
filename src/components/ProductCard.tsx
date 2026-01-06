"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import Badge from "./Badge";
import StarRating from "./StarRating";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);
    addItem(product, 1);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const discountPercentage = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <Link href={`/shop/${product.id}`} className="group block">
      <div className="card p-0 overflow-hidden h-full flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-background">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {!product.inStock && <Badge variant="out-of-stock" />}
            {product.bestSeller && product.inStock && <Badge variant="best-seller" />}
            {product.compareAtPrice && product.inStock && <Badge variant="sale" />}
          </div>

          {/* Add to Cart Button - Shows on Hover */}
          {product.inStock && (
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="
                absolute bottom-3 right-3
                bg-primary text-white p-3 rounded-full
                opacity-0 group-hover:opacity-100
                transform translate-y-2 group-hover:translate-y-0
                transition-all duration-200
                hover:bg-primary-dark hover:scale-110
                disabled:opacity-50
                shadow-warm-lg
              "
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>

          <p className="text-sm text-text-secondary line-clamp-2 mb-3 flex-1">
            {product.description}
          </p>

          {/* Rating */}
          <div className="mb-3">
            <StarRating rating={5} size="sm" showCount reviewCount={12} />
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <>
                <span className="text-sm text-text-secondary line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
                <span className="text-xs font-semibold text-red-600">
                  Save {discountPercentage}%
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
