const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/global.js',
  output: {
    filename: 'expack.bundle.js', 
    filename: 'expakc.min.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
};
