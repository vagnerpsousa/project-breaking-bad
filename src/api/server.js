const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const characterController = require('./controllers/characterController');
const { error } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.use(express.json());

app.use('/character', rescue(characterController));
app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (request, response) => {
  response.send();
});