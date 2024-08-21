/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%, 100%': { transform: 'translateX(15px)' },
          '50%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        spin: 'spin .15s ease-in-out infinite',
        
      },
    },
  },
  plugins: [],
}

