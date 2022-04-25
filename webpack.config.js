const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const mode = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = () => {

    return {
        mode,
        devServer: {
            historyApiFallback: true,
            // inline: true,
            port: 3000,
            hot: true,
            // publicPath: '/',
        },
        entry: {
            app: path.join(__dirname,  './src/index.tsx'),
        },

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },

        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: ['babel-loader', 'ts-loader'],
                    // exclude: path.join(__dirname, "/node_modules/")
                },
                {
                    test: /\.(jpe?g|png|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: 'assets/images/[name].[hash:8].[ext]',
                            }
                        }
                    ]
                },
                {
                    test: /\.(scss|css)$/,
                    use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    }, 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/fonts',
                },
            ],
        },

        output: {
            path: path.join(__dirname, '/build/static'),
            filename: '[contenthash].bundle.js',
        },

        plugins: [
            // new webpack.ProvidePlugin({
            //   React: 'react',
            // }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            // new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin(),
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: ['build']
            })
        ]
    }
};