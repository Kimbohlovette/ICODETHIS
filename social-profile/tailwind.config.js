/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./dist/**/*.{js,html}"],
  theme: {
    screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
    extend: {},
  },
  plugins: [],
}
