const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: { main: './src/index.ts' },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      // Loader pour les fichier javascript
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Loader pour les fichiers css
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Loader pour les fichiers svg
      { test: /\.svg$/, loader: 'svg-inline-loader' }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // Plugin pour générer un fichier index.html avec le bundle javascript
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],

  // Option pour lancer un serveur http en local.
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0:8080',
    public: 'app-68f0b59e-751b-430c-951d-52f11f7ac0f3.cleverapps.io'
  }
}