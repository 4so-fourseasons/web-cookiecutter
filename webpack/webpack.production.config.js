'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const loaders = require('./webpack.commonLoaders')

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
})

module.exports = {
  entry: [
    'babel-polyfill',
    // Entrypoint
    path.join(__dirname, '../src/js/index.js')
  ],
  output: {
    // Put outputted files into dist folder
    path: path.join(__dirname, '..', '/dist/'),

    // Calc output file name dynamically,
    filename: '[name].[hash].min.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules'
    ]
  },
  plugins: [
    // Split bundle into vendor and manifest files
    // This way clients don't need to reload all
    // vendor assets, whenever the main app changes
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),

    // Generate html5 file, which includes all webpack bundles in the body
    // using script tags
    // Takes a template file as input and outputs it to the dist folder
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
      // TODO favicon: 'src/img/favicon.png'
    }),

    // Not 100% what this does, but its use is highly recommended by the
    // official webpack docs, so I obey ;)
    new webpack.optimize.OccurrenceOrderPlugin(),

    // JS uglifying
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),

    // Helps passing variables between webpack and js-files
    // Gives us the ability to e.g. switch between dev and production environment
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    // Extracts Sass
    extractSass
  ],

  module: {
    rules: [
      ...loaders,
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          fallback: "style-loader",
        })
      }
    ]
  }
}

