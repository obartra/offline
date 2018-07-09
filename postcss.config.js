const cssImport = require("postcss-import");
const cssNext = require("postcss-cssnext");
const cssNano = require("cssnano");
const cssUrl = require("postcss-url");

/**
 * To ensure offline plugin caches the resource it has to be processed by webpack
 */
module.exports = {
  plugins: [
    cssImport(),
    cssUrl({
      basePath: __dirname,
      assetsPath: "static"
    }),
    cssNext(),
    cssNano()
  ]
};
