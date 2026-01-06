interface BadgeProps {
  variant: "sale" | "new" | "best-seller" | "out-of-stock";
  size?: "sm" | "md";
}

export default function Badge({ variant, size = "md" }: BadgeProps) {
  const baseClasses = "font-semibold rounded-full inline-flex items-center justify-center";

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  const variantClasses = {
    sale: "bg-red-600 text-white",
    new: "bg-success text-white",
    "best-seller": "bg-secondary text-white",
    "out-of-stock": "bg-gray-500 text-white",
  };

  const labels = {
    sale: "Sale",
    new: "New",
    "best-seller": "Best Seller",
    "out-of-stock": "Out of Stock",
  };

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}>
      {labels[variant]}
    </span>
  );
}
