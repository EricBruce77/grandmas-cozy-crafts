import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grandma's Cozy Crafts - Handmade with Love",
  description: "Discover handcrafted heating pads, quilts, and cozy home goods made with love. Each piece is unique and crafted with care.",
  keywords: ["handmade", "crafts", "heating pads", "quilts", "handcrafted", "cozy", "homemade"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="antialiased">
        <CartProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#8B4513",
                color: "#fff",
                borderRadius: "0.5rem",
                padding: "1rem",
              },
              success: {
                iconTheme: {
                  primary: "#228B22",
                  secondary: "#fff",
                },
              },
            }}
          />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
