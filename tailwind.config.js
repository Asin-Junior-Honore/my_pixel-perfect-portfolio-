/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      keyframes :{
        fullSpin:{
          '100%':{
            transform:'rotate( -360deg)'
          }
        }
      },
      animation:{
        fullSpin:'fullSpin 3s linear infinite'
      }
    },
  },
  plugins: [],
}

