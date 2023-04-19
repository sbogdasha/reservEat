import React from 'react';
import { useNavigate } from 'react-router-dom' ;
import './Home.scss';
import Search from '../Search/Search';

export default function Home() {
    const navigate = useNavigate ( ) ; 
    return (
        <section className="home" id="home">
            <header className="header">
                <a className="header__logo" href="#main">
                    <img src={window.location.origin + "/img/logo.png"} alt="ReservEat"/>
                </a>
                <nav className="navigation">
                    <a className="navigation__item" href="#home"></a>
                    <a className="navigation__item" href="#about"></a>
                    <a className="navigation__item" href="#contact"></a>
                </nav>
                <button className="header__btn btn sign-btn" onClick = { ( ) => navigate ( 'register' ) }>Sign In</button>
            </header>

            <Search></Search>
        </section>
    );
}

