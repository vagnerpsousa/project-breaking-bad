const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const characterController = require('./src/api/controllers/characterController');
const { error } = require('./src/api/middlewares');

const app = express();

app.use(bodyParser.json());

app.use(express.json());

app.use('/character', rescue(characterController));
app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.get('/', (request, response) => {
  response.send();
});