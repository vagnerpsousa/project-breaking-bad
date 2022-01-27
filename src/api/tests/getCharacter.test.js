const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('2 - Sua aplicação deve ter o endpoint GET `/character`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
    shell.exec('npx sequelize-cli db:seed:all');
  });

  it('Será validado que é possível listar todos os personagens', async () => {
    await frisby
      .get(`${url}/character`)
      .expect('status', 200)
      .then((responseSales) => {
        const { json } = responseSales;
        const firstCharacter = json[0];
        const secondCharacter = json[1];
        expect(firstCharacter.name).toBe('Henry Schrader');
        expect(firstCharacter.status).toBe('Deceased');
        expect(firstCharacter.portrayed).toBe('Dean Norris');
        expect(secondCharacter.name).toBe('Jesse Pinkman');
        expect(secondCharacter.status).toBe('Alive');
        expect(secondCharacter.portrayed).toBe('Aaron Paul');
      });
  });
});
