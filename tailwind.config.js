/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#2563EB',
        grey: '#F9FAFB',
        darkGrey: '#F3F4F6',
      },
      backgroundImage: {
        'card-pattern': "url('')",
      },
    },
  },
  plugins: [],
};
