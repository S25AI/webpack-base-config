const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dev = process.env.NODE_ENV !== 'production';

console.log('dev is ', dev);

const commonConfig = {
  devtool: dev ? 'cheap-module-eval-source-map' : false,
  mode: dev ? 'development' : 'production',
  context: path.resolve(__dirname, 'src'),
  entry: './app',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js",
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {}
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: dev}
          }
        ]
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({filename: 'style.css'}),
    new HtmlWebpackPlugin({template: 'index.html'}),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    host: 'localhost',
    port: 3002,
    contentBase: path.resolve(__dirname, 'build'),
    hot: true,

    watchOptions: {
      aggregateTimeout: 300,
      ignore: /node_modules/,
      poll: 100
    }
  }
};

module.exports = env => {
  return commonConfig;
};
