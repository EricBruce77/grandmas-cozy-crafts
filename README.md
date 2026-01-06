# Grandma's Cozy Crafts

A beautiful, warm, and inviting e-commerce website for handmade crafts including heating pads, quilts, knitted items, and more.

## 🌟 Features

- **Fully Responsive Design** - Beautiful on all devices
- **Product Catalog** - Browse by category with filtering and sorting
- **Shopping Cart** - Add, remove, and update quantities with localStorage persistence
- **Product Detail Pages** - Image gallery, customization options, and detailed information
- **Secure Checkout** - Complete checkout flow (Stripe integration ready)
- **Informational Pages** - About, FAQ, and Contact pages
- **Warm Cozy Theme** - Custom color palette and fonts for a grandma-friendly feel

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom theme
- **State Management:** React Context API
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Payments:** Stripe (integration ready)
- **Fonts:** Google Fonts (Playfair Display & Nunito)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── shop/              # Shop pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   ├── about/             # About page
│   ├── faq/               # FAQ page
│   └── contact/           # Contact page
├── components/            # Reusable components
├── context/               # React context (Cart)
├── data/                  # Sample data (products, categories, etc.)
├── types/                 # TypeScript definitions
└── hooks/                 # Custom React hooks
```

## 🎨 Color Palette

- **Primary:** #8B4513 (Saddle Brown)
- **Secondary:** #D2691E (Chocolate)
- **Accent:** #F4A460 (Sandy Brown)
- **Background:** #FFF8F0 (Floral White)

## 📦 Sample Data

The site includes 15 sample products across 5 categories:
- Heating Pads & Warmers
- Quilts & Blankets
- Kitchen & Home
- Seasonal Items
- Baby & Kids

## 🛒 Features Implemented

✅ Product browsing with filters and sorting
✅ Shopping cart with localStorage persistence
✅ Product detail pages with image galleries
✅ Checkout flow
✅ Responsive mobile menu
✅ FAQ with search functionality
✅ Contact form
✅ Category pages
✅ Custom 404 page
✅ Order confirmation page

## 🔮 Future Enhancements

- Stripe payment integration (currently simulated)
- User authentication
- Order history
- Wishlist functionality with backend
- Product reviews
- Admin dashboard for product management
- Email notifications
- Backend API with database

## 📝 License

This is a demonstration project created for Grandma's Cozy Crafts.

## 💝 Made with Love

Every component crafted with care, just like Grandma's handmade items!
