module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define("Character", {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    birth_day: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    nick_name: { type: DataTypes.STRING, allowNull: false },
    portrayed: { type: DataTypes.STRING, allowNull: false } 
  },

    {
      timestamps: false,
    });

  return Character;
};