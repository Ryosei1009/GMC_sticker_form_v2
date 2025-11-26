/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#bcebff",
        "accent": "#2ac1fe",
      }
    },
  },
  plugins: [],
}

