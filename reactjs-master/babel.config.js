module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react',{ /*Essa configuração é para executar páginas com jsx sem precisar importar o react em cada página.*/
            runtime: 'automatic'
        }]
    ]
}