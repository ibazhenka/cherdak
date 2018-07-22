'use strict'

const path = require('path');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/* new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }), */
const webpack = require('webpack');
const devMode = true
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
module.exports = {
    mode: 'development',
    entry:{
        schedule:  ['./assets/schedule/index.js', hotMiddlewareScript],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/static',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader',
                ],
            }
        ]
    }
}