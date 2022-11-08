import React from 'react'
import imgTypes from '../../assets/helpers/TypesIcon';
import Card from '../card/Card';
import './detail.css'

export default function Details({ sprite, life, types, name, height, attack, defense, speed, weight, id }) {
  return (
    <div className='detail-container'>
      
      <Card
			id={id}
			name={name}
			img={sprite}
			types={types}/>
      
    </div>
  )
}
