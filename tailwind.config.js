/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'konit': ["Kanit", 'serif'],
      'roboto' : ["Roboto", 'serif'],
      'pangolin' : ["Pangolin", 'serif'],
      'Rubik' : ["Rubik", 'serif'],
      'PLFD' : ["Playfair Display", 'serif'],
      'Prata' : ["Prata", 'serif'],
      'DMSans' : ["DM Sans", 'serif'],
    },
    extend: {},
    container: {
     center: true,
      padding: {
        DEFAULT: '10px',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

  },
  plugins: [],
}