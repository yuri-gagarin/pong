const path = require('path');
const webpack = require('webpack');

module.exports = {
    // simple config from http://webpack.github.io/docs/configuration.html
    entry: './app/app.js',
    output: { path: __dirname + "/dist", filename: "bundle.js" },

    // using webpack loader
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader", // or just "babel"
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less']
            },
            {
                test: /\.woff$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
            },
            {
                test: /\.woff2$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
            },
            {
                test: /\.(eot|ttf|svg|gif|png)$/,
                loader: "file-loader"
            }
        ]
    }
};
