## Introdução
Essa API em nodeJs serve para transformar dados json em arquivos com formato .xls, .pdf, .csv e .doc

## Principais bibliotecas/frameworks

*  [NodeJS](https://nodejs.org/en/)
*  [ExpressJS](https://expressjs.com/pt-br/)
*  [MongooseJs (ORM)](https://mongoosejs.com/)
*  [XLSX](https://github.com/SheetJS/sheetjs)
*  [MomentJs](https://momentjs.com/)
*  ES7 (ECMAScript 7)

## Estrutura do diretório
```
./
|-- config/ # Configurações gerais do ExpressJS 
|-- lib/ # Configurações de bibliotecas utilizadas no framework
|-- public/ # Diretório de conteúdo público, como: css, js, html, etc
|-- src/ # Priincipal diretório da API
    |-- controllers/ # Classes com os métodos que serão chamados pela rota
    |-- models/ # Modelo de dados (Domain)
    |-- repositories/ # Classes com as regras de negócio
    |-- routes/ # Classes com as rotas da API
    |-- app.js
|-- test/
|-- views/
|-- .babelrc
|-- .env.example # Arquivo exemplo com variaveis de ambiente para o projeto, deve ser alterado e renomeado para .env
|-- .eslintrc
|-- .gitignore
|-- .gitlab-ci.yml
|-- Dockerfile
|-- LICENCE
|-- README.md
|-- docker-compose.yml
|-- packge.json
|-- start.sh
```

## Como instalar dependências do node
`npm install`

## Como iniciar
`npm run start`

## Como chamar pelo Postman/Insomnia

### Rota para transformar Json em XLSX

`[POST]localhost:3001/docs/sheets`

É necessário passar no body da requição um json com esse estrutura:

`{"titulo": "Sample", "conteudo": [{}], "tipo": "xlsx"}`



