import React from 'react';
import './Details.scss';
import Header from '../Header/Header';
import Map from '../Map/Map';
import { restaurants } from '../../mockData/restaurants';
import { map_address } from '../../mockData/map_adderess';
import { Icon } from '@iconify/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Details(props) {

    const navigate = useNavigate();

    const location = useLocation();
    const id = location.state?.id;

    let name = 0;
    let description = 0;
    let address = 0;
    let hours_start = 0;
    let hours_end = 0;
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };

    restaurants.filter(function(elem){
        if(id == elem.id) {
            name = elem.name;
            description = elem.description;
        }
    });

    map_address.filter(function(elem){
        if(id == elem.restaurant_id) {
            address = elem.address;
            hours_start = elem.hours[1].opens;
            hours_end = elem.hours[1].closes;
            console.log("hours: " + elem.hours[1].opens);
        }
    });

    const handleClick = (event, props) => {
        event.preventDefault();
        navigate('/reservation', { state: props });
    };

    return (
        <section className="details">
            <Header></Header>
            <div className='details__container'>
                <div className='details__container--left'>
                    <div className='rest__data'>
                        <img src={window.location.origin + "/img/details.png"}></img>
                        <div className='map map__container'>
                            <Map id={id}></Map>
                        </div>
                    </div>
                </div>
                <div className='details__container--right'>
                    <div className='rest'>
                        
                        <div className='rest__text'>
                            <div className='txt_info'>
                                <p className='txt_info__name'>{name}</p>
                                <p className='txt_info__name'><Icon icon="mdi:address-marker-outline" /> {address}</p>
                                <p className='txt_info__time'><Icon icon="ic:baseline-access-time" /> {hours_start} - {hours_end}</p>
                                <p className='txt_info__descr'>{description}</p>
                            </div>
                        </div>
                        <button className="rest__btn btn" onClick={(event) => handleClick(event, { id: id})}>Reserve</button>
                    </div>
                    <Slider {...settings}>
                        <div className='slider--left'>
                            <img src={window.location.origin + "/img/slide1.png"}></img>
                            <img src={window.location.origin + "/img/slide2.png"}></img>
                        </div>
                        <div>
                            <img src={window.location.origin + "/img/slide3.png"}></img>
                        </div>
                        <div className='slider--left'>
                            <img src={window.location.origin + "/img/slide1.png"}></img>
                            <img src={window.location.origin + "/img/slide2.png"}></img>
                        </div>
                        <div>
                            <img src={window.location.origin + "/img/slide3.png"}></img>
                        </div>
                        <div className='slider--left'>
                            <img src={window.location.origin + "/img/slide1.png"}></img>
                            <img src={window.location.origin + "/img/slide2.png"}></img>
                        </div>
                        <div>
                            <img src={window.location.origin + "/img/slide3.png"}></img>
                        </div>
                    </Slider>
                </div>
                
            </div>
        </section>
    );
}