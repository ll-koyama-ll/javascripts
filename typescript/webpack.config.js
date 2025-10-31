const MODE = 'production'
const PugPlugin = require('pug-plugin')

module.exports = {
  mode: MODE,
  target: ['web', 'es5'],
  entry: {
    index: './src/template/index.pug'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  devServer: {
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true
      }
    },
    static: {
      directory: './docs'
    }
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.pug/,
        loader: PugPlugin.loader
      },
      {
        test: /\.ts$/,
        use: [
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      extractCss: {
        filename: 'main.css'
      },
    })
  ]
}
