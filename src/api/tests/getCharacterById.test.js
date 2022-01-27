const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('3- Sua aplicação deve ter o endpoint GET `/character/:id`', () => {
    beforeEach(() => {
        shell.exec('npx sequelize-cli db:drop');
        shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
        shell.exec('npx sequelize-cli db:seed:all');
    });

    it('Será validado que é possível listar um personagem específico com sucesso', async () => {
        await frisby
            .get(`${url}/character/1`)
            .expect('status', 200)
            .then((response) => {
                const { body } = response;
                const result = JSON.parse(body);
                expect(result.id).toBe(1);
                expect(result.name).toBe('Henry Schrader');
                expect(result.status).toBe('Deceased');
                expect(result.portrayed).toBe('Dean Norris');
            });
    });

    it('Será validado que não é possível listar um personagem inexistente', async () => {
        await frisby
            .get(`${url}/character/9999`)
            .expect('status', 404)
            .then((response) => {
                const { body } = response;
                const result = JSON.parse(body);
                expect(result.message).toBe('Character does not exist');
            });
    });
});
