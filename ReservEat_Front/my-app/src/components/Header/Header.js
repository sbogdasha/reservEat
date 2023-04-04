import React from 'react';
import './Header.scss';

export default function Header() {

    return (
        <header className='header_rest' id='header_rest'>
            <img src={window.location.origin + "/img/logo.png"} alt="ReservEat"></img>
            <button className="header_rest__btn btn profile-btn" id='profile-btn'>
                <img src={window.location.origin + "/img/Account_icon.png"} alt="Profile"></img>
                Name
            </button>
        </header>
    );
}