import React from 'react'
import Details from '../../components/details/Details'
import NavBar from '../../components/navBar/NavBar'
import { Link } from 'react-router-dom'
import './pokemonDetail.css'

export default function PokemonDetail() {
    
    return (
    <div className='container-pokemon-detail'>
        <div className='nav'>
            <img height={'30px'} src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png" alt="" />
            <Link to={'/home'}>
            
            <a>Return to home</a>
            </Link>
        </div>
        <Details></Details>
    </div>
    
    )
}
