/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scroll-text": "my-animation 15s linear infinite",
      },
      keyframes: {
        "my-animation": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        "moglan": ["MoglanDemo", "sans-serif"],
        'playfair-display': ['Playfair Display', 'serif']
      
      },
    },
  },
  plugins: [],
};
