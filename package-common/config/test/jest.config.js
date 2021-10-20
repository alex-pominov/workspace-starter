const path = require('path');

module.exports = () => {
  // To avoid copying babel config to each folder, to successfully run test and
  // parse JS files in jest environment we need define babel setting at the top
  // of this file. So the config will be included when running test outside of
  // this package.
  require(path.resolve(__dirname, '..', '..', 'babel.config'));

  return {
    testRegex: '((\\.|/*.)(test))\\.js?$',
    verbose: true,
    roots: ['./src'],
    collectCoverage: true,
    notify: false,
    testEnvironment: 'enzyme',
    testURL: 'http://localhost/',
    clearMocks: true,
    setupFilesAfterEnv: [path.resolve(__dirname, 'utils', 'jest.setup.js'), 'jest-enzyme'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': path.resolve(__dirname, 'stubs', 'CSSStub.js'),
    },
    testPathIgnorePatterns: ['/node_modules/', '/vendors/'],
  };
};
