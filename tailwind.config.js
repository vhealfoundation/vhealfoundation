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
        'primary': '#0ea5e9',
        'secondary': '#f3f4f6',
        'tertiary': '#1f2937',
        'primary-dark': '#0284c7',
      },
      
  },
  },
  plugins: [],
}

