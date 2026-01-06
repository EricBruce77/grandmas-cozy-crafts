import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Heart, Sparkles, Award, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "About" }]} />
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-playfair">
              Meet the Maker
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A story of love, craftsmanship, and cozy comfort
            </p>
          </div>

          {/* Main Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <div
              className="relative h-96 rounded-xl overflow-hidden shadow-warm-lg mb-8"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1601046668428-94ea13437736?w=1200')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Hello, dear friends! I'm so glad you found your way to my little
                corner of handmade happiness. My name is Margaret (though everyone
                calls me Grandma Maggie), and for over 40 years, I've been creating
                cozy treasures for family and friends.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                It all started in my sunny sewing room when my first grandchild was
                born. I wanted to make something special - something that would keep
                them warm and remind them of my love. That first baby blanket turned
                into quilts, which became heating pads, and before I knew it, my
                whole family was requesting custom pieces!
              </p>

              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                After my dear husband passed, my children encouraged me to share my
                creations with the world. "Mom," they said, "there are people out
                there who would treasure these as much as we do." So here we are!
              </p>

              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Every item you see in this shop is made by my own two hands, right
                here in my cozy workroom. I carefully select each fabric, measure
                each stitch, and put a piece of my heart into everything I create. I
                believe that handmade items carry a special kind of love that you
                just can't find in store-bought things.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                When you purchase from my shop, you're not just buying a product -
                you're getting a piece of my heart and a tradition that spans
                generations. Thank you for supporting this grandmother's dream and
                letting me share my love of crafting with you!
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12 font-playfair">
              What Makes Us Special
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white fill-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Handmade with Love</h3>
                <p className="text-text-secondary">
                  Every stitch is made with care and attention, just like I'd make
                  for my own family
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                <p className="text-text-secondary">
                  I use only the finest fabrics and natural fillings - nothing but
                  the best!
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">40+ Years Experience</h3>
                <p className="text-text-secondary">
                  Four decades of crafting means every piece benefits from years of
                  expertise
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Family Tradition</h3>
                <p className="text-text-secondary">
                  Each item carries on a tradition of love and craftsmanship passed
                  down through generations
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12 font-playfair">
              My Crafting Process
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Material Selection</h3>
                  <p className="text-text-secondary">
                    I carefully choose each fabric and filling, ensuring quality and
                    safety. Only natural, high-quality materials make the cut!
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cutting & Measuring</h3>
                  <p className="text-text-secondary">
                    Precision is key! I measure twice and cut once, ensuring every
                    piece is perfectly sized.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Handcrafting</h3>
                  <p className="text-text-secondary">
                    This is where the magic happens! Each stitch is made with care,
                    often while listening to my favorite old radio shows.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
                  <p className="text-text-secondary">
                    Before any item leaves my workshop, it gets a thorough
                    inspection. It has to meet my grandmother standards!
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Packaging with Love
                  </h3>
                  <p className="text-text-secondary">
                    Each item is carefully wrapped and packaged, ready to bring
                    warmth and comfort to your home.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 font-playfair">
              Ready to Add Some Cozy to Your Home?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Browse our collection of handmade treasures and find something
              special made just for you!
            </p>
            <Link href="/shop" className="inline-block bg-accent hover:bg-accent-dark text-text-primary font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
