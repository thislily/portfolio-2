// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': ['"Patrick Hand"', 'cursive'],
        'body': ['"Outfit"', 'sans-serif'],
      },
    },
    screens: {
      'sm': {'max': '500px'},
      'md': {'min': '900px'},
    },
  },
  plugins: [],
}