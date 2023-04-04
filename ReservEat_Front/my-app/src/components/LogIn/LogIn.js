import React from 'react';
import './LogIn.scss';

export default function LogIn() {

    return (
        <div className='container'>
            <section className="registr" id="registr">
                <div className="registr__form">
                    <p className="registr__title">Log in to your account</p>
                    <form className="login_form">
                        <p className="label">
                            <p className="label__title">Email:</p>
                            <input type="email" placeholder="Type your E-mail..."/>
                        </p>
                        <p className="label">
                            <p className="label__title">Password:</p>
                            <input type="password" placeholder="Type your password..."/>
                        </p>
                        <a className="pass_link link" href="#">Forgot your password?</a>
                        <button className="login_form__btn btn" type="submit">Sign In</button>
                    </form>
                    <p className="registr__hint"> <span className='hint'> Don't have an account yet? </span>
                        <a className="signup_link link" href="#"> Sign up</a>
                    </p>
                </div>
            </section>
            <img className="logInBg" src={window.location.origin + "/img/imglogin.png"} alt="LogIn"/>
        </div>
    );
} 