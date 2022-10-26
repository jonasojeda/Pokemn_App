import React, { useEffect } from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons } from '../../actions/actions.js';
import Cards from '../../components/cards/Cards.jsx'
export default function Home() {

    const [pokes, setPokes] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/pokemons")
        .then(data => data.json())
        .then(data => data.map(p => console.log(p)))
    },[])

return (
    <div>
        
        <Cards/>
    </div>
)
}
