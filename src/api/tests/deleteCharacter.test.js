const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('5 - Sua aplicação deve ter o endpoint DELETE `/character/:id`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
    shell.exec('npx sequelize-cli db:seed:all');
  });

  it('Será validado que é possível deletar um personagem com sucesso', async () => {
    await frisby
      .delete(`${url}/character/1`)
      .expect('status', 204);
  });

  it('Será validado que não é possível deletar um personagem inexistente', async () => {
    await frisby
      .delete(`${url}/character/111`)
      .expect('status', 404)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Character does not exist');
      });
  });

  
});
