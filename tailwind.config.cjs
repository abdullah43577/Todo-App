/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['text-[#1ab61a]', 'text-[#c566f4]', 'text-[#3b5998]'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '968px',
      xl: '1200px',
    },
    extend: {
      colors: {
        softBlue: '#3b5998',
        gray: '#696969',
        purple: '#800080',
        black: ' #2e2d2d',
      },
    },
  },
  plugins: [],
};
