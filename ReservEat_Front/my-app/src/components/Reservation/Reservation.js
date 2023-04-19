import React from 'react';
import './Reservation.scss';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'


export default function Reservation() {

    return (
        <div className='reservation'>
            <div className='reservation__container'>
                <div className='reservation__form'>
                    <div className='reservation__info info'>
                        <p className='info__restaurant'>Restaurant name</p>
                        <p className='info__address'><FontAwesomeIcon icon={faMapMarker} /> Address</p>
                    </div>
                    <div className='reservation__inputs'>
                            <div className="reservation__date">
                                <span className="reservation__param">Date</span>
                                <input className="reservation__input-date" type="date" id="date" name="date"/>
                            </div>
                            <div className="reservation__time">
                                <span className="reservation__param">Time</span>
                                <input className="reservation__input-time" type="time" id="time" name="time"/>
                            </div>
                            <div className="reservation__visit">
                                <span className="reservation__param">Visitors</span>
                                <input className="reservation__visit-num" type="number" step="1" min="1" max="100" value="2" id="visit-num" name="visit-num"/>
                            </div>
                    </div>
                </div>                   
                <button type="submit" className="reservation__search-btn">Reserve</button>
           </div>
        </div>
    );
}


