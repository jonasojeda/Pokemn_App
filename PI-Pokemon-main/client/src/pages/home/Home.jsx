import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons } from '../../actions/actions.js';
import Cards from '../../components/cards/Cards.jsx'
export default function Home() {

    const dispatch = useDispatch();
    const totalPoke = useSelector(state => state.pokemonsTotal)

    useEffect( () => {
        dispatch(getPokemons())
    }, [dispatch])

return (
    <div>
        <Cards pokemons={totalPoke} />
    </div>
)
}
