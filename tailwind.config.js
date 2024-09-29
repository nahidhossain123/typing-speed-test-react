/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { 'border-color': '#3295db', color: '#3295db' },
          '50%': { 'border-color': 'transparent', color: '#3295db' },
        },
      },
      animation: {
        blink: 'blink 1s ease infinite'
      },
    },
  },
  plugins: [],
}

