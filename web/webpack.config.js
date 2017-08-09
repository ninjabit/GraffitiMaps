var path = require('path');
var webpack = require('webpack');

module.exports = {
  output: {
    path: '{{BUILD}}',
    // publicPath: 'build/',
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [path.resolve('node_modules')],
    alias: {
      'api': path.resolve(__dirname, '../api/server')
    }
  },

  externals: [
    {
      sharp: '{}'
    },
    resolveExternals
  ],

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    __dirname: true
  }
};

function resolveExternals(context, request, callback) {
  return resolveMeteor(request, callback) ||
    callback();
}

function resolveMeteor(request, callback) {
  var match = request.match(/^meteor\/(.+)$/);
  var pack = match && match[1];

  if (pack) {
    callback(null, 'Package["' + pack + '"]');
    return true;
  }
}
