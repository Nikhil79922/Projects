/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-3px)' },
          '50%': { transform: 'translateX(0px)' },
          '75%': { transform: 'translateX(3px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slide: 'slide .1s ease-in-out infinite',
      },
     },
  },
  plugins: [],
}

