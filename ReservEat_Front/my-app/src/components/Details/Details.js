import React from 'react';
import './Details.scss';
import Header from '../Header/Header';
import Search from '../Search/Search';
import { restaurants } from '../../mockData/restaurants';


export default function Details(props) {
    return (
        <section className="details">
            <Header></Header>

            <div className='rest'>
                <div className='rest__data'></div>
                <div className='rest__text'>
                    <div className='txt_info'>
                        <p className='txt_info__name'>{props.name}</p>
                        <p className='txt_info__descr'>{props.description}</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}