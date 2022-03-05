const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()].filter(Boolean),
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
});
