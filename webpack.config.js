'use strict';
const path = require('path');

module.exports = {
  externals: {
    jquery: '$',
    lunr: true,
  },
  entry:  {
    'doc': './lib/browser/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'source/script'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  }
};
