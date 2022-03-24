const PATHS = require("./pathes");
const plugins = require("./plugins");
const modules = require("./modules");

// Base Webpack config
module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    // test: PATHS.test,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  module: modules,
  resolve: {
    alias: {
      "~": PATHS.src,
      vue$: "vue/dist/vue.js"
    }
  },
  plugins,
};
