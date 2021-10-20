const path = require('path');
const { merge } = require('webpack-merge');
const developmentConfig = require('./webpack.development');

module.exports = (env) =>
  merge(developmentConfig(env), {
    entry: {
      index: path.join(__dirname, '../src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
    },
  });
