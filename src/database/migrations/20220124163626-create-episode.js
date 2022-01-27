'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      season: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      episode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      air_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      series: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Episodes');
  }
};