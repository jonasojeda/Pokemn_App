const { Router } = require('express');
const {getAllPoke, getPokeByName, getPokeById, postPokedb} = require ('../controllers/PokemonController.js');

const router = Router()

//ruta a pokemons  y pokemons/?name
router.get('/', async (req, res) => {
    try {
        const {name} = req.query;    //cuando hago el search en el front
        if(!name) { 
            return res.status(200).send(await getAllPoke()); //Trae todos los pokemons
        }else{
            const pokeFoundName = await getPokeByName(name); // En de que se envie un name Busca el pokemon por name
            //console.log('pokeFound',pokeFoundName);
            if(pokeFoundName) {
                return res.status(200).json(pokeFoundName)
            }
        }
    } catch (error) {
        console.log('error');
        return res.status(404).send('Pokemon not found');// Encaso de que la api no funcione o no encuntre el pokemon
    }
});

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id)
        const pokeFoundId = await getPokeById(id);
        if(pokeFoundId) return res.status(200).json(pokeFoundId)

    } catch (error) {
        console.log('entro error');
        return res.status(404).send('Pokemon not found');
    }
});

router.post('/', async (req, res) => {
    try {
        const pokeData = req.body
        // console.log('holaaaaa', pokeData)
        await postPokedb(pokeData)
        return res.status(200).send('Pokemon creado con exito')

    } catch (error) {
        res.status(400).send('Fallo al crear el pokemon')
    }
});

module.exports = router;
