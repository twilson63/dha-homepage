/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'bitter': ['Bitter'],
        'opensans': ['Open Sans']
      }
    }
  },
  plugins: [],
}