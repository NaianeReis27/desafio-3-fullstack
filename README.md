<h1 align="center">
   🧠 Desafio Fullstack
</h1>

## Projeto

O desafio consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar o cliente e seus contatos vinculados. para estudo e prática com as tecnologias, Node, Typescript, TypeORM, JWT e Express. O projeto foi desenvolvido com a linguagem Typescript com a base em Node, e utilizando o padrão MVC para organização e estrutura do projeto. A base de dados foi criada com PostgreSQL em conjuto com o TypeORM, na criação das entidades e seus relacionamentos com as migrations. O projeto está separado em dois módulos:

- Uma api REST contendo todos os recursos de um CRUD (create, read, update, delete).

- E módulo web, que ainda está sendo desenvolvido, utilizando React e Axios para a comunicação da api.

## Tecnologias

- Node
- Express
- Typescript
- PostgreSQL
- TypeORM
- JWT
- React
- SASS
- Axios


## Instruções

1. Para rodar o projeto é necessário criar uma base de dados utilizando o PostgreSQL e alterar o nome para a sua base criada no arquivo `.env` na raiz do projeto. Além de mudar as confgurações de usuário, porta ou host casa sejam diferentes.

2. Após criar a base de dados é necessário rodar o compando abaixo para installar todas as dependências utilizadas no projeto.
### `yarn install`

3. Após instalar as dependências é preciso rodar o comando abaixo para que as tabelas sejam criadas e preenchidas na base de dados.
### `yarn migrations-run`

4. Para rodar o servidor use o seguinte comando.
### `yarn dev`

5. Para rodar a aplicação front-end use o seguinte comando.
### `yarn start`


*Obs => Api rodando na porta 33333 