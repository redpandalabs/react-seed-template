var webpack = require("webpack")
var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var DEV_MODE = process.env.NODE_ENV

function loadConstantsFromEnvironment() {
    var defines =  {}
    if (DEV_MODE === "prod") {
        // removes a lot of debugging code in React
        defines["process.env"] = {
            "NODE_ENV": JSON.stringify("production")
        }
        return defines
    } else {
        return defines
    }
}

var config = {
    context: __dirname,
    entry: {
        mainjs: ["babel-polyfill", "./src/js/index"] // entry point of our app. src/js/index.js should require other js modules and dependencies it needs
    },
    output: {
        path: path.resolve("./build/"),
        filename: "[name]-[hash].js",
        publicPath: "/",
    },
    devServer: {
        port: process.env.PORT,
        host: "0.0.0.0"
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx$|\.js$/,
                loader: "eslint-loader",
                include: __dirname + "/src"
            },
        ],
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: [
                        "transform-decorators-legacy",
                        "transform-react-remove-prop-types",
                        "transform-react-inline-elements",
                    ],
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader",
                    "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"
                )
            },
            {
                test: /\.ttf$/,
                loader: "file-loader"
            },
            {
                test: /\.otf$/,
                loader: "file-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=8192&mimetype=image/png"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=8192&mimetype=image/jpg"
            },
            {
                test: /\.ico/,
                loader: "url-loader"
            },
            {
                test: /\.svg$/,
                loader: "svg-inline"
            }
        ],
    },
    resolve: {
        modulesDirectories: ["node_modules"],
        extensions: ["", ".js", ".jsx"]
    },
    plugins: [
        new ExtractTextPlugin("[name]-[hash].css", {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: "KOKO Surveys",
            inject: false,
            template: "index.ejs"
        }),
        new webpack.DefinePlugin(loadConstantsFromEnvironment())
    ]
}

if (DEV_MODE === "prod") {
    config.plugins = config.plugins.concat([
        // keeps hashes consistent between compilations
        new webpack.optimize.OccurenceOrderPlugin(),
        // minifies your code
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ])
} else {
    config.devtool = "source-map"
}

module.exports = config
