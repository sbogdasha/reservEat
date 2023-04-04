import React from 'react';
import './Home.scss';
import Search from '../Search/Search';

export default function Home() {

    return (
        <section className="home" id="home">
            <header className="header">
                <a className="header__logo" href="#main">
                    <img src={window.location.origin + "/img/logo.png"} alt="ReservEat"/>
                </a>
                <nav className="navigation">
                    <a className="navigation__item" href="#home">Home</a>
                    <a className="navigation__item" href="#about">About</a>
                    <a className="navigation__item" href="#contact">Contact</a>
                </nav>
                <button className="header__btn btn sign-btn">Sign In</button>
            </header>

            <Search></Search>
        </section>
    );
}

