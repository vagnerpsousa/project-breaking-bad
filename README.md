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









  

  
  
  

