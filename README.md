### Project Breaking Bad

Nesse projeto, foi desenvolvido um back-end usando ORM com o pacote sequelize do npm, capaz de:

- Criar e associar tabelas usando models do sequelize
- Construir endpoints para consumir os models que criar
- Fazer um CRUD com o ORM
- Validar os dados com a ferramenta Joi
- Fazer requisições de API utilizando o Axios
- Interação com o banco de dados MySQL
- Testes de integração com Jest



### Rodando o projeto

```bash
git clone git@github.com:vagnerpsousa/project-breaking-bad.git
```

```bash
cd project-breaking-bad
```

```bash
npm install
```

- Crie um arquivo .env com as seguintes variaveis de ambiente:

`MYSQL_USER`
`MYSQL_PASSWORD`
`HOSTNAME`


```bash
npm start
```

### Execução de testes 

```bash
npm test
```

### endpoints:

-  POST `/character`
-  GET `/character`
-  GET `/character/id`
-  PUT `/character/id`
-  DELETE `/character/id`

### deploy

- Utilizei os serviços do Heroku, que é necessário criar uma conta na plataforma. Se ainda não possui uma conta, acesse o [site oficial](https://id.heroku.com/login) e se cadastre.

- Para sistemas Linux , instale o snap do Heroku CLI, executando o seguinte comando:

```bash
sudo snap install heroku --classic
```

- Para sistemas macOS , instale o Heroku CLI, executando o seguinte comando:

```bash
brew tap heroku/brew && brew install heroku
```

- Após a instalação ser concluída, você poderá acessar o Heroku por meio do seu terminal.

```bash
heroku login
```

- Para adicionar o remote do Heroku , basta usar o comando create do CLI dentro da pasta da aplicação, da seguinte maneira:

```bash
heroku create
```

- Para fazer deploy do seu app Heroku, basta você utilizar o comando git push de seu repositório local para a branch master do remote do Heroku:

```bash
git push heroku-origin master
```

- Pronto! Acesse a URL retornada pelo Heroku e você verá que sua aplicação está no ar!















  

  
  
  

