/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6336',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      }
    },
  },
  plugins: [],
}