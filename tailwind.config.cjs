/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,js,jsx}'],
  theme: {
    extend: {
      colors:{
        blue: 'rgb(11,13,23)',
        purple: 'rgb(208,214,249)',
        white: 'rgb(255,255,255)',
      },
      fontFamily: {
        Barlow: ['Barlow Condensed', 'sans-serif'],
        Bellefair: ['Bellefair', 'serif'],
      }
    },
  },
  plugins: [],
}
