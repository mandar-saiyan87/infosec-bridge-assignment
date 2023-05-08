/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Rubik': ['Rubik', 'sans-serif'],
      'Rubik-black': ['Rubik-black', 'sans-serif'],
      'Rubik-Bold': ['Rubik-Bold', 'sans-serif'],
      'Rubik-ExtraBold': ['Rubik-ExtraBold', 'sans-serif'],
      'Rubik-Medium': ['Rubik-Medium', 'sans-serif'],
      'Rubik-Black': ['Rubik-Black', 'sans-serif'],
    },
  },
  plugins: [],
}

