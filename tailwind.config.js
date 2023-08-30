/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
    colors: {
      background: "#0a0a0a",
      primary: "#d1d1d1"
    }    
    },

  
  },
  plugins: [require("@tailwindcss/typography")],
}
