 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'primary': {
        100: '#20D271',
        200: '#00663B',
        300: '#052E16',
        400: '#002615',
      },
    },
    extend: {},
  },
  plugins: [],
}