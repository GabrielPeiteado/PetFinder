const {DataTypes} = require("sequelize") 

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mascota: {
      type: DataTypes.STRING,
      allowNull: false
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
/// gabi trola