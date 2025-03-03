/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: [{'primary-green': '#52AA5E'}],
    },
  },
  plugins: [],
};
