"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const category = categories.find((c) => c.slug === resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category.id);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb
              items={[{ label: "Shop", href: "/shop" }, { label: category.name }]}
            />
          </div>

          {/* Category Hero */}
          <div
            className="relative rounded-2xl overflow-hidden mb-12 h-64 md:h-80"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${category.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
                {category.name}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {category.description}
              </p>
              <p className="text-white/80 mt-4">
                {categoryProducts.length}{" "}
                {categoryProducts.length === 1 ? "product" : "products"}
              </p>
            </div>
          </div>

          {/* Products Grid */}
          {categoryProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-text-secondary mb-4">
                No products available in this category yet.
              </p>
              <a href="/shop" className="text-primary hover:underline">
                Browse all products
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
