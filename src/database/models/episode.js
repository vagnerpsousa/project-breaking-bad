module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define("Episode", {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING, allowNull: false },
    season: { type: DataTypes.INTEGER, allowNull: false },
    episode: { type: DataTypes.INTEGER, allowNull: false },
    air_date: { type: DataTypes.STRING, allowNull: false },
    series: { type: DataTypes.STRING, allowNull: false },
  },

    {
      timestamps: false,
    });

  return Episode;
};