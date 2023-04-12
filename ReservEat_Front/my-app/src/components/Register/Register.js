import React from 'react';
import Header from '../Header/Header';
import './Register.scss';

export default function Register() {

    return (
        <div className='container'>
            <section className="registr" id="registr">
                <div className="registr__form">
                    <p className="registr__title">Create your own account</p>
                    <form className="login_form">
                        <p className="label">
                            <p className="label__title">Name:</p>
                            <input type="name" placeholder="Type your name..."/>
                        </p>
                        <p className="label">
                            <p className="label__title">Email:</p>
                            <input type="email" placeholder="Type your E-mail..."/>
                        </p>
                        <p className="label">
                            <p className="label__title">Password:</p>
                            <input type="password" placeholder="Type your password..."/>
                        </p>
                        <button className="login_form__btn btn" type="submit">Sign In</button>
                    </form>
                    <p className="registr__hint"> <span className='hint'> Already have an account? </span>
                        <a className="signin_link link" href="#"> Sign in</a>
                    </p>
                </div>
            </section>
            <img className="logInBg" src={window.location.origin + "/img/imgsignup.png"} alt="LogIn"/>
        </div>
    );
}