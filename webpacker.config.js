const path = require('path');

module.exports = {
  entry: './src/js/global.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist/js') // Output directory
  },
  mode: 'production' // 'development'
};