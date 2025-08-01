const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle[hash].js',    
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        // Regra para CSS Modules (arquivos terminados em .module.css)
        {
            test: /\.module\.scss$/, // IMPORTANTE: Corresponde a .module.css
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true, // Habilita CSS Modules
                    },
                },
                'sass-loader',
            ],
        },
        // Regra para CSS Global (arquivos .css que NÃO terminam em .module.css)
        {
            test: /\.scss$/, // Corresponde a qualquer .scss
            exclude: /\.module\.scss$/, // IMPORTANTE: Exclui arquivos .module.css
            use: [
                'style-loader', 
                'css-loader',
                'sass-loader',
            ], // Sem 'modules: true' aqui
        },
    ],
},

    devServer: {
        port: 3000,
    }
}