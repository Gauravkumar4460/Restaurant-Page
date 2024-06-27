const path = require('path');
const { Template } = require('webpack');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
        },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body',
    }),
  ],
};