import React from 'react'
import {Link} from 'react-router-dom';
export default function Button({name, link, className}) {
  return (
    <div>
        <Link to={link} >
        <button className={className}>{name}</button>
        </Link>
    </div>
  )
}
