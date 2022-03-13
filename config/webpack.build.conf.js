const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

// Production config
const productionWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: []
});

// eslint-disable-next-line no-unused-vars
module.exports = new Promise((resolve, reject) => {
  resolve(productionWebpackConfig);
});
