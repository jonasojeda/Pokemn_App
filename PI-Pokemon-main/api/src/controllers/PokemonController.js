const axios = require('axios');
const {API_POKEMON, API_POKEMON_NAME_OR_ID}= require('../utils/utils.js')

//Llama al Api 
const callApi = async() =>{
    let arrayPokemons = []

    await axios.get(API_POKEMON)
    .then(response => response.data.results.map(p => arrayPokemons.push(getPokemon(p.name))))

    return arrayPokemons;
}


//recibe objeto pokemon de la api y pushea en el arreglo que retornara
const getPokemon = async(pokemon) =>{
    let objPokemon={};

    return objPokemon= await axios.get(`${API_POKEMON_NAME_OR_ID}${pokemon}`)
    .then(response => objPokemon={
        id: response.data.id,
        name : response.data.name,
        img: response.data.sprites.other.dream_world.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        height: response.data.height,
        weight: response.data.weight,
    })
}

const mostrar = async()=>{
    console.table(await callApi());
}
mostrar()