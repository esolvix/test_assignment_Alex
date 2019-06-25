const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './client/src/index.html',
});

module.exports = {
  entry: './client/src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: [
              [
                '@babel/plugin-proposal-decorators',
                {
                  'legacy': true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader?mimetype=application/font-woff',
        }],
      },
      {
        test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader',
        }],
      },
    ],
  },
  plugins: [htmlPlugin],
};
