const WebpackNotifierPlugin = require('webpack-notifier');
const webpack = require('webpack');
const config = require('./../webpack.config');

config.plugins.push(
  new WebpackNotifierPlugin(),
  new webpack.DefinePlugin({
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true
  })
);

module.exports = config;
