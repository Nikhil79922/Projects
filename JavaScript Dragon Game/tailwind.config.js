/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 2.8s linear infinite',
        'slideIn': 'slideIn .5s linear infinite forward',
        'none': 'wiggle 1s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 33%': { bottom: "0px" },
          '33%, 66%': { bottom: "200px" },
          '66%, 100%': { bottom: "0px" },
        },
        fadeIn: {
          '0%': { left: '110vw' },
          '100%': { left: '-10vw' },
        },
        slideIn: {

          '100%': { left: '50px' },
        }
      }
    },
  },
  plugins: [],
}

