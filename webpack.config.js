var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Progress.js',
    output: {
        path: path.resolve('lib'),
        filename: 'Progress.js',
        libraryTarget: 'umd',
        library: 'lib',
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
    }
}
