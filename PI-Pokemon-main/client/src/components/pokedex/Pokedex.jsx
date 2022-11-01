import React from 'react'
import { useEffect, useState } from 'react';
import Cards from '../cards/Cards'
import Clean from '../clean/Clean';
import Search from '../search/Search';
import TypesPokemon from '../typesPokemon/TypesPokemon';
import Pagination from '../pagination/Pagination'

export default function Pokedex({totalPoke}) {
    const cards = 12;
    const [pokeCurrent, setPokeCurrent] = useState(totalPoke);   //lo cargo
    
    useEffect( () => {
        setPokeCurrent([...totalPoke].slice(0,cards))  //copia del totalPoke
    },[totalPoke])

    return (
        <div>
            <Search setPokeCurrent={setPokeCurrent}/>
            <TypesPokemon setPokeCurrent={setPokeCurrent} />
            <Clean/>
            <Cards pokeCurrent={pokeCurrent} />
            <Pagination totalPoke={totalPoke} setPokeCurrent={setPokeCurrent} />
        </div>
    )
}
