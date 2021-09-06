const server = require("express").Router();

const {
    getUser,
    editUser,
    getAllUsers,
} = require('../controllers/UsersController');

server.post('/getUser/:id', getUser);
server.put('/editUser/:id', editUser);
server.get('/', getAllUsers);

module.exports = server;