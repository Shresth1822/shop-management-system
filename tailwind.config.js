export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a", // Slate 900 - Deep, premium dark
          light: "#334155", // Slate 700
          dark: "#020617", // Slate 950
        },
        secondary: {
          DEFAULT: "#ca8a04", // Yellow 600 - Gold accent
          light: "#eab308", // Yellow 500
          dark: "#a16207", // Yellow 700
        },
        accent: "#f59e0b", // Amber 500
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
