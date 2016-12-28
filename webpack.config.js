var webpack = require("webpack");

module.exports = {
  entry: {
    bundle: './src/scripts/index.js'
  },
  output: {
    path: __dirname + '/app/scripts',
    filename: '[name].js',
		publicPath: '/app/',
  },
  module: {
    preLoaders: [
      {
        test: /\.tag\.pug$/,
        exclude: /node_modules/,
        loader: 'tag-pug-loader'
      },
    ],
    loaders: [
      {
        test: /\.js$|\.tag.pug$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015-riot']
        }
      },
    ]
  },
  resolve: {
      extensions: ['', '.js', '.tag.pug']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ]
}
