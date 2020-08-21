const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {}
  },
  plugins: [],
  removeDeprecatedGapUtilities: true,
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './pages/**/*.html',
    './pages/**/*.tsx',
    './pages/**/*.js',
    './pages/**/*.jsx',
  ],
};