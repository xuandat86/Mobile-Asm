/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
// Change ./<custom-folder> to ./app (in my case)
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      primary_sky: "rgba(96, 183, 255, 1)",
      primary_black: "rgba(0, 0, 0, 1)",
      primary_white: "rgba(255, 255, 255, 1)",
      primary_slider: "  rgba(255, 200, 169, 0.27)",
      'primary_books': '#E5E5E5',
      'primary_text' : "rgba(0, 0, 0, 0.5)"
      
    },
    shadow : {
      'shadow_ip': "0px 4px 15px 0px rgba(0, 0, 0, 0.25)",
      'shadow_book': 'box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25)'

    },
  },
  plugins: [],
}
