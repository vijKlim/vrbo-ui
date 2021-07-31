const merge = require('webpack-merge');
const { resolve } = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: ['babel-polyfill', './index.js'],
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: resolve(__dirname, '../build'),
    publicPath: '/',
  },
  plugins: [
    new UglifyJSPlugin({
        test: /\.js$/i,
        parallel: true,
        sourceMap: false
    })
  ],
});