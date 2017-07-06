const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack/webpack.development.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(8080, 'localhost', function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:8080')
})

