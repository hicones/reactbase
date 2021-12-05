const path = require('path') /* aqui eu consigo recuperar o path de onde está este arquivo para ficar compatível com vários SO.*/
const HtmlWebpackPlugin = require('html-webpack-plugin') 

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname,'src','index.jsx'), /*entry indica onde está o arquivo principal da aplicação.*/
    output: { /*aqui indica onde está o arquivo de saída da aplicação.*/
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx'] /*como estou usando arquivos .jsx preciso falar para aplicação que é para ler arquivos .jsx*/
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public','index.html')
        })
    ],
    module: {
        rules: [ /*crio um array de regras para verificar se o arquivo é um arquivo .jsx conforme essa regra criada.*/
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
};