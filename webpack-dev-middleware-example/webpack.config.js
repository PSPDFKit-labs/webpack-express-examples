const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map', 
  entry: {
    'app': [
      'babel-polyfill',
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './client/index'
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: {
      index: '/client/index.html'
    }
  },   
  output: {
    path: '/client/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
