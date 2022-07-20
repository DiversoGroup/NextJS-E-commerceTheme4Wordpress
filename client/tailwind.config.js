/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sp: { min: '410px' },
        ...defaultTheme.screens,
      },
      colors: {
        btnColor: '#0891B2',
        btnColorHover: '#38BDF8',
        primary: '#FFFFFF',
        secondary: '#E6E6E6',
        secondarySoft: '#F4F4F4',
        textDark: '#191919',
        textGray: '#878787',
        darkGray: '#5A5A5A',
        softDark: '#494949',
        footerBg: '#404040',
      },
      fontFamily: {
        outfitL: ['outfitlight'],
        outfitM: ['outfitmedium'],
      },
      backgroundImage: {
        'hero-pattern':
          "url('../images/anchor-lee-kO1G3neRA2o-unsplash 1.png')",
      },
      gridTemplateColumns: {
        card2: 'repeat(2, minmax(0, 163px))',
        card3: 'repeat(3, minmax(0, 163px))',
        cardDesktop2: 'repeat(2, minmax(0, 447px))',
        cardDesktop3: 'repeat(3, minmax(0, 447px))',
        cardDesktop4: 'repeat(4, minmax(0, 447px))',
      },
      width: {
        containMax: '440px',
      },
    },
  },
  plugins: [],
};
