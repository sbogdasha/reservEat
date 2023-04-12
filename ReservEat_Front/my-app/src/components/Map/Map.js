import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.scss'
import { map_address } from '../../mockData/map_adderess';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'



export default function Map(props) {
    let lat = 0;
    let long = 0;
    let address = 0;

    map_address.filter(function(elem){
        if(props.id == elem.restaurant_id) {
            lat = elem.latitude;
            long = elem.longitude;
            address = elem.address;
            console.log(lat, long, address);
        }
    });

    const defaultProps = {
        center: {
          lat: lat,
          lng: long
        },
        zoom: 13
    };

    const LocationPin = ({ text }) => (
        <div className="pin">
          <Icon icon={locationIcon} className="pin-icon" />
          <p className="pin-text">{text}</p>
        </div>
    )

    return (
        <div className="map">
            <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBt20vvUDL_zgFi0W4dIpiVprZ3rifU8lU' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <LocationPin
                lat={lat}
                lng={long}
                text={address}
                />
            </GoogleMapReact>
            </div>
        </div>
    );
}