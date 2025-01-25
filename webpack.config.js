// Documentation: https://webpack.js.org/configuration
// Use 'npx webpack --config webpack.config.js' or 'npm run build' to build.

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};