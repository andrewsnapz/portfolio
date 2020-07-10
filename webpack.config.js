const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
        path: path.join(__dirname + '/build'),
        filename: 'bundle.js'
    },
    devServer: {
        // contentBase: path.resolve(__dirname + "/build"),
        publicPath: '/build/',
        liveReload: true,
        // proxy: {
        //     "/": "http://localhost:3000",
        // },
        // port: 9000,
    },
    //check what performance options do?
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    },
    mode: 'development',
    // plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: path.resolve(__dirname + './node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ],
    }
}