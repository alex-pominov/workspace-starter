const presets = [
  [
    '@babel/preset-env',
    {
      targets: '> 0.25%, not dead',
      useBuiltIns: 'entry',
      corejs: '3.1.3',
    },
  ],
  '@babel/preset-react',
];

const plugins = [];

module.exports = { presets, plugins };
