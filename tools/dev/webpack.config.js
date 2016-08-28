const Dashboard = require('webpack-dashboard/plugin');

const dashboard = new Dashboard();
const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    './source/main.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: './build',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx', '.json', '.scss',
    ],
  },
  plugins: [dashboard],
};

module.exports = config;

/*
eslint
import/no-extraneous-dependencies: 0,
*/
