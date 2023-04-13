import React from 'react';
import './Reservation.scss';


export default function Reservation() {

    return (
        <div className='reservation'>
           <div className='reservation__form'>
                <div className='reservation__info'>

                </div>
                <div className='reservation__inputs'>
                        <div className="reservation__date">
                            <span className="reservation__param">Date</span>
                            <input className="input input__date" type="date" id="date" name="date"/>
                        </div>
                        <div className="reservation__time">
                            <span className="reservation__param">Time</span>
                            <input className="input input__time" type="time" id="time" name="time"/>
                        </div>
                        <div className="reservation__visit">
                            <span className="reservation__param">Visitors</span>
                            <input className="input input__visit-num" type="number" step="1" min="1" max="100" value="2" id="visit-num" name="visit-num"/>
                        </div>
                </div>
                <button type="submit" className="search__btn btn">Reserve</button>
           </div>
        </div>
    );
}


