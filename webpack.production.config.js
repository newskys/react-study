const path = require('path');

module.exports = {
  entry: {
      app: path.resolve(__dirname, './src/index.js'), // 직접 코드 수정하는 부분
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    // new DotEnv({
    //   path: path.resolve(__dirname, './.env.dev'),
    // }),
  ],
//   optimization: {
//     splitChunks: {
//       maxInitialRequests: Infinity,
//       chunks: 'all',
//       cacheGroups: {
//         react: {
//           test: /[\\/]node_modules[\\/](react|@egjs|date-fns)/,
//           chunks: 'all',
//           name: 'react',
//           enforce: true,
//         },
//         vendor: {
//           test: /[\\/]node_modules[\\/](?!react|@egjs|date-fns)/,
//           chunks: 'all',
//           name: 'vendor',
//           enforce: true,
//         },
//       },
//     },
//   },


  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
  },
  resolve: {
      extensions: ['.js', '.jsx'],
  }
};