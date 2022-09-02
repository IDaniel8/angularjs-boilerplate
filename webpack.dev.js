const path = require("path");
const webpack = require("webpack");

const config = require("./webpack.config.js");

config.mode = "development";
config.devtool = "eval";
config.output = {
  path: path.resolve(__dirname, "./dist"),
  filename: "[name].bundle.js",
  publicPath: "/",
};
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
]);

module.exports = config;
