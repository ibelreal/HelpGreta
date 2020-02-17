import React from 'react';
import cloud from '../images/dioxido-de-carbono.svg'
import '../stylesheets/header.scss'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>help greta</h1>
            <img className='header__img' src={cloud} alt="cloud" />
        </header>
    );
}

export default Header;