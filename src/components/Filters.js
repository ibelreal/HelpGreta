import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
    const handleSubmit = ev => {
        ev.preventDefault();
    };
    const handleSearch = ev => {
        const searchCity = ev.target.value.trim().toLowerCase();
        props.handleSearch(searchCity);
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="searchCity" className="form__label">Search for a city: </label>
            <input
                className="form__searchBar"
                type="text"
                name="searchCity"
                id="searchCity"
                placeholder="Madrid"
                value={props.valueCity}
                onChange={handleSearch}
            />
        </form>
    );
}
Filters.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

export default Filters;