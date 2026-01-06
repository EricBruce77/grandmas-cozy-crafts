import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  productCount?: number;
}

export default function CategoryCard({ category, productCount }: CategoryCardProps) {
  return (
    <Link href={`/shop/category/${category.slug}`} className="group block">
      <div className="card p-0 overflow-hidden relative h-80">
        {/* Background Image */}
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-white mb-2 font-playfair">
            {category.name}
          </h3>

          <p className="text-white/90 text-sm mb-4 line-clamp-2">
            {category.description}
          </p>

          {productCount !== undefined && (
            <p className="text-white/80 text-sm mb-4">
              {productCount} {productCount === 1 ? "product" : "products"}
            </p>
          )}

          {/* Shop Now Button */}
          <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all">
            <span className="font-semibold">Shop Now</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
