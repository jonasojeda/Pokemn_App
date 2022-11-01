import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons } from '../../actions/actions.js';
import NavBar from '../../components/navBar/NavBar.jsx';
import Pokedex from '../../components/pokedex/Pokedex.jsx';
import s from './Home.module.css'
export default function Home() {

    const dispatch = useDispatch();
    const totalPoke = useSelector(state => state.pokemonsTotal)

    useEffect( () => {
        dispatch(getPokemons())
    }, [dispatch])

return (
    <div>
        <NavBar/>
        {totalPoke.map(p=>console.log(p))}
        <Pokedex totalPoke = {totalPoke} /> 
    </div>
)
}
