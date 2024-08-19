/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        spins: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-340%)' },
        },
      },
      animation: {
        spin: 'spins 200s linear infinite',
      },
    },
  },
  plugins: [],
}

