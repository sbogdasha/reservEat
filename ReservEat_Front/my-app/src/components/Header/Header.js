import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom' ;


export default function Header() {

    const navigate = useNavigate ( ) ; 

    return (
        <header className='header_rest' id='header_rest'>
            <img src={window.location.origin + "/img/small_logo_reserv.png"} alt="ReservEat" onClick = { ( ) => navigate ( '/restaurants' )}></img>
            <button className="header_rest__btn btn profile-btn" id='profile-btn'>
                Name
            </button>
        </header>
    );
}