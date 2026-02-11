export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Using a premium palette as requested
        primary: "#1e3a8a", // dark blue
        secondary: "#1e40af", // lighter blue
        accent: "#f59e0b", // amber
        neutral: "#f3f4f6", // light gray
      },
    },
  },
  plugins: [],
};
