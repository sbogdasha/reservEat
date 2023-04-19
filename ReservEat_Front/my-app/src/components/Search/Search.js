import React from 'react';
import './Search.scss';
import { useNavigate } from 'react-router-dom' ;

export default function Search() {
    const navigate = useNavigate ( ) ; 

    return (
        <div className="search">
                <div className='search__container'>
                    <div className='search__inputs'>
                        <div className="search__date">
                            <span className="search__param">Date</span>
                            <input className="input input__date" type="date" id="date" name="date"/>
                        </div>

                        <div className="search__line"></div>

                        <div className="search__time">
                            <span className="search__param">Time</span>
                            <input className="input input__time" type="time" id="time" name="time"/>
                        </div>

                        <div className="search__line"></div>

                        <div className="search__visit">
                            <span className="search__param">Visitors</span>
                            <input className="input input__visit-num" type="number" step="1" min="1" max="100" value="2" id="visit-num" name="visit-num"/>
                        </div>

                        <div className="search__line"></div>

                        <input className="input input__search-rest" placeholder='&#128269; Enter restaurant name' type="search" name="search-rest" id="search-rest"/>
                    </div>    
                    <button type="submit" className="search__btn btn" onClick = { ( ) => navigate ( 'restaurants' ) }>Search</button>
                </div>
            </div>
    );
}


