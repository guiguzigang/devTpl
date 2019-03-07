const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Virtual DOM',
      template: 'plubic/index.html',
      minify: {
        collapseWhitespace: true //false | true
      },
      hash: true
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}