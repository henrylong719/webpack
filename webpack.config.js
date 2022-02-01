const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // output file path
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
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
};
