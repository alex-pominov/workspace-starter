module.exports = {
  module: {
    rules: [
      {
        test: /flags\.png$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        exclude: /flags\.png$/i,
        use: ['url-loader'],
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
};
