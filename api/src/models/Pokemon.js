const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vida: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ataque: {
      type: DataTypes.STRING,
      allowNull: false
    },
    defensa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    velocidad: {
      type: DataTypes.STRING
    },
    altura: {
      type: DataTypes.STRING
    },
    peso: {
      type: DataTypes.STRING
    },
  }, { timestamps: false });
};
