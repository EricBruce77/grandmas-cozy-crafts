import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";
import { ChevronRight, Heart, Package, Sparkles, Truck } from "lucide-react";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 4);

  // Calculate product count per category
  const categoryProductCounts = categories.map((cat) => ({
    ...cat,
    count: products.filter((p) => p.category === cat.id).length,
  }));

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center py-32 lg:py-48"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139, 69, 19, 0.3), rgba(139, 69, 19, 0.3)), url('https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1920')",
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair drop-shadow-lg">
              Handcrafted Comfort for Your Home
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow">
              Each piece made with love, just for you
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/shop" className="btn-primary text-lg">
                Shop Now
              </Link>
              <Link href="/about" className="btn-secondary text-lg">
                Our Story
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-playfair">
                Shop by Category
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Discover our handmade treasures organized just for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProductCounts.slice(0, 6).map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  productCount={category.count}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-16 bg-background-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-playfair">
                Best Sellers
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Our most loved handcrafted items
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/shop" className="btn-outline">
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className="relative h-96 rounded-xl overflow-hidden shadow-warm-lg"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1601046668428-94ea13437736?w=800')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
                  Meet the Maker
                </h2>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Hello, dear friends! Welcome to my little corner of handmade
                  happiness. For over 40 years, I've been creating cozy treasures
                  for family and friends. What started as a way to keep my
                  grandchildren warm has blossomed into this wonderful shop.
                </p>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Every item you see here is crafted by my own hands in my sunny
                  sewing room, using quality materials I've carefully selected. I
                  believe that handmade items carry a special kind of love that you
                  just can't find in store-bought things.
                </p>
                <Link href="/about" className="inline-block bg-accent hover:bg-accent-dark text-text-primary font-semibold px-6 py-3 rounded-lg transition-colors">
                  Read My Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-playfair">
                What Customers Say
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Hear from those who've welcomed our handmade items into their homes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="card p-6">
                  <StarRating rating={testimonial.rating} size="md" className="mb-4" />
                  <p className="text-text-secondary italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      Purchased: {testimonial.productPurchased}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-background-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-playfair">
                Why Choose Us
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white fill-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Handmade with Love</h3>
                <p className="text-text-secondary text-sm">
                  Each item is carefully crafted by hand with attention to every detail
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Materials</h3>
                <p className="text-text-secondary text-sm">
                  We use only the finest fabrics and natural fillings in our products
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Custom Orders Welcome</h3>
                <p className="text-text-secondary text-sm">
                  Need something special? We'd love to create a custom piece for you
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast & Careful Shipping</h3>
                <p className="text-text-secondary text-sm">
                  Your items are carefully packaged and shipped quickly to your door
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
              Join Our Cozy Community
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to receive updates about new products, special offers, and
              crafting tips from Grandma!
            </p>

            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent hover:bg-accent-dark text-text-primary font-semibold rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-white/70 mt-4">
              We respect your privacy and never share your information.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
