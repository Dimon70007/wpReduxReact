var {resolve} = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true
  },
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    // new webpack.optimize.OccurrenceOrderPlugin(), is on by default now
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false,
      allChunks: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {modules: false}],
                'stage-0',
                'react'
              ],
              plugins: [
                'react-hot-loader/babel',
                'transform-runtime'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
              loader: 'css-loader',
              query: { modules: true }
          }
        })
      }
    ]
  }
}
