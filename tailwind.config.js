module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      xxl: '1280px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
