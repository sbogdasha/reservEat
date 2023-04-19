import React from 'react';
import './Restaurants.scss';
import Header from '../Header/Header';
import Search from '../Search/Search';
import { restaurants } from '../../mockData/restaurants';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';


export default function Restaurants() {

    const navigate = useNavigate();

    const [date_query, setQueryDate] = useState("");
    const [time_query, setQueryTime] = useState("");
    const [visitors_query, setQueryVisitors] = useState("");
    const [rest_query, setQueryRest] = useState("");
    
    let Restaurant = restaurants.filter(post => {
        if (date_query && time_query && visitors_query && rest_query === '') {
          return post;
        } else if (post.name.toLowerCase().includes(rest_query.toLowerCase())) {
          return post;
        }
      }).map(elem => (
        <div className={elem.id} id={elem.id}>
            <div className="restaurant" key={elem.id}> 
            <img src={window.location.origin + "/img/rest_img.png"}></img>
                <p  
                className={'restaurant ' + (elem.name)}
                >{elem.name}</p>
            </div>
            <div className='restaurant__details restaurant__details--hover'>
                <a onClick={(event) => handleClick(event, { id: elem.id})}>Details</a>
            </div>
        </div>
    ));
    
    const handleClick = (event, props) => {
        event.preventDefault();
        navigate('/details', { state: props });
    };
    

    return (
        <div className="restaurants" id="restaurants">
            <Header></Header>

            <div className="search">
                <div className='search__container'>
                    <div className='search__inputs search__inputs--dark'>
                        <div className="search__date">
                            <span className="search__param">Date</span>
                            <input className="input input__date" type="date" id="date" name="date" onChange={event => setQueryDate(event.target.value)}/>
                        </div>

                        <div className="search__line"></div>

                        <div className="search__time">
                            <span className="search__param">Time</span>
                            <input className="input input__time" type="time" id="time" name="time" onChange={event => setQueryTime(event.target.value)}/>
                        </div>

                        <div className="search__line"></div>

                        <div className="search__visit">
                            <span className="search__param">Visitors</span>
                            <input className="input input__visit-num" type="number" step="1" min="1" max="100" value="2" id="visit-num" name="visit-num" onChange={event => setQueryVisitors(event.target.value)}/>
                        </div>

                        <div className="search__line"></div>

                        <input className="input input__search-rest" placeholder='&#128269; Enter restaurant name' type="search" name="search-rest" id="search-rest" onChange={event => setQueryRest(event.target.value)}/>
                    </div>    
                    <button type="submit" className="search__btn btn search__btn--dark">Search</button>
                </div>
            </div>
            <div className='restaurants__container'>
            {Restaurant}
            </div>
        </div>
    );
}