module.exports = {
  purge: {
    enabled: false,
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '450': '450px',
        '520': '520px',
        '650': '650px',
      },
      colors: {
        bgBlue: '#003688',
        bgOrange: '#FF5F56',
        bgGrayLight: '#F2F2F2',
        bgGrayStrong: '#D8D8D8',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Merriweather: ['Merriweather'],
      Lato: ['Lato']
    },
  },
  variants: {
    extend: {},
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: []
}
