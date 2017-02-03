module.exports = [
    {
        entry: './src/js/main.js',
        output: {
            path: './src',
            filename: 'js/main.bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components|vendor)/,
                    enforce: 'pre',
                    use: [
                        {
                            loader: 'eslint-loader',
                            options: {
                                failOnWarning: false,
                                failOnError: true,
                                configFile: './.eslintrc.json'
                            }
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components|vendor)/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                }
            ]
        },
        devServer: {
            contentBase: './src',
            progress: true,
            colors: true,
            inline: true
        },
        devtool: 'source-map'
    }
];
