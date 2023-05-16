/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#111',
        orange: 'rgb(255, 72, 0)',
        detail: '#E5E1D8',
        height: {
          '320': '32rem',
        }
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      },
    },
  },
  plugins: [],
}

