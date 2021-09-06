const server = require("express").Router();

const {
    getUser,
    editUser,
    getAllUsers,
} = require('../controllers/UsersController');

server.post('/getUser/:id', getUser);
server.get('/editUser/:id', editUser);
server.get('/', getAllUsers);

module.exports = server;