const { resolve } = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const SriPlugin = require("webpack-subresource-integrity");
const OfflinePlugin = require("offline-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", resolve(__dirname, "src/index.js")],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    historyApiFallback: true
  },
  output: {
    filename: "[name].bundle.[hash:6].js",
    chunkFilename: "[name].chunk.[hash:6].js",
    path: resolve(__dirname, "dist"),
    crossOriginLoading: "anonymous"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: __dirname
    }),
    new CopyWebpackPlugin([
      {
        from: resolve(__dirname, "./assets"),
        to: resolve(__dirname, "./build")
      }
    ]),
    new SriPlugin({
      hashFuncNames: ["sha256", "sha384"],
      enabled: process.env.NODE_ENV === "production"
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    // keep it last
    new OfflinePlugin({
      safeToUseOptionalCaches: true,
      caches: "all",
      version: "[hash:6]",
      updateStrategy: "all",
      excludes: ["**/*.map"], // Don't cache source maps
      autoUpdate: true,
      AppCache: false,
      ServiceWorker: {
        events: true
      }
    })
  ]
};
