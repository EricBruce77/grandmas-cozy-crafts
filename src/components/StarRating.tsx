import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  reviewCount?: number;
  className?: string;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showCount = false,
  reviewCount = 0,
  className = "",
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    const fillPercentage = Math.min(Math.max(rating - i + 1, 0), 1) * 100;

    stars.push(
      <div key={i} className="relative inline-block">
        {/* Empty star background */}
        <Star className={`${sizeClasses[size]} text-border`} />

        {/* Filled star overlay */}
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{ width: `${fillPercentage}%` }}
        >
          <Star
            className={`${sizeClasses[size]} text-secondary fill-secondary`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center gap-0.5">{stars}</div>
      {showCount && reviewCount > 0 && (
        <span className={`${textSizeClasses[size]} text-text-secondary ml-1`}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
}
