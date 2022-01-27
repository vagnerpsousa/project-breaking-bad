'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CharacterEpisodes', {
      characterId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Characters',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      episodeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Episodes',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CharacterEpisodes');
  }
};