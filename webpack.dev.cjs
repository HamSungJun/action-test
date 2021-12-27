const common = require('./webpack.common.cjs')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js'
  }
})
