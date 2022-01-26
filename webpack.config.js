const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // output file path
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
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
