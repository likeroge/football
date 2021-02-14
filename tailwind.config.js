module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        'screen/adopted': 'calc(100vh -  3rem)',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
