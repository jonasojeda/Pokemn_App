import React from 'react'
import { Link } from 'react-router-dom'
import  './card.css'
export default function Card({id,name,img,types}) {
    return (
        <div>
        
        <div className="card">
            <div className="face front">
                <div className={types[0].name}>
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                </div>
            </div>
            
            <div className="face back">
                <h1>{name}</h1>
                    <div className='type-container'>
                    <h1 className='type'>Type</h1>
                    <ul>
                        {types.map(t =>{
                            return <li>{t.name}</li>
                        })}
                    </ul>
                </div>
            
                <div className="link">
                <Link to={'detail/' + id} >Details</Link> 
                <div/>
            
            </div>
        

            </div>
        </div>
            
        </div>
    )
}
