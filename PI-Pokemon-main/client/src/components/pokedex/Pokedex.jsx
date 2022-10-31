import React from 'react'
import { useEffect, useState } from 'react';
import Cards from '../cards/Cards'
import Search from '../search/Search';

export default function Pokedex({totalPoke}) {
    const cards = 9;
    const [pokeCurrent, setPokeCurrent] = useState(totalPoke);   //lo cargo
    
    useEffect( () => {
        setPokeCurrent([...totalPoke].slice(0,cards))  //copia del totalPoke
    },[totalPoke])

    return (
        <div>
            <Search setPokeCurrent={setPokeCurrent}/>
            {/* <Cards pokemons={totalPoke} /> */}
        </div>
    )
}
