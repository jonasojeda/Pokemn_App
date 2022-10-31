import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getPokemonName} from '../../actions/actions'






export default function Search({setPokeCurrent}) {

    const dispatch = useDispatch();
    const pokeFilter = useSelector(state => state.pokemonsFilter)
    const [inputValue, setInputValue] = useState("");

        
    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleClick = () =>{
        dispatch(getPokemonName(inputValue))
        setInputValue("");
    }
    useEffect(() => {
        setPokeCurrent(pokeFilter)
    }, [pokeFilter, setPokeCurrent])  //atentos al pokeFilter

  return (
    <div>
        <input
            placeholder="Search your pokemon"
            type="text"
            value = {inputValue}              //el value se va actualizando
            onChange = {handleInputChange} 
        />
        <button type='button' onClick={handleClick} >Lupa</button>
    </div>
  )
}
