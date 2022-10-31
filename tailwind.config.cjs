/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    scale: {
      mobile: [{ min: '390px' }],
    },
    extend: {},
  },
  plugins: [],
}
