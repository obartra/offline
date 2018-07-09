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
      },
      {
        test: /\.(ttf|mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]?[hash:6]"
          }
        }
      },
      {
        test: /\.(png|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true
            }
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
        to: resolve(__dirname, "./dist/static")
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
      caches: {
        main: [":rest:", ":externals:"],
        additional: ["*.chunk.js", "**/*.png", "**/*.ttf"]
      },
      version: "[hash:6]",
      updateStrategy: "all",
      excludes: ["**/*.map", "**/*.mp4"], // Don't cache
      autoUpdate: true,
      AppCache: false,
      ServiceWorker: {
        events: true,
        minify: true
      }
    })
  ]
};
