const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.min.js',  // The output file name
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,  // Ensure minimization is enabled
  },
};
