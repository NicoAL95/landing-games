module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
    fontFamily: {
      'mainFont': 'Montserrat',
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
