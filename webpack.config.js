const HtmlWebpackPlugin = require("html-webpack-plugin"); 

const webpack = require("webpack"); 
const path = require("path");

const config = {
    entry: "./index",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },

    devServer: {
        contentBase: "./dist",
        hot: true,
        compress: true,
        port: 9000,
        open: true
    },

    watch : true,

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        js: "babel-loader"
                    }
                }
            },
            {
                test: /\.s[a|c]ss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },

    resolve: {
        alias : {},
        extensions: [ ".vue", ".js", ".json", ".css", ".scss" ]
    },

    plugins: [
    // new webpack.optimize.UglifyJsPlugin({

    //     sourceMap: true,
    //     uglifyOptions: { ecma: 8 }

    // }),
        new HtmlWebpackPlugin({ template: "./src/html/index.html" }),
        new webpack.HotModuleReplacementPlugin()

    ]
};

module.exports = config;