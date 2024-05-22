/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
    screens: {
      'sm': '650px',
      // => @media (min-width: 650px) { ... }

      'lg': '1254px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1880px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
  
}