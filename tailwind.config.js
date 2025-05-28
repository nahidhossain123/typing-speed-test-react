/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         quicksand: ['Quicksand', 'sans-serif'],
         Oswald: ['Oswald', 'sans-serif'],
      },
      colors:{
        bgPrimary:'#0D6073',
        bgLight:'#93F8E0'
      },
      keyframes: {
        blink: {
          '0%, 100%': { 'border-color': '#3295db', color: '#3295db' },
          '50%': { 'border-color': 'transparent', color: '#3295db' },
        },
  
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-5px)' },
          '40%': { transform: 'translateX(5px)' },
          '60%': { transform: 'translateX(-5px)' },
          '80%': { transform: 'translateX(5px)' },
        }
      },
      animation: {
        blink: 'blink 1s ease infinite',
        shake: 'shake 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
}

