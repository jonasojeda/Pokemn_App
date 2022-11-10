import React from 'react'
import Card from '../card/Card'
import './Cards.css'

export default function Cards({pokeCurrent}) {

  return (
    <div className='cards-container'>
      {Array.isArray(pokeCurrent) ?
				pokeCurrent.map(poke => (
          <Card 
						key={poke.id}
						id={poke.id}
						name={poke.name}
						img={poke.sprite}
						types={poke.types}
					/>
            ))
			:<Card 
			key={pokeCurrent.id}
			id={pokeCurrent.id}
			name={pokeCurrent.name}
			img={pokeCurrent.sprite}
			types={pokeCurrent.types}
		/>}
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
