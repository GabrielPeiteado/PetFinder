const { Pet } = require("../db");
var sequelize = require("sequelize");
const {Op} = require("sequelize");

const createPet = async (req, res, next) => {
  const { 
    name,
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
    if(max && min ){
      var maxmin = await Product.findAll({

       limit: limit,
       offset: offset,
       where:{
         price:{
            [Op.between]:[min,max]
         }
       }
     })
    return res.send(maxmin)
     
   }
    if (precio) {
      if (precio === "Ascendant") {
        var asc = await Product.findAll({
          limit: limit,
          offset: offset,
          order: sequelize.literal("price ASC"),
        });
        res.send(asc);
      }
      if (precio === "Descendant") {
        var desc = await Product.findAll({
          limit: limit,
          offset: offset,
          order: sequelize.literal("price DESC"),
        });
        res.send(desc);
      }
    }
    if (categoria) {
      console.log(categoria);
      var findOne = await Product.findAll({
        limit: limit,
        offset: offset,

        include: {
          model: Categories,
          attributes: ["name"],
          through: {
            attributes: [],
          },

          where: {
            name: categoria,
          },
        },
      });

      if (findOne.length === 0) {
        return res.status(404).send("Error: Name of category is invalid");
      } else return res.json(findOne);
    }  if (maridaje) {
      var findOne = await Product.findAll({
        limit: limit,
        offset: offset,

        include: {
          model: Pairing,
          attributes: ["name"],
          through: {
            attributes: [],
          },

          where: {
            name: maridaje,
          },
        },
      });

      if (findOne.length === 0) {
        return res.status(404).send("Error: Name of Pairing is invalid");
      } else return res.json(findOne);
    }
    if (bodega) {
      var findOne = await Product.findAll({
        limit: limit,
        offset: offset,
        include: {
          model: Wineries,
          attributes: ["name"],
          where: {
            name: bodega,
          },
        },
      });

      if (findOne.length === 0) {
        return res.status(404).send("Error: Name of CELLAR is invalid");
      } else return res.json(findOne);
    } else {
      const productDB = await Product.findAll({
        limit: limit,
        offset: offset,
        // attributes: { exclude: ["createdAt", "updatedAt"] },
        include: {
          model: Categories,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      res.send(productDB);
    }
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
