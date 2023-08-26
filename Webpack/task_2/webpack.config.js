const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
        test: /\.(png|jpg|svg|jpeg)$/i,  
        use: [{
            loader: 'image-webpack-loader',
        }]
    }
  ],
};