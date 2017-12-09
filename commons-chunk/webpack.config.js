const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    main: __dirname + '/app/main.js',
    main2: __dirname + '/app/main2.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name]-[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html',
      filename: __dirname + '/build/index.html',
      chunks:['main', 'common']
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html',
      filename: __dirname + '/build/index2.html',
      chunks: ['main2', 'common']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['main', 'main2']
    }),
  ]
}
