const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: './src/js/global.js',
    output: {
      filename: 'expack.bundle.js',
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
    }
  },
  {
    mode: 'production',
    entry: './src/js/global.js',
    output: {
      filename: 'expack.min.js',
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
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
        }),
      ],
    },
  }
];
