import React from 'react'
import { useEffect, useState } from 'react';
import Card from '../card/Card'
import s from './Cards.module.css'

export default function Cards({pokemons}) {
  
  const [currentPokemons, setCurrentPokemons] = useState(0)

  const subList = pokemons.slice(currentPokemons, currentPokemons+12)

  const nextPage=()=>{
    setCurrentPokemons(currentPokemons+12)
  } 
  const prevPage = ()=>{
    if(currentPokemons>0){
      setCurrentPokemons(currentPokemons-12)
    }
    
  }

  return (
    <div>
      <button onClick={nextPage} >Next</button>
      <button onClick={prevPage} >Prev</button>
      <div className={s.container}>
      {subList.map(p => {
        return <Card
        id = {p.id}
        name = {p.name}
        img= {p.sprite}
        />
      })}
      </div>
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
