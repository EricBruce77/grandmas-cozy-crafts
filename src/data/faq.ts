import { FAQ } from "@/types";

export const faqs: FAQ[] = [
  // Orders & Shipping
  {
    id: "ship-time",
    category: "Orders & Shipping",
    question: "How long does shipping take?",
    answer: "Most orders ship within 2-3 business days. Standard shipping takes 5-7 business days. Expedited shipping options are available at checkout for faster delivery.",
  },
  {
    id: "international",
    category: "Orders & Shipping",
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within the United States. We hope to expand international shipping in the future!",
  },
  {
    id: "tracking",
    category: "Orders & Shipping",
    question: "Can I track my order?",
    answer: "Yes! Once your order ships, you'll receive an email with tracking information so you can follow your package every step of the way.",
  },
  {
    id: "damaged",
    category: "Orders & Shipping",
    question: "What if my item arrives damaged?",
    answer: "We take great care in packaging, but if something arrives damaged, please contact us within 48 hours with photos. We'll send a replacement or provide a full refund right away.",
  },

  // Products
  {
    id: "heating-pad-care",
    category: "Products",
    question: "How do I care for my heating pad?",
    answer: "Spot clean only - never immerse in water. Heat in the microwave for 1-2 minutes. Always test temperature before use. Let it cool completely before storing. With proper care, your heating pad will last for years!",
  },
  {
    id: "materials",
    category: "Products",
    question: "What materials do you use?",
    answer: "We use only high-quality materials: 100% cotton fabrics, premium cotton batting, natural flax seed, rice, and dried lavender. Everything is carefully selected for durability and safety.",
  },
  {
    id: "machine-wash",
    category: "Products",
    question: "Are your products machine washable?",
    answer: "Most fabric items (quilts, blankets, towels, dishcloths) are machine washable. Heating pads should only be spot cleaned. Each product listing includes specific care instructions.",
  },
  {
    id: "custom-colors",
    category: "Products",
    question: "Can I request custom colors or sizes?",
    answer: "Absolutely! Many items are customizable. Look for products marked 'Customizable' and select your preferences at checkout. For special requests not listed, please contact us - we love working on custom orders!",
  },

  // Custom Orders
  {
    id: "custom-orders",
    category: "Custom Orders",
    question: "Do you take custom orders?",
    answer: "Yes! We love creating special pieces. Contact us with your ideas, preferred colors, and size requirements. We'll work together to create something perfect for you!",
  },
  {
    id: "custom-timeline",
    category: "Custom Orders",
    question: "How long do custom orders take?",
    answer: "Custom orders typically take 2-4 weeks, depending on complexity and current order volume. We'll give you an estimated completion date when you place your order.",
  },
  {
    id: "custom-cost",
    category: "Custom Orders",
    question: "Is there an extra charge for customization?",
    answer: "Minor customizations (color/pattern choices from available options) are free! Complex custom orders may have additional charges depending on materials and time required. We'll provide a quote before starting.",
  },

  // Returns & Exchanges
  {
    id: "return-policy",
    category: "Returns & Exchanges",
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of delivery for non-customized items in original condition. Custom/personalized items cannot be returned unless defective. Buyer pays return shipping.",
  },
  {
    id: "how-to-return",
    category: "Returns & Exchanges",
    question: "How do I return an item?",
    answer: "Contact us to initiate a return. We'll provide return instructions and address. Once we receive the item in original condition, we'll process your refund within 5-7 business days.",
  },
  {
    id: "exchanges",
    category: "Returns & Exchanges",
    question: "Do you offer exchanges?",
    answer: "Yes! If you'd like a different size, color, or item, contact us. We'll help arrange an exchange. If there's a price difference, we'll adjust accordingly.",
  },

  // Payment & Security
  {
    id: "payment-methods",
    category: "Payment & Security",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay through our secure Stripe payment system.",
  },
  {
    id: "secure-payment",
    category: "Payment & Security",
    question: "Is my payment information secure?",
    answer: "Absolutely! We use Stripe for payment processing, which is bank-level secure with 256-bit encryption. We never see or store your credit card information on our servers.",
  },
];
