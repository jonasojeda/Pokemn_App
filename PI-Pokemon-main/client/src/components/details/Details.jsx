import React from 'react'
import imgTypes from '../../assets/helpers/TypesIcon';
import './detail.css'

export default function Details({ sprite, life, types, name, height, attack, defense, speed, weight }) {
  return (
    <div className='detail-container'>
      {name}
    </div>
  )
}
