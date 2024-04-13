/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scroll-text": "my-animation 15s linear infinite",
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        "my-animation": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
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
