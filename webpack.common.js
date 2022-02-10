module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },

  module: {
    rules: [
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader', // 3. Inject styles into DOM
      //     'css-loader', // 2. translates CSS into CommonJS
      //     'sass-loader', // 1. turns scss into css
      //   ],
      // },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[hash].[ext]',
              outputPath: 'imgs',
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
};
