module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Characters',
      [{
        id: 1,
        name: 'Henry Schrader',
        birth_day: 'Unknown',
        img: 'https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136',
        status: 'Deceased',
        nick_name: 'Hank',
        portrayed: 'Dean Norris'
      },
      {
        id: 2,
        name: 'Jesse Pinkman',
        birth_day: '09-24-1984',
        img: 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441',
        status: 'Alive',
        nick_name: 'Cap n Cook',
        portrayed: 'Aaron Paul'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Characters', null, {});
  },
};