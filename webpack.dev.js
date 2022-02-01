const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  // output file path
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
});
