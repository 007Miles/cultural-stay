/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      sigmar: ['Sigmar', 'cursive'],
      poppins: ['Poppins', 'sans-serif'],
    },
    // extend: {},
  },
  plugins: [],
}
