import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons } from '../../actions/actions.js';
import Cards from '../../components/cards/Cards.jsx'
import NavBar from '../../components/navBar/NavBar.jsx';
import s from './Home.module.css'
export default function Home() {

    const dispatch = useDispatch();
    const totalPoke = useSelector(state => state.pokemonsTotal)

    useEffect( () => {
        dispatch(getPokemons())
    }, [dispatch])

return (
    <div>
        <div className={s.background}>
            <NavBar/> 
            <Cards pokemons={totalPoke} />
        </div>
    </div>
)
}
