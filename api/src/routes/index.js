const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PetRouter = require('./PetRouter');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pet', PetRouter);

module.exports = router;
