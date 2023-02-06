/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '5rem'
        }
      }
    },
  },
  plugins: [],
}
