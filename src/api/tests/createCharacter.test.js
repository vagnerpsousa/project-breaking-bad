const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('1 - Sua aplicação deve ter o endpoint POST `/character`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
    shell.exec('npx sequelize-cli db:seed:all');
  });

  it('Será validado que é possível cadastrar um personagem com sucesso', async () => {
    await frisby
      .post(`${url}/character`,
        {
          name: 'Skyler White'
        })
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.token).not.toBeNull();
      });
  });

  it('Será validado que não é possível cadastrar um personagem que não existe na API', async () => {
    await frisby
      .post(`${url}/character`,
        {
          name: 'José Maria'
        })
      .expect('status', 404)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Character does not exist');
      });
  });

  it('Será validado que não é possível cadastrar um personagem com nome incompleto', async () => {
    await frisby
      .post(`${url}/character`,
        {
          name: 'Walter'
        })
      .expect('status', 404)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Inform the full name');
      });
  });

  it('Será validado que não é possível cadastrar um personagem que já existe no banco de dados', async () => {
    await frisby
      .post(`${url}/character`,
        {
          name: 'Henry Schrader'
        })
      .expect('status', 404)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Character is already registered');
      });
  });
});
