const config = require('./../webpack.config');
const webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    __DEVELOPMENT__: false,
    __DEVTOOLS__: false
  })
);

module.exports = config;
