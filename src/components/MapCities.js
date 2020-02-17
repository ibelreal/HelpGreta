/* eslint-disable no-undef */
import React, { useState } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGViMDAiLCJhIjoiY2s2bHlrZ3d2MGlwcDNycnJsdjIxaTV3eCJ9.EvM78HQcXB5yJV64WiFyfA';


const MapCities = (props) => {
    const { latCity, lonCity } = props;

    const [viewport] = useState({
        width: 700,
        height: 700,
        latitude: 53.36,
        longitude: 9.06,
        zoom: 3
    });


    function onViewportChange(viewport) {
        if (viewport.longitude > 0) {
            viewport.longitude = 0;
        }
    }



    return (
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
    );
}

export default MapCities;