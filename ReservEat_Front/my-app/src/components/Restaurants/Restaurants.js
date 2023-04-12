import React from 'react';
import './Restaurants.scss';
import Header from '../Header/Header';
import Search from '../Search/Search';
import { restaurants } from '../../mockData/restaurants';


export default function Restaurants() {
    
    const Restaurant = (list) => (list.map(elem => (
        
        <div className={elem.id} id={elem.id}>
            <div className="restaurant" key={elem.id}> 
            <img src={window.location.origin + "/img/rest_img.png"}></img>
                <p  
                className={'restaurant ' + (elem.name)}
                >{elem.name}</p>
            </div>
            <div className='restaurant--hover'>
                <a onClick={getDetails(elem.id)}>Details</a>
            </div>
        </div>
    )));
    
    function getDetails(id) {
        
    }

    return (
        <div className="restaurants" id="restaurants">
            <Header></Header>

            <div className="search">
                <div className='search__container'>
                    <div className='search__inputs search__inputs--dark'>
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
                    <button type="submit" className="search__btn btn search__btn--dark">Search</button>
                </div>
            </div>
            <div className='restaurants__container'>
            {Restaurant(restaurants)}
            </div>
        </div>
    );
}