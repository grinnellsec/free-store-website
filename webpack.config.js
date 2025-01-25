// Documentation: https://webpack.js.org/configuration
// Use 'npx webpack --config webpack.config.js' or 'npm run build' to build.

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: {
    index: './src/index.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Free Store',
      template: "./src/index.html",
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  // For documentation, look here https://webpack.js.org/guides/asset-management/.
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};