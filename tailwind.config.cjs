/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        centro: '#db458c',
        santaInes: '#ffec00',
        centenario: '#ff0068',
        gaviota: '#00c3ff',
        teatro: '#540060',
        estacionamiento: '#fc7200',
        gore: '#45989e',
        terraza: '#dcf132',
        museo: '#010f70'
      },
      backgroundImage: {
        image: 'url("https://i.ytimg.com/vi/yPWjkLcOvbg/maxresdefault.jpg")'
      }
    }
  },
  plugins: []
}
