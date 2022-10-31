import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsTypes, filterType} from '../../actions/actions.js';

export default function TypesPokemon({setPokeCurrent}) {
    const dispatch = useDispatch();
    const types = useSelector(state => state.pokemonsTypes);
    const pokeFilter = useSelector(state => state.pokemonsFilter)
    
    useEffect(() => {
        dispatch(getPokemonsTypes())
    }, [dispatch])

    useEffect(() => {
        setPokeCurrent(pokeFilter)
    }, [pokeFilter, setPokeCurrent])   //atento cambios filter

  return (
    <div>
        Types Pokemon
    </div>
  )
}
