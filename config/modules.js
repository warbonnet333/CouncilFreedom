const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction = process.env.NODE_ENV !== "production";

const modules = {
  rules: [{
    test: /\.js$/,
    loader: "babel-loader",
    exclude: isProduction ? [/node_modules/, /\.smart-gread-layer$/] : /node_modules/,
  },
  {
    // Fonts
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file-loader",
    options: {
      name: "[name].[ext]"
    }
  },
  {
    test: /\.(png|jpg|gif|svg)$/,
    loader: "file-loader",
    options: {
      name: "[name].[ext]"
    }
  }, {
    test: /\.scss$/,
    use: [
      "style-loader",
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {sourceMap: true}
      }, {
        loader: "postcss-loader",
        options: {sourceMap: true, config: {path: "./postcss.config.js"}}
      }, {
        loader: "sass-loader",
        options: {sourceMap: true}
      }
    ]
  }, {
    test: /\.css$/,
    use: [
      "style-loader",
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {sourceMap: true}
      }, {
        loader: "postcss-loader",
        options: {sourceMap: true, config: {path: "./postcss.config.js"}}
      }
    ]
  }, {
    test: /\.hbs$/,
    use: "handlebars-loader",
  }]
};

module.exports = modules;
