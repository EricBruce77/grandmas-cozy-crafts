import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B4513",
          dark: "#6B3410",
          light: "#A0522D",
        },
        secondary: {
          DEFAULT: "#D2691E",
          dark: "#B8531A",
          light: "#E88A3F",
        },
        accent: {
          DEFAULT: "#F4A460",
          dark: "#E09350",
          light: "#F7B87A",
        },
        background: {
          DEFAULT: "#FFF8F0",
          card: "#FFFAF5",
        },
        text: {
          primary: "#3D2914",
          secondary: "#6B5344",
        },
        success: "#228B22",
        border: "#E8DDD4",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        nunito: ['"Nunito"', "sans-serif"],
      },
      boxShadow: {
        warm: "0 4px 6px -1px rgba(139, 69, 19, 0.1), 0 2px 4px -1px rgba(139, 69, 19, 0.06)",
        "warm-lg": "0 10px 15px -3px rgba(139, 69, 19, 0.1), 0 4px 6px -2px rgba(139, 69, 19, 0.05)",
      },
      animation: {
        "slide-down": "slideDown 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "fade-in": "fadeIn 0.3s ease-out",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
