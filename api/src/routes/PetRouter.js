const server = require("express").Router();

const {
    createPet,
    getAllPets,
    getPetById,
} = require('../controllers/PetController');

server.post('/createPet', createPet);
server.get('/getAllPets', getAllPets);
server.get('/getPetById/:id', getPetById);

module.exports = server;