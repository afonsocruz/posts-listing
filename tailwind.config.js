/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#020202',
        fluorescent: '#0ED640',
      },
      screens: {
        xs: '320px',
      },
      boxShadow: {
        light: '3px 5px 22px -3px rgba(255,255,255,0.61);',
      },
      borderRadius: {
        trullyRounded: '50%',
      },
    },
  },
  plugins: [],
};
