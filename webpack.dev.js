const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  // output file path
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. translates CSS into CommonJS
          'sass-loader', // 1. turns scss into css
        ],
      },
    ],
  },
});
