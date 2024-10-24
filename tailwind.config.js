/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      colors: {
        warmBoldPinkish: '#FF8D82',
        warmBoldRedish: '#FF4429',
        warmBoldOrangish: '#F97216',
        warmBoldYellowish: '#FFC30C',
        warmBoldGrayish: '#98887F',
        warmDarkColor: '#17171d',
        lightPinkColor: '#f0e9da',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

