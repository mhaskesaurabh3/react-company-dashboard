/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#2563EB',
        grey: '#F9FAFB',
        darkGrey: '#F3F4F6',
        darkBlue: '#111827',
        lightBlack: '#1F2937',
        lightBlue: '#60A5FA',
        cardLightColor: '#EFF6FF ',
        cardDarkColor: '#1E3A8A ',
      },
      backgroundImage: {
        'card-pattern': "url('')",
      },
    },
  },
  plugins: [],
};
