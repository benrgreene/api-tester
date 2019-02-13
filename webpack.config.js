const path = require('path');

module.exports = {
    entry: {
        'index': './src/index.js',
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname)
    }, 
    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-env']
                }
            }
        ]
    },
    mode: 'production'
}