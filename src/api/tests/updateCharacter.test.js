const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('4 - Sua aplicação deve ter o endpoint PUT `/character/:id`', () => {
    beforeEach(() => {
        shell.exec('npx sequelize-cli db:drop');
        shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate');
        shell.exec('npx sequelize-cli db:seed:all');
    });

    it('Será validado que é possível editar um personagem com sucesso', async () => {
        await frisby
            .put(`${url}/character/1`, {
                name: 'Henry Schrader',
                birthDay: "1976-03-25",
                img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
                status: "Deceased",
                nickName: "Hank",
                portrayed: "Dean Norris",
            })
            .expect('status', 200)
            .then((response) => {
                const { json } = response;
                expect(json.name).toBe('Henry Schrader');
                expect(json.birth_day).toBe('1976-03-25');
                expect(json.status).toBe('Deceased');
                expect(json.nick_name).toBe('Hank');


            });
    });
});
