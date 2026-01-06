"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { SlidersHorizontal, X } from "lucide-react";

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // In stock filter
    if (inStockOnly) {
      filtered = filtered.filter((p) => p.inStock);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "best-selling":
        filtered.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
        break;
      default:
        // Featured
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [selectedCategories, priceRange, inStockOnly, sortBy]);

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 200]);
    setInStockOnly(false);
    setSortBy("featured");
  };

  const activeFilterCount =
    selectedCategories.length +
    (inStockOnly ? 1 : 0) +
    (priceRange[0] !== 0 || priceRange[1] !== 200 ? 1 : 0);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Shop" }]} />
          </div>

          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary font-playfair mb-2">
                All Products
              </h1>
              <p className="text-text-secondary">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"} found
              </p>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden btn-outline flex items-center gap-2"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside
              className={`
                lg:block ${showFilters ? "block" : "hidden"}
                ${showFilters ? "fixed inset-0 bg-black/50 z-40" : ""}
              `}
              onClick={() => setShowFilters(false)}
            >
              <div
                className={`
                  ${showFilters ? "fixed left-0 top-0 bottom-0 w-4/5 max-w-sm bg-background-card z-50 overflow-y-auto" : ""}
                  lg:sticky lg:top-24 lg:bg-transparent
                  p-6 rounded-xl card lg:shadow-warm
                `}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile Header */}
                <div className="lg:hidden flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Clear Filters */}
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="w-full text-sm text-primary hover:underline"
                    >
                      Clear all filters ({activeFilterCount})
                    </button>
                  )}

                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold text-text-primary mb-3">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label
                          key={category.id}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.id)}
                            onChange={() => handleCategoryToggle(category.id)}
                            className="w-4 h-4 text-primary rounded focus:ring-primary"
                          />
                          <span className="text-text-secondary">
                            {category.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold text-text-primary mb-3">
                      Price Range
                    </h3>
                    <div className="space-y-3">
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], parseInt(e.target.value)])
                        }
                        className="w-full"
                      />
                      <div className="flex items-center justify-between text-sm text-text-secondary">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* In Stock Only */}
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-text-secondary">In Stock Only</span>
                    </label>
                  </div>

                  {/* Sort */}
                  <div>
                    <h3 className="font-semibold text-text-primary mb-3">
                      Sort By
                    </h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="input-field"
                    >
                      <option value="featured">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="newest">Newest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-xl text-text-secondary mb-4">
                    No products found matching your filters.
                  </p>
                  <button onClick={clearFilters} className="btn-primary">
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
