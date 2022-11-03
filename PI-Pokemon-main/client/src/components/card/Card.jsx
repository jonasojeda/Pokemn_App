import React from 'react'
import  './card.css'
export default function Card({id,name,img,types}) {
    return (
        <div>
        
        <div class="card">
            <div class="face front">
                <div className={types[0].name}>
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                </div>
            </div>
            
            <div class="face back">
            <h3>{name}</h3>
            <div class="link">
            <a href="#">Details</a>
            
        </div>
        

            </div>
        </div>
            
        </div>
    )
}
