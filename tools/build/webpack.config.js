const config = {
  entry: './source/main.jsx',
  output: {
    path: 'build',
    filename: 'bundle.js',
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
};

export default config;
