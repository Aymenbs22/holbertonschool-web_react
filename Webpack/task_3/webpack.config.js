const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
        test: /\.(png|jpg|svg|jpeg)$/i,  
        use: ['file-loader',{
            loader: 'image-webpack-loader',
        }]
    }
  ],
};