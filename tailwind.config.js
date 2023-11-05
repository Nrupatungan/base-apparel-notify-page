/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/app/js/script.js","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary
        Desaturated_Red: 'hsl(0, 36%, 70%)',
        Soft_Red: 'hsl(0, 93%, 68%)',
        // Neutral
        Dark_Grayish_Red: 'hsl(0, 6%, 24%)',
        // Gradients
        // Linear, 135deg 
        grd_1_from: 'hsl(0, 0%, 100%)',
        grd_1_to: 'hsl(0, 100%, 98%)',
        // Linear, 135deg 
        grd_2_from: 'hsl(0, 80%, 86%)',
        grd_2_to: 'hsl(0, 74%, 74%)',
      },

      fontFamily: {
        Josefin: "'Josefin Sans', sans-serif"
      },
      
    },
  },
  plugins: [],
}