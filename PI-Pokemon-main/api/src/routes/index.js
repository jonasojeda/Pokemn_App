const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const typesRoute = require('./type.js');         //importando las rutas
const pokemonsRoute = require('./pokemon.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemon", pokemonsRoute);  
router.use("/type", typesRoute);    

module.exports = router;
