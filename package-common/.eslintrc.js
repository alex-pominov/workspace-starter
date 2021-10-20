const path = require('path');
require('./babel.config');

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    project: path.resolve(__dirname, '..', 'package.json'),
    requireConfigFile: false,
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  ignorePatterns: ['temp.js', '**/config/**/*.js'],
  rules: {
    'max-len': ['error', { code: 100 }],
    'prefer-promise-reject-errors': ['off'],
    'react/require-default-props': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['warn'],
    'no-return-assign': ['off'],
  },
};
