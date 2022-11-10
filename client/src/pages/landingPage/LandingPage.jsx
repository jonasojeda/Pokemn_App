import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logos/logo.png'
import gif from '../../assets/gifLoad/gif'
import media from '../../assets/media/media'
import redes from '../../assets/redSocial/redSocial'
import'./LandingPage.css';


export default function LandingPage() {
    return (
        <div>
            <div className='landing-container'>
                <div className='landing-left'>
                    <img className='landing-logo' src={logo} alt="" />
                    <h1>¡Welcome to your pokedex!</h1>
                    <p>Here you can find all the info from your favorite pokemons. Also you can let your creativity fly and create a new exclusive pokemon! I hope you like it :)</p>
                    <Link to={'/home'} ><button className='landing-button'><b>Let's go!</b></button></Link>
                    
                    <div className='media-container'>
                        <a href={redes.linkedin} target='_blank'><img className='media in' src={media.lin} alt="" /></a>
                        <a href={redes.gitHub} target='_blank' ><img className='media git' src={media.git} alt="" /></a>
                    </div>
                
                </div>
                <div className='landing-rigth'>
                    <img src={gif.landingPokeball} alt="" />
                </div>
            </div>
            
        </div>
    )
}
