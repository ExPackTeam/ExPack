const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/global.js',
  output: {
    filename: 'expack.min.js', 
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
  },
};
