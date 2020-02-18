var webpack = require("webpack");
var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Progress.js',
    output: {
        path: path.resolve('lib'),
        filename: 'Progress.js',
        library: 'Progress',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true,
        globalObject: `(typeof self !== 'undefined' ? self : this)`
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
}
