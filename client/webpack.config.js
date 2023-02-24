const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  // Files to watch for
  entry: './app/index.js',

  // Bundle/build output directory
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js'
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'KMZ on Leaflet',
      template: './app/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'app/philippines.kmz',
          to: ''
        }
      ]
    })
  ],

  // Set node modules to use for various file types
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|kmz)$/i,
        type: 'asset'
      }
    ]
  },

  // Development server set-up - define static assets directory and paths
  devServer: {
    open: true,
    hot: false, // disable hot reload for plain HTML/CSS/JS development
    compress: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, 'app'),
      publicPath: '/'
    }
  },

  watch: (process.env.NODE_ENV === 'development')
}
