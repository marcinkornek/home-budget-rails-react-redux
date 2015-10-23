var path    = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
    progress: true,
    colors: true,
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './app/react/index.js'
  ],
  output: {
    path: path.join(__dirname, 'app/assets/javascripts'),
    filename: 'react_bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css)$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(json)$/,
        loader: 'json-loader'
      },
      {
        test: /\.(scss)$/,
        loader: 'style!css!sass?sourceMap'
      }
    ]
  }
};
