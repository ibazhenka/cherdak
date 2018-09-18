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
    devtool: 'source-map',
    entry:{
        lib: [hotMiddlewareScript],
        schedule: './assets/schedule/index.js',
        teacher: './assets/teacher/index.js',
        dance: './assets/dance/index.js',
        about: './assets/about/index.js',
        arenda: './assets/arenda/index.js',
        events: './assets/events/index.js',
        homepage: './assets/homepage/index.js',
        dancePage: './assets/dance/page/index.js',
        teacherPage: './assets/teacher/page/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/static',
        library: '[name]Module',
        libraryTarget: 'umd',
      
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