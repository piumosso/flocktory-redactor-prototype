module.exports = {
  entry: './app.js',

  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?plugins[]=transform-runtime,presets[]=es2015'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      },
      {
        test: /\.css/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.(svg|png)$/,
        loader: 'url?limit=25000'
      }
    ]
  }
};
