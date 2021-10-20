const path = require('path');
const { merge } = require('webpack-merge');
const { devConfig } = require('@workspace-starter/common');

module.exports = (env) => {
  return merge([
    devConfig(env),
    {
      entry: {
        index: path.join(__dirname, '../src/index.js'),
      },
      output: {
        path: path.resolve(__dirname, '../dist'),
      },
    },
  ]);
};
