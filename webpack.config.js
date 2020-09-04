const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                // 遗留的js代码不过审，当作文件处理
                test: /legacy\/.*\.js$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }],
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /(node_modules|legacy)/
            },
            {
                test: /\.(htm|html)$/i,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // outputPath: 'images',
                            // 将图片生成至原来的目录
                            outputPath: 'assets/img',
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        // 复制遗留的文件到发布目录中，全部修改完该插件会取消
        new CopyPlugin({
            patterns: [{from: 'static/'}],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            inject: 'head', // 不能使用默认值，因为遗留的js会因此而报错
        }),
        // CDN的配置，这里的库会默认注入到网页中
        new WebpackCdnPlugin({
            prodUrl: '//cdn.jsdelivr.net/npm/:name@:version/:path',
            modules: [
                {
                    name: "jquery",
                    path: 'dist/jquery.min.js'
                }, {
                    name: "bootstrap",
                    paths: [
                        'dist/js/bootstrap.bundle.min.js',
                        'dist/js/bootstrap.min.js',
                    ],
                    style: 'dist/css/bootstrap.min.css'
                }, {
                    name: "bootstrap-select",
                    paths: [
                        'dist/js/bootstrap-select.min.js',
                        'dist/js/i18n/defaults-zh_CN.min.js',
                    ],
                    style: 'dist/css/bootstrap-select.min.css'
                }, {
                    name: "bootstrap-table",
                    path: "dist/bootstrap-table.min.js",
                    style: "dist/bootstrap-table.min.css"
                }, {
                    name: "toastr",
                    path: "build/toastr.min.js",
                    style: "build/toastr.min.css"
                }
            ]
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
    ]
};

module.exports = config;
