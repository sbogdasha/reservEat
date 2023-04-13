import React from 'react';
import './Header.scss';

export default function Header() {

    return (
        <header className='header_rest' id='header_rest'>
            <img src={window.location.origin + "/img/small_logo_reserv.png"} alt="ReservEat"></img>
            <button className="header_rest__btn btn profile-btn" id='profile-btn'>
                Name
            </button>
        </header>
    );
}