const config = {
  target: 'node',
  entry: `${__dirname}/tests.js`,
  output: {
    path: `${__dirname}/temp`,
    filename: 'tests.bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['istanbul-instrumenter', 'babel'] },
      { test: /\.scss$/, loader: 'null-loader' },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx', '.json', '.scss',
    ],
  },
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true,
  },
  devtool: 'inline-source-map',
};

export default config;
