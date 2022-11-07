import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPokemonDetail } from '../../actions/actions';
import imgTypes from '../../assets/helpers/TypesIcon';
import Loader from '../../pages/loading/Loading.jsx';
import LevelBar from '../levelBar/LevelBar';
import './detail.css'

export default function Details() {
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const { id } = useParams();
    useEffect(() => {
      dispatch(getPokemonDetail(id.slice(1, id.length)))
  }, [dispatch])

  const { sprite, life, types, name, height, attack, defense, speed, weight } = pokemonDetail;

    const truncateString = (str, num) => {
        if (str.length <= num) return str
        return str.slice(0, num) + '...'
    }
  return (
    <div className='detail-container'>

      <div className='card-detail'>

      <div>{name}</div>

        <div className='left-container'>
          <img src={sprite} alt="" />
          

        </div>

        <div className='rigth-container'>
          <p>{height}</p>
          <p>{weight}</p> 
          
          <LevelBar val={attack}/>
          <LevelBar val={life}/>
          <LevelBar val={defense}/>
          <LevelBar val={speed}/>

          
        </div>
        
          
      </div>
      
    </div>
  )
}
