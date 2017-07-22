require('babel-register'); // Enable ES6 syntax

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');
// TODO: check for things labled dev-only and opt those features out in prod

// Add for prod
// module hash's - https://webpack.js.org/plugins/hashed-module-ids-plugin/
// React transforms - https://babeljs.io/docs/plugins/transform-react-inline-elements/

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    // TODO: remove hot loader in prod - https://survivejs.com/webpack/appendices/hmr-with-react/
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    filename: 'index.bundle.js',
    path: dist
  },
  devServer: {
    contentBase: dist,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          failOnError: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            [
              'env',
              {
                // Include ES2015-2017+ features not included in the following browsers
                targets: {
                  browsers: ['last 2 versions', 'safari >= 7']
                },
                modules: false // use Webpack 2 ES modules instead of babel's
              }
            ]
          ]
        }
      },
      {
        test: /\.css|\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader?sourceMap'
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline'
            }
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader?sourceMap'
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json', '.css', '.scss', '.html']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // clean dist before each build
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      hash: true
    }),
    new webpack.NamedModulesPlugin(), //  display file paths in console during hmr - dev-only
    new webpack.ProvidePlugin({
      // global keywords available in the app
      // TODO: as a test see if its possible to drop in something like deku instead of react
      React: 'react'
    })
  ]
};
