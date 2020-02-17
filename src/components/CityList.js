import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../stylesheets/cityList.scss'

function CityList(props) {
    const { filterBySearch } = props
    if (!filterBySearch || filterBySearch.length === 0) {
        return (
            <div className='container not__found'>
                <p className='not__found'>Oh...We can't find the city... </p>
            </div>
        )
    }
    else {
        return (
            <section className="container" >
                <ul className="list">
                    {(props.isSorted === true)
                        ? props.filterBySearch.sort((a, b) => a.station.name.localeCompare(b.station.name)).map(city => (
                            <li key={city.uid} className="list__item">
                                <Link to={`/cities/${city.uid}`} replace>
                                    <p className="list__item--title">{city.station.name}</p>
                                </Link>
                            </li>
                        ))
                        : props.filterBySearch.map(city => (
                            <li key={city.uid} className="list__item">
                                <Link to={`/cities/${city.uid}`} replace>
                                    <p className="list__item--title">{city.station.name}</p>
                                </Link>
                            </li>
                        ))}
                </ul>
            </section >
        );
    }
}
CityList.propTypes = {
    filteredBySearch: PropTypes.arrayOf(PropTypes.object),
    isSorted: PropTypes.bool
}

export default CityList;