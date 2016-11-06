const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const extracted = new ExtractTextPlugin('bundle.css');
const env = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});

const config = {
  entry: './source/main.jsx',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'sass']),
      },
    ],
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx', '.json', '.scss',
    ],
  },
  sassLoader: { includePaths: ['./node_modules'] },
  plugins: [extracted, env],
};

module.exports = config;
