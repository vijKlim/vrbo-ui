const { resolve } = require('path');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  context: resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
            loader: 'cache-loader'
        }, {
            loader: 'happypack/loader?id=babel'
        }],
        include: /src/,
        exclude: /node_modules/,
      },
      {
         test: /\.(eot|ttf|woff|woff2)$/,
         use: [{
             loader: `file-loader?name=fonts/[name].[ext]`
         }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: `url-loader?name=assets/[name].[ext]`
      }]
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10
        }
      }
    },
    runtimeChunk: true
  },
    stats: { children: false },
  plugins: [
    new HappyPack({
        id: 'babel',
        threads: 2,
        verbose: false,
        loaders: [{
            path: 'babel-loader',
            query: {
                presets: [
                    'env',
                    'react'
                ]
            }
        }]
    }),
    new HtmlWebpackPlugin({ title: 'Hotel Search App' , template: 'index.html' }),
  ],
  performance: {
    hints: false,
  },
};