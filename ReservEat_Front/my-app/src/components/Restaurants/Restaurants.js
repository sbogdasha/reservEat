import React from 'react';
import './Restaurants.scss';
import Header from '../Header/Header';
import Search from '../Search/Search';
import { restaurants } from '../../mockData/restaurants';


export default function Restaurants() {
    const Restaurant = (list) => (list.map(elem => (
        <div className={elem.id} id={elem.id}>
            <div className="restaurant" key={elem.id}> 
                <p  
                className={'restaurant ' + (elem.name)}
                >{elem.name}</p>
            </div>
            <div className='restaurant--hover'>
                Details
            </div>
        </div>
      )));
    return (
        <div className="restaurants" id="restaurants">
            <Header></Header>
            <Search></Search>

            {Restaurant(restaurants)}
            
        </div>
    );
}