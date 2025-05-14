const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    // devtool: "eval-source-map",
    // devSever: {
    //     watchFiles : ["./src/template.html"],
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.txt/i,
                loader: "raw-loader",
            },
            {
                test: /\.(ttf|woff|woff2)$/i,
                type: "asset/resource",
            }
        ],
    },
};  