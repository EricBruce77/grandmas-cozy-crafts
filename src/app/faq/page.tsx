"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Accordion from "@/components/Accordion";
import { faqs } from "@/data/faq";
import { Search } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Group FAQs by category
  const faqsByCategory = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, typeof faqs>);

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? Object.entries(faqsByCategory).reduce((acc, [category, categoryFaqs]) => {
        const filtered = categoryFaqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filtered.length > 0) {
          acc[category] = filtered;
        }
        return acc;
      }, {} as Record<string, typeof faqs>)
    : faqsByCategory;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "FAQ" }]} />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-playfair">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Find answers to common questions about our products, orders, and more
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12 text-lg"
              />
            </div>
          </div>

          {/* FAQs by Category */}
          <div className="max-w-4xl mx-auto space-y-12">
            {Object.entries(filteredFaqs).length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-text-secondary mb-4">
                  No FAQs found matching "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-primary hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              Object.entries(filteredFaqs).map(([category, categoryFaqs]) => (
                <div key={category}>
                  <h2 className="text-2xl font-bold text-text-primary mb-6 font-playfair">
                    {category}
                  </h2>
                  <div className="card p-6">
                    <Accordion
                      items={categoryFaqs.map((faq) => ({
                        title: faq.question,
                        content: faq.answer,
                      }))}
                      allowMultiple
                    />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Still Have Questions */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-secondary text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 font-playfair">
                Still Have Questions?
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Can't find what you're looking for? We're here to help!
              </p>
              <Link href="/contact" className="inline-block bg-accent hover:bg-accent-dark text-text-primary font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
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
