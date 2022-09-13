const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {webpack.Configuration} */
module.exports = {
  entry: path.resolve(__dirname, "./src/app.module.js"),
  resolve: {
    alias: {
      "@packages": path.resolve(__dirname, "./node_modules"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@directives": path.resolve(__dirname, "./src/directives"),
      "@factories": path.resolve(__dirname, "./src/factory"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
    extensions: ["*", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["angularjs-annotate"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name]-[hash].[ext]",
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name]-[hash].[ext]",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      inject: "body",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    liveReload: true,
    static: "./",
    port: 4200,
    client: {
      overlay: true,
      progress: true,
    },
  },
};
