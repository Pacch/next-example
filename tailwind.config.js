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
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
};