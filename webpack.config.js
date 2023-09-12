const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)?$/,  // Matches both .js and .jsx files
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                },
              },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.svg$/,
              use: ['file-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  path.resolve('./public/index.html'),
        }),
        new webpack.DefinePlugin({
          'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
        }),
    ]
};