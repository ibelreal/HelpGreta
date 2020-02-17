/* eslint-disable no-undef */
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGViMDAiLCJhIjoiY2s2bHlrZ3d2MGlwcDNycnJsdjIxaTV3eCJ9.EvM78HQcXB5yJV64WiFyfA';

const MapCities = (props) => {
    const { latCity, lonCity } = props;
    console.log("Hey!" + latCity + lonCity);
    function onHoverCity(ev) {
        const {
            features,
            srcEvent: { offsetX, offsetY }
        } = ev;
    }
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
        viewport = ({
            width: 700,
            height: 700,
            latitude: 53.36,
            longitude: 9.06,
            zoom: 4
        });
    }


    return (
        <ReactMapGL mapboxApiAccessToken={MAPBOX_TOKEN}
            {...viewport}
            mapStyle="mapbox://styles/mapbox/light-v9"
            onViewportChange={onViewportChange}
            onHover={onHoverCity}
        />
    );
}

export default MapCities;