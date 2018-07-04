const cssImport = require("postcss-import");
const cssNext = require("postcss-cssnext");
const cssNano = require("cssnano");

module.exports = {
  plugins: [cssImport(), cssNext(), cssNano()]
};
