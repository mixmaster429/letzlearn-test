/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#800080',
      },
      ringWidth: {
        'main': '2px',
      },
      ringColor: {
        'main': '#800080',
      },

      maxWidth: {
        '4/5': '80%',
        '9/10': '90%'
      }
    },
  },
  plugins: [],
}

