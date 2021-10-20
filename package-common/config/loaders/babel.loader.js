module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: '> 0.25%, not dead',
                  useBuiltIns: 'entry',
                  corejs: '3.1.3',
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
};
