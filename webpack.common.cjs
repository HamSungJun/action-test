const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  target: 'web',
  entry: glob.sync('./src/**/index.ts').reduce((acc, path) => {
    const entryPath = path.replace(/^.\/src\//, '').replace(/\/index.ts$/, '')
    acc[entryPath] = path
    return acc
  }, {}),
  experiments: {
    outputModule: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module'
    },
    filename: (pathData) => {
      return pathData.chunk.name === 'index.ts' ? 'index.js' : '[name]/index.js'
    }
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.ts$/],
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'chunk-vendors'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({})
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}
