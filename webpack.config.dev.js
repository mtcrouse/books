var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    APP_DIR + '/index',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/src/client/public'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.png'],
    modulesDirectories: [
      'node_modules'
    ]
  },
  module: {
    loaders: [{
      test: /\.js|\.jsx$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.json$/,
      loader: "json-loader"
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
