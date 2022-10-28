import React from 'react'
import { useEffect, useState } from 'react';
import Card from '../card/Card'

export default function Cards({pokemons}) {
  

  const [pokeCurrent, setPokeCurrent] = useState(pokemons);   //lo cargo
  let cards= 12
  useEffect(()=>{
    if(!setPokeCurrent.length){
      setPokeCurrent([...pokemons].slice(cards))//copia pokemons
    }else{
      console.log(pokemons[0])
    }
      
  })
  return (
    <div>
      {pokemons.map(p => {
        return <Card
        id = {p.id}
        name = {p.name}
        img= {p.sprite}
        />
      })}
    </div>
    
  )
}

// attack:49
// defense: 49
// height: 7
// id: 1
// life: 45
// name: "bulbasaur"
// speed: 45
// sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
// types: (2) [{…}, {…}]
// weight: 69
