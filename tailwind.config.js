/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors: {
        primary: "#6611E0",
        secondary:"#E0CFF9",
        secondary2:"#EBEBEB",
      },
    },
    container: {
      center: true,
      // padding: "1rem",
    },
  },
  plugins: [],
}