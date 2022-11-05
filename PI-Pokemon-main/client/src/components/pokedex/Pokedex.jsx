import React from 'react'
import { useEffect, useState } from 'react';
import Cards from '../cards/Cards'
import Clean from '../clean/Clean';
import Search from '../search/Search';
import TypesPokemon from '../typesPokemon/TypesPokemon';
import Pagination from '../pagination/Pagination'
import Sort from '../Sort/Sort';
import NotFound from '../notFound/NotFound';

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

            <Sort totalPoke={totalPoke} pokeCurrent={pokeCurrent} setPokeCurrent={setPokeCurrent}/>
            
            <Clean/>

            {(pokeCurrent.length > 0 || (pokeCurrent.name !== undefined && pokeCurrent.name !== 'AxiosError'))
            ?<Cards pokeCurrent={pokeCurrent}/>
            :<NotFound/>}
            
            <Pagination totalPoke={totalPoke} setPokeCurrent={setPokeCurrent} />

        </div>
    )
}
