var ExtractTextPlugin     = require('extract-text-webpack-plugin');
var webpack               = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = function(options) {
  var entry = {
    main: options.hot ?
      [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/react/index'
      ]
    :
      [
        'webpack-dev-server/client?http://localhost:8080',
        './app/react/index'
      ]
  };
  var extensions = ['', '.js', '.jsx', '.js.jsx'];
  var loaders = [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: options.hot ? ['react-hot', 'babel-loader'] : ['babel-loader']
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }
  ];
  var output = {
    path: __dirname + '/app/assets/javascripts',
    filename: 'react_bundle.js',
    publicPath: 'http://localhost:8080/'
  };
  var plugins = [
    new ExtractTextPlugin('../stylesheets/react_bundle.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: options.development ? true : false,
      __DEVTOOLS__: options.debug ? true : false
    })
  ];

  return {
    entry: entry,
    output: output,
    module: {
      loaders: loaders
    },
    devtool: options.devtool,
    resolve: {
      extensions: extensions
    },
    plugins: plugins
  };
}
