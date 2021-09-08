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
  const { id } = req.params;
  try {
    const petDB = await Pet.findByPk(id);
    res.json(petDB);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Fallo en el servidor" });
  }
};

const getPetByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const petDB = await Pet.findAll({
      include: User,
      where: {
        id,
      }
    });
    res.json(petDB);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Fallo en el servidor" });
  }
};

const deletePetById =  async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletePet = await Pet.destroy({
      where: {
        id,
      }
    });
    res.status(200).json({ message: "Mascota eliminada correctamente", data: deletePet})
  } catch (error) {
    res.json({message: 'Delete Failed'}).send(next)
  }
} 

const editPet = async (req, res, next) => {
  const { id } = req.params;
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
    const editedPet = await Pet.findAll({
      where: {
        id,
      }
    })
    if (editedPet.length > 0) {
      editedPet.map(async (p) => {
        await p.update({
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
      })
      return res.json({ message: 'Pet updated', data: editedPet })
    }
  } catch (error) {
    res.status(500).json({message: 'Pet updated failed'})
  }
}

module.exports = {
  createPet,
  getAllPets,
  getPetById,
  getPetByUserId,
  deletePetById,
  editPet,
};
