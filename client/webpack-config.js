const { dirname } = require('path');
const path = require('path')

const cwd = process.cwd();

module.exports = {
    mode: 'production',
    entry: 'src/index.tsx',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [cwd, 'node_modules']
    },
    devServer: {
        contentBase: path.join(__dirname, 'stub'),
        compress: true,
        port: 8081,
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx|js)$/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    cacheDirectory: true,
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: false,
                                targets: {
                                    browsers: ['last 2 versions', '> 1%', 'not ie < 11']
                                }
                            }
                        ],
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ]
                }
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                // Включить этот лоадер, чтобы убедиться, что работает разделение процессинга стилей
                                // require('postcss-nested'),
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last 2 versions', '> 1%', 'not ie < 11'],
                                    grid: true
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localsConvention: 'camelCase'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('postcss-import'),
                                require('postcss-for'),
                                require('postcss-custom-properties')({ preserve: false }),
                                require('postcss-custom-media')({ preserve: false }),
                                require('postcss-nested'),
                                require('postcss-color-function'),
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last 2 versions', '> 1%', 'not ie < 11'],
                                    grid: true
                                }),
                                require('postcss-calc'),
                                require('postcss-discard-comments'),
                                require('cssnano')({ preset: 'default' })
                            ]
                        }
                    }
                ]
            }
        ]
    },

    context: cwd,

    output: {
        path: path.resolve(cwd, 'stub'),
        filename: 'index.js'
    },
};
