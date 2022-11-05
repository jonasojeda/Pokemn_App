import React from 'react'
import img from '../../assets/gifLoad/gif'
import './notFound.css'
export default function NotFound() {
  return (
    <div className='container-notFound'>
        <img className='notFound-gif' src="https://i.pinimg.com/originals/b2/21/1b/b2211b045ee1f34dacfeb83b7f540ae6.gif" alt="" />
        <div className='mesage-container'>
          <h1>Oh no!</h1>
          <p>Can't find what you're looking for</p>
        </div>
        
    </div>
  )
}
