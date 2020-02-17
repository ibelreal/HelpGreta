/* eslint-disable no-undef */
import React, { useState } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../stylesheets/mapCities.scss'

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGViMDAiLCJhIjoiY2s2bHlrZ3d2MGlwcDNycnJsdjIxaTV3eCJ9.EvM78HQcXB5yJV64WiFyfA';


const MapCities = (props) => {
    const { latCity, lonCity } = props;

    //Map view
    const [viewport] = useState({
        width: 500,
        height: 600,
        latitude: 53.36,
        longitude: 12.06,
        zoom: 3
    });

    //To stop the map from moving
    function onViewportChange(viewport) {
        if (viewport.longitude > 0) {
            viewport.longitude = 0;
        }
    }

    return (
        <div className="container__map">
            <ReactMapGL mapboxApiAccessToken={MAPBOX_TOKEN}
                {...viewport}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={onViewportChange}
            >
                <Popup
                    latitude={latCity}
                    longitude={lonCity}
                    closeButton={false}
                    closeOnClick={false}
                    anchor="top" >
                    <div>You are here</div>
                </Popup>

            </ReactMapGL>
        </div>
    );
}

export default MapCities;