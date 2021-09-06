const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PetRouter = require('./PetRouter');
const UserRouter = require('./UserRouter');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pet', PetRouter);
router.use('/user', UserRouter);

module.exports = router;
