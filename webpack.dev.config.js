var webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
      path: __dirname + '/public/',
      filename: 'bundle.js',
    },
    
    devServer: {
        port: 3001,
        inline: true,
        contentBase: __dirname + '/public/',
        host: '0.0.0.0',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },

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