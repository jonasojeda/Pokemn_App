import React from 'react'
import Button from '../../components/button/Button.jsx'
import s from './LandingPage.module.css'

export default function LandingPage() {
    return (
        <div className={s.background}>
            <div className='container'>
                <Button name="Home" link="/home"/>
            </div>
            
        </div>
    )
}
