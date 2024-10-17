/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      width: {
        '95p': '95%',
        '100p': '100%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '40p': '40%',
        '30p': '30%',
        '25p': '25%',
        '280px': '280px',
        '350px': '350px',
        '500px': '500px',
      
        
      },
      height : {
        '320px' : '320px',
      },
      maxWidth: {
        '250px': '250px',
      },
      margin: {
        '50p': '50%',
        '5p': '5%',
        '0p': '0%',
        '85p': '85%',
        '250px': '250px',
        '300px': '300px',
        '550px': '550px',
        '550px': '550px',
        '700px': '700px',
        '650px': '650px',
        '850px': '850px',
      },
    },
  },
  plugins: [],
}


