import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CityList(props) {
    const { filterBySearch } = props
    if (!filterBySearch || filterBySearch.length === 0) {
        return (
            <div className=''>
                <p className=''>Oh...We can't find the city... </p>
            </div>
        )
    }
    else {
        return (
            <div>
                <ul className="list">
                    {(props.isSorted === true)
                        ? props.filterBySearch.sort((a, b) => a.station.name.localeCompare(b.station.name)).map(city => (
                            <li key={city.uid} className="list__item">
                                <Link to={`/cities/${city.uid}`} replace>
                                    <p>{city.station.name}</p>
                                </Link>
                            </li>
                        ))
                        : props.filterBySearch.map(city => (
                            <li key={city.uid} className="list__item">
                                <Link to={`/cities/${city.uid}`} replace>
                                    <p>{city.station.name}</p>
                                </Link>
                            </li>
                        ))}
                </ul>
            </div >
        );
    }
}
CityList.propTypes = {
    filteredBySearch: PropTypes.arrayOf(PropTypes.object),
    isSorted: PropTypes.bool
}

export default CityList;