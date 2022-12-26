/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{js,html}"],
  theme: {
    extend: {
        keyframes: {
            slipRight: {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(100%)' },
            },
            slipLeft: {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-100%)' },
            },
        },
        animation: {
            slipRight:"slipRight 1s ease",
            slipLeft: "slipLeft 1s ease"
        },
    },
  },
  plugins: [],
}



