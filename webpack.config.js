var webpack = require('webpack');

module.exports = {
    entry: "./client/main.tsx",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /public/],
                use: ['babel-loader'],
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    resolve: {
        extensions: ["*", ".ts", ".tsx", '.js', '.json']
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}