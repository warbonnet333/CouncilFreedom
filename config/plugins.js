const HtmlWebpackPlugin = require("html-webpack-plugin");
const PATHS = require("./pathes");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlPluginRemove = require("html-webpack-plugin-remove");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const plugins = [
  new MiniCssExtractPlugin({
    filename: `${PATHS.assets}css/[name].[hash].css`,
  }),

  new HtmlWebpackPlugin({
    inject: true,
    template: `${PATHS.src}/index.html`,
    filename: "index.html"
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: `${PATHS.src}/pages/about-humanitarian-aid.html`,
    filename: "about-humanitarian-aid.html"
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: `${PATHS.src}/pages/send-humanitarian.html`,
    filename: "send-humanitarian.html"
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: `${PATHS.src}/pages/get-humanitarian.html`,
    filename: "get-humanitarian.html"
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: `${PATHS.src}/pages/infrastructure.html`,
    filename: "infrastructure.html"
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: `${PATHS.src}/pages/en/index.html`,
    filename: "en/index.html"
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: `${PATHS.src}/pages/en/about-humanitarian-aid.html`,
    filename: "en/about-humanitarian-aid.html"
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: `${PATHS.src}/pages/en/send-humanitarian.html`,
    filename: "en/send-humanitarian.html"
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: `${PATHS.src}/pages/en/get-humanitarian.html`,
    filename: "en/get-humanitarian.html"
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: `${PATHS.src}/pages/en/infrastructure.html`,
    filename: "en/infrastructure.html"
  }),

  new HtmlPluginRemove(/<!--deletestart-->[\s\S]*<!--deleteend-->/gi),
  new CopyWebpackPlugin([
    { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
    { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
    { from: `${PATHS.src}/static`, to: "" }
  ])
];

module.exports = plugins;
