"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import StarRating from "@/components/StarRating";
import Badge from "@/components/Badge";
import QuantitySelector from "@/components/QuantitySelector";
import Accordion from "@/components/Accordion";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Heart, Check } from "lucide-react";
import toast from "react-hot-toast";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = React.use(params);
  const product = products.find((p) => p.id === resolvedParams.id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  const category = categories.find((c) => c.id === product.category);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, customization || undefined);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(
      isWishlisted ? "Removed from wishlist" : "Added to wishlist!"
    );
  };

  const discountPercentage = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
      )
    : 0;

  const accordionItems = [
    {
      title: "Description",
      content: product.longDescription,
    },
    {
      title: "Materials & Care",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Materials:</h4>
            <ul className="list-disc list-inside space-y-1">
              {product.materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Care Instructions:</h4>
            <p>{product.careInstructions}</p>
          </div>
          {product.dimensions && (
            <div>
              <h4 className="font-semibold mb-2">Dimensions:</h4>
              <p>{product.dimensions}</p>
            </div>
          )}
          {product.weight && (
            <div>
              <h4 className="font-semibold mb-2">Weight:</h4>
              <p>{product.weight}</p>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Shipping Information",
      content:
        "Most orders ship within 2-3 business days. Standard shipping takes 5-7 business days. Free shipping on orders over $75! Each item is carefully packaged to ensure it arrives in perfect condition.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: "Shop", href: "/shop" },
                { label: category?.name || "", href: `/shop/category/${category?.slug}` },
                { label: product.name },
              ]}
            />
          </div>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-background-card mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {!product.inStock && <Badge variant="out-of-stock" size="md" />}
                  {product.bestSeller && product.inStock && (
                    <Badge variant="best-seller" size="md" />
                  )}
                  {product.compareAtPrice && product.inStock && (
                    <Badge variant="sale" size="md" />
                  )}
                </div>
              </div>

              {/* Thumbnail Strip */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`
                        relative aspect-square rounded-lg overflow-hidden
                        ${
                          selectedImage === index
                            ? "ring-2 ring-primary"
                            : "opacity-60 hover:opacity-100"
                        }
                        transition-opacity
                      `}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - View ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-playfair">
                {product.name}
              </h1>

              <div className="mb-4">
                <StarRating rating={5} size="lg" showCount reviewCount={12} />
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                {product.compareAtPrice && (
                  <>
                    <span className="text-xl text-text-secondary line-through">
                      ${product.compareAtPrice.toFixed(2)}
                    </span>
                    <Badge variant="sale" size="md" />
                  </>
                )}
              </div>

              {/* Short Description */}
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <div className="flex items-center gap-2 text-success">
                    <Check className="w-5 h-5" />
                    <span className="font-semibold">In Stock ({product.stockCount} available)</span>
                  </div>
                ) : (
                  <div className="text-red-600 font-semibold">Out of Stock</div>
                )}
              </div>

              {/* Customization */}
              {product.customizable && product.customizationOptions && (
                <div className="mb-6">
                  <label className="block font-semibold text-text-primary mb-2">
                    Customization Options
                  </label>
                  <select
                    value={customization}
                    onChange={(e) => setCustomization(e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select customization (optional)</option>
                    {product.customizationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <label className="block font-semibold text-text-primary mb-2">
                  Quantity
                </label>
                <QuantitySelector
                  quantity={quantity}
                  onChange={setQuantity}
                  max={product.stockCount}
                  size="lg"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add to Cart
                </button>

                <button
                  onClick={handleWishlist}
                  className={`
                    p-4 rounded-lg border-2 transition-colors
                    ${
                      isWishlisted
                        ? "border-red-500 bg-red-50 text-red-500"
                        : "border-border hover:border-primary"
                    }
                  `}
                  aria-label="Add to wishlist"
                >
                  <Heart
                    className={`w-6 h-6 ${isWishlisted ? "fill-current" : ""}`}
                  />
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background rounded-full text-sm text-text-secondary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Additional Info Accordion */}
              <Accordion items={accordionItems} />
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 font-playfair">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
