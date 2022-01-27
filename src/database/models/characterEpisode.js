module.exports = (sequelize, DataTypes) => {
  const CharacterEpisode = sequelize.define('CharacterEpisode', {
    characterId: DataTypes.INTEGER,
    episodeId: DataTypes.INTEGER 
  },
    {
      timestamps: false,
    });

  CharacterEpisode.associate = (models) => {
    models.Character.belongsToMany(models.Episode, {
      as: 'episodes',
      through: CharacterEpisode,
      foreignKey: 'characterId',
      otherKey: 'episodeId',
    });

    models.Episode.belongsToMany(models.Character, {
      as: 'characters',
      through: CharacterEpisode,
      foreignKey: 'episodeId',
      otherKey: 'characterId',
    },
      { timestamps: false });

  };
  return CharacterEpisode;
};
