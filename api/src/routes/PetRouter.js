const server = require("express").Router();

const {
    createPet,
    getAllPets,
    getPetById,
    getPetByUserId,
    deletePetById,
    editPet
} = require('../controllers/PetController');

server.post('/createPet', createPet);
server.get('/getAllPets', getAllPets);
server.get('/getPetById/:id', getPetById);
server.get('/getPetByUserId/:id', getPetByUserId);
server.delete('/deletePetById/:id', deletePetById);
server.put('/editPet/:id', editPet);

module.exports = server;