module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      screens: {
        'slow' : '450px',
        'mlow' : '615px',
        'glow' : '630px',
        'low': '700px',
        'hlow': '740px',
        'mid': '800px',
        'big': '1025px',
        'lx': '1150px',
      }
    },
    fontFamily: {
      'mainFont': 'Montserrat',
    },
    screens: {
      'lg': '1025px',
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
