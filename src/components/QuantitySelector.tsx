"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
}

export default function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
  size = "md",
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= min && value <= max) {
      onChange(value);
    }
  };

  const sizeClasses = {
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
  };

  const inputClasses = {
    sm: "w-12 h-8 text-sm",
    md: "w-16 h-10 text-base",
    lg: "w-20 h-12 text-lg",
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= min}
        className={`
          ${sizeClasses[size]}
          flex items-center justify-center rounded-lg
          border-2 border-primary text-primary
          hover:bg-primary hover:text-white
          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary
          transition-colors duration-200
        `}
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>

      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
        className={`
          ${inputClasses[size]}
          text-center border-2 border-border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
        `}
        aria-label="Quantity"
      />

      <button
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className={`
          ${sizeClasses[size]}
          flex items-center justify-center rounded-lg
          border-2 border-primary text-primary
          hover:bg-primary hover:text-white
          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary
          transition-colors duration-200
        `}
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
