
'use strict';

const webpack = require('webpack');
const path = require('path');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const developmentConfig = {
  devtool: 'cheap-module-eval-source-map',

  entry: ['babel-polyfill', './src/app'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ],

  devServer: {
    //stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,

    quiet: true,

    watchOptions: {
      aggregateTimeout: 300,
      poll: 100
    }
  }
};

module.exports = env => {
  console.log('environment', env);
  return developmentConfig;
};