const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Loaders
const babelLoader = require('./loaders/babel.loader');
const styleLoader = require('./loaders/style.loader');
const imageLoader = require('./loaders/image.loader');

module.exports = (env) =>
  merge([
    /* Loaders */
    babelLoader,
    styleLoader,
    imageLoader,

    /* Dev config */
    {
      mode: 'development',
      devtool: env.development ? 'inline-source-map' : false,
      resolve: {
        extensions: ['.jsx', '.js'],
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendors: {
              test: /[\\/](node_modules|plugin)[\\/]/,
              priority: 2,
            },
            default: {
              chunks: 'all',
              priority: 1,
            },
          },
        },
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, '../src/index.html'),
        }),
      ],
    },
  ]);
