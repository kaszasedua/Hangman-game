const webpack = require('webpack');
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader" 
        }, {
            loader: "sass-loader"
            }
      ]
    },
    {
        test: /\.(jpg|png)$/,
        use: {
            loader: 'file-loader',
            options: {
              name: "./src/img/[hash].[ext]"
            },
        },
        
      }

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};