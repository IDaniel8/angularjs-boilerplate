const path = require("path");

const config = require("./webpack.config.js");

config.mode = "production";
config.devtool = "source-map";
config.output = {
  path: path.join(__dirname, "./dist"),
  filename: "[name].[hash].js",
  publicPath: "/",
};

module.exports = config;
