/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#FDF2E9',
        lightYellow: '#FCE5C8',
        darkBlue: '#002A5C',
        lightBlue: '#007BFF',
        buttonHover: '#0056b3',
        DarkBlue80: '#002A48',
        PrimaryDarBlue : '#003459',
        NeutralColor : '#667479',
        MonYellow : '#FCEED5',
        Footerblue:'#062C58'
       
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
