module.exports = [
    {
        entry: './src/js/main.js',
        output: {
            path: './src',
            filename: 'js/main.bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components|vendor)/,
                    loaders: ['babel-loader', 'eslint-loader']
                }
            ]
        },
        devServer: {
            contentBase: './src',
            progress: true,
            colors: true,
            inline: true
        },
        devtool: 'source-map',
        eslint: {
            failOnWarning: false,
            failOnError: true,
            configFile: './.eslintrc.json'
        }
    }
];
