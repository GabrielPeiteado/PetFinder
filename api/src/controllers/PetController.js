const { Pet } = require("../db");
var sequelize = require("sequelize");
const {Op} = require("sequelize");

const createPet = async (req, res, next) => {
  const { 
    name,
    mascota,
    peso,
    descripcion,
    provincia,
    ciudad,
    genero,
    edad,
    contacto,
    img
  } = req.body;
  try {
    const pet = await Pet.create({
      name,
      mascota,
      peso,
      descripcion,
      provincia,
      ciudad,
      genero,
      edad,
      contacto,
      img
    })
    res.status(200).json(pet)
  } catch (error) {
    console.log(error)
    res.status(500).send(next)
  }
}


const getAllPets = async (req, res, next) => {
  try {
    const petDB = await Pet.findAll();
      res.send(petDB);
  } catch (error) {
    next(error);
  }
};
const getPetById = async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "fallo en el servidor" });
  }
};

module.exports = {
  createPet,
  getAllPets,
  getPetById,
};
