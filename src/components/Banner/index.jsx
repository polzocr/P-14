import logo from '../../assets/images/wealth_health.jpg'
import React from 'react';


export default function Banner(){
    return (
        <section id='banner'>
            <div className='text-center bg-dark'>
                <img src={logo} alt="logo"/>
            </div>
        </section>
    )
}