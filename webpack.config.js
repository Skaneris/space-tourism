// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const stylesHandler = MiniCssExtractPlugin.loader;

// const CopyPlugin = require('copy-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production';

const siteName = "Space tourism";


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    devServer: {
        open: true,
        host: 'localhost',
        static: {
            directory: path.join(__dirname, 'src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            title: siteName,
        }),

        new HtmlWebpackPlugin({
            filename: 'destination.html',
            template: './src/html/destination.html',
            title: siteName + ' | Destination',
        }),

        new HtmlWebpackPlugin({
            filename: 'crew.html',
            template: './src/html/crew.html',
            title:  siteName + ' | Crew',
        }),

        new HtmlWebpackPlugin({
            filename: 'technology.html',
            template: './src/html/technology.html',
            title: siteName + ' | Technology',
        }),

        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),

        // new CopyPlugin({
        //     patterns: [
        //         { from: path.resolve(__dirname, "src", "html", "images"), to: "images" }
        //     ],
        // })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
