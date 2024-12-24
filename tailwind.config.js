/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0e1927',  // Dark blue color
        secondary: '#e6c9a2', // Light beige color  
      },
    },

  },
  plugins: [
    require('daisyui'),
  ],
}
