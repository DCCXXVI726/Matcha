const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    target: 'web',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            Public: path.resolve('./public/'),
            Styles: path.resolve('./src/styles/'),
            I18n: path.resolve('./src/i18n.js'),
            Constants: path.resolve('./src/Constants/'),
        }
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
              test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
        ],
    },
    plugins: [
        new UnusedFilesWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: './src/components/index.css',
        }),
    ],
};
