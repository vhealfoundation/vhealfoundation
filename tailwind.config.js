/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}', 
    './public/index.html',
    './components/**/*.{js,jsx,ts,tsx}', 
    './pages/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2A9D8F',
        'secondary': '#EFD372',
        'tertiary': '#EFD372',
      }
  },
  },
  plugins: [],
}

