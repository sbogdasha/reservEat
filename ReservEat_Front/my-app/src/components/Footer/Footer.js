import React from 'react';
import './Footer.scss';
import { useNavigate } from 'react-router-dom' ;
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function Header() {

    const navigate = useNavigate ( ) ; 

    return (
        <footer className='footer' id='footer'>
           <div className='footer__reserve-rights'>
                ©2023 ReservEat by Rapid Team
           </div>
           <div className='footer__socials socials'>
                <a className='socials__link' href="#"> <FaInstagram /> </a>
                <a className='socials__link' href="#"> <FaTwitter /> </a>
                <a className='socials__link' href="#"> <FaFacebook /> </a>
           </div>
        </footer>
    );
}