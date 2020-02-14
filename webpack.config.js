var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Progress.js',
    output: {
        path: path.resolve('lib'),
        filename: 'Progress.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
