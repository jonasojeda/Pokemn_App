import React from 'react'

export default function Card({id,name,img}) {
    return (
        <div>
            {id}
            <h1>{name}</h1>
            <img src={img} alt="" />
        </div>
    )
}
