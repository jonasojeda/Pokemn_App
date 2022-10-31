import React from 'react'
import Button from '../button/Button.jsx'
import s from './NavBar.module.css'

export default function NavBar() {
    return (
        <header>
            <h1>NavBar</h1>
            <div className={s.searChontainer}>
            <label>Search</label>
            <input type="text" placeholder='Search' />
            </div>
            
        </header>
    
    )
}
