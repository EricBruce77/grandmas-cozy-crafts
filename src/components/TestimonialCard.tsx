import { Testimonial } from "@/types";
import StarRating from "./StarRating";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="card p-6 h-full flex flex-col">
      <StarRating rating={testimonial.rating} size="md" className="mb-4" />

      <blockquote className="text-text-secondary italic mb-4 flex-1">
        "{testimonial.text}"
      </blockquote>

      <div className="border-t border-border pt-4 mt-auto">
        <p className="font-semibold text-text-primary">{testimonial.name}</p>
        <p className="text-sm text-text-secondary mt-1">
          Purchased: {testimonial.productPurchased}
        </p>
      </div>
    </div>
  );
}
