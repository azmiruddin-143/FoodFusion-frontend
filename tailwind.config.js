/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],



  plugins: [
    require('daisyui'),

  ],
  daisyui: {
    themes: [
      {
        'dark': {
          "primary": "black",
          "accent": "black",
          "secondary":'#e6c9a2',
          "neutral":'white',
          "info":'#060606', //card
           "primary-content": "#e6c9a2",
           "info-content" : "white"
        }
      },
      {
        'light': {
          "primary": "white",
          "accent": "#0e1927",
          "secondary": '#e6c9a2',
          "neutral":'black',
           "info":'white', //card
           "primary-content": "#0e1927",
           "info-content" : "white"
        }
      },
     
    ]
  }
}
