import React from 'react'
import Button from '../button/Button.jsx'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { getPokemons } from '../../actions/actions'
import './NavBar.css'
export default function NavBar() {
    const dispatch = useDispatch();
    return (
        <header className='background'>
            <div className='container'>
            <Link to={'/'} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" width='200px' /></Link>
            <Button name='Create' className='yellow-button' link={'/create'}/>
            </div>
            
            
        </header>
    
    )
}
