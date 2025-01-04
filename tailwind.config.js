/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': 'url(/bg-intro-desktop.png)',
        'mobile': 'url(/bg-intro-mobile.png)',
      },

      colors: {
        red: 'hsl(0, 100%, 74%)',
        green: 'hsl(154, 59%, 51%)',
        blue: 'hsl(248, 32%, 49%)',
        'light-green': 'hsl(154.44, 65.85%, 67.84%)',
        'dark-blue': 'hsl(249, 10%, 26%)',
        'grayish-blue': 'hsl(246, 25%, 77%)',
      },

      fontFamily: {
        'poppins': ['Poppins', 'serif']
      }
    },
  },
  plugins: [],
}