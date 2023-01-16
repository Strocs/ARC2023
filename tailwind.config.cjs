/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pink: '#db458c',
        yellow: '#ffec00',
        'black-pink': '#ff0068',
        'pale-blue': '#00c3ff',
        purple: '#540060',
        orange: '#fc7200',
        'water-green': '#45989e',
        'pale-yellow': '#dcf132',
        blue: '#010f70'
      },
      backgroundImage: {
        image: 'url("https://i.ytimg.com/vi/yPWjkLcOvbg/maxresdefault.jpg")',
        texture: 'url(/textura.svg)'
      },
      backgroundSize: {
        xs: '20%',
        sm: '40%',
        md: '60%',
        lg: '80%',
        xl: '100%',
        '2xl': '200%'
      }
    }
  },
  plugins: []
}
