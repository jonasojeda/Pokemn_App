const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
console.log("Estoy en index routers")
const typesRouter = require('./type.js');         //importando las rutas
const pokemonsRouter = require('./pokemon.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokemonsRouter);  
router.use("/types", typesRouter);    

module.exports = router;
