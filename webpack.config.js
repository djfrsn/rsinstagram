require('babel-register'); // Enable ES6 syntax

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');
const assetsPath = path.resolve(__dirname, 'src/assets/public');
// TODO: check for things labled dev-only and opt those features out in prod

// Add for prod
// module hash's - https://webpack.js.org/plugins/hashed-module-ids-plugin/
// React transforms - https://babeljs.io/docs/plugins/transform-react-inline-elements/

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    // TODO: remove hot loader in prod - https://survivejs.com/webpack/appendices/hmr-with-react/
    'react-hot-loader/patch',
    'babel-polyfill', // Redux Saga support
    'whatwg-fetch', // Polyfill fetch api
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
        test: /\.js[x]?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          failOnError: true
        }
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            [
              'env',
              {
                // Include ES2015-2017+ features not included in the following browsers
                targets: {
                  browsers: ['last 2 versions', 'safari >= 7']
                },
                modules: false // use Webpack 2 ES modules instead of babel's
              }
            ],
            'react',
            'stage-0'
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
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/', // where the fonts will go
              publicPath: '../' // override the default path
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: path.resolve(__dirname, 'src/assets/images'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
          // {
          //   loader: 'image-webpack-loader',
          //   query: {
          //     progressive: true,
          //     optimizationLevel: 7,
          //     interlaced: false,
          //     pngquant: {
          //       quality: '65-90',
          //       speed: 4
          //     }
          //   }
          // }
        ]
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.html']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // clean dist before each build
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      hash: true
    }),
    new CopyWebpackPlugin([{ from: assetsPath }]),
    new webpack.NamedModulesPlugin(), //  display file paths in console during hmr - dev-only
    new webpack.ProvidePlugin({
      // global keywords available in the app
      // TODO: as a test see if its possible to drop in something like deku instead of react
      React: 'react'
    })
  ]
};
