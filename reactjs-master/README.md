#Projeto Ignite Trilha ReactJS.

#Arquivos ".jsx" é quando usamos html dentro do javascript, pode usar apenas ".js" ou ".jsx".

Passos para criar a estrutura:

1) yarn init -y (vai gerar o package.json onde contém as dependências do projeto).
2) yarn add react (instala a dependência do react que vai parar dentro do package.json e cria a node_modules que armazena
as dependências das bibliotecas instaladas no projeto, por exemplo, o código do próprio react vai para node_modules e fica citado em package.json).
3) yarn add react-dom (que é a forma de trabalhar com react na web. Contém a árvore dom de elementos do HTML.)

Instalando o Babel (Converte o JavaScript de modo que os navegadores consigam compreender o código JS em qualquer navegador.)

1) yarn add @babel/core @babel/cli @babel/preset-env -D (o -D indica que é para usar apenas para desenvolvimento.)

@babel/core: É a biblioteca do babel. 
@babel/cli:  Para conseguir executar o babel por linha de comando.
@babel/preset-env: É uma biblioteca do babel para identificar o ambiente que a aplicação está sendo executada para converter o código da melhor forma possível.


2) depois de instalado é necessário criar o babel.config.js e colocar (exportar) as bibliotecas que serão usadas.
3) yarn babel src/index.js --out-file dist/bundle.js (yarn babel é para executar o babel e o resto do  texto indica o caminho, onde o código
javascript está e para onde ele vai ficar convertido. bundle.js é uma conversão utilizad para ter códigos babel.)
4)  yarn add @babel/preset-react -D (instala a biblioteca para o babel reconhecer o React).

@babel/preset-react: Identifica o ambiente react.

Instalando o Webpack (Ajuda a deixar o projeto mais legível pegando arquivos .sass e transformando .css e etc.)

1) yarn add webpack webpack-cli webpack-dev-server -D
2) criar um arquivo de configuração do webpack chamado webpack.config.js e criar as configurações.
3) yarn add babel-loader -D (integração entre o babel e o webpack.)


Instalando o HTMLWebpackPlugin para fornecer HTML estático.

1)  yarn add html-webpack-plugin -D
2) importar dentro de webpack.config.js "const HtmlWebpackPlugin = require('html-webpack-plugin')" e utilizar dentro de do arquivo de configurações do webpack. 

Instalando o WebPackDevServer para otimizar e executar automaticamente o webpack.

1) yarn add webpack-dev-server -D
2) dentro do arquivo de configurações webpack.config.js configurar da seguinte maneira:

  devServer:{
        static: path.resolve(__dirname, 'public'),
    },

3) rodar yarn webpack server