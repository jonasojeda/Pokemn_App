import React from 'react'
import Button from '../button/Button.jsx'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { getPokemons } from '../../actions/actions'

export default function NavBar() {
    const dispatch = useDispatch();
    return (
        <header>
            <Link to={'/create'} ><button>Create</button></Link>
            
            
        </header>
    
    )
}
