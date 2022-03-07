const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

  let mode = "development";
  let devtool = 'eval-source-map';

  // Prod environment
  if (env.NODE_ENV === 'prod') {
    devtool = false;
    mode = 'production';
  };

  return {

    mode: mode,

    entry: path.resolve(__dirname, 'src'),

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    }, 

    devServer: {
      static: path.resolve(__dirname, 'dist'),
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/template.html')
      })
    ],

    devtool: devtool,

    module: {

      rules: [

        {
          test: /\.(png|svg|jpg|gif|glb|basis)$/,
          use: [
            'file-loader',
          ],
        },

        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },

      ],

    }

  }

};