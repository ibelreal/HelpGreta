import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {

    const handleSubmit = ev => {
        ev.preventDefault();
    };

    const handleSearch = ev => {
        const searchCity = ev.target.value.toLowerCase();
        props.handleSearch(searchCity);
    };

    const handleSorted = () => {
        props.handleSorted();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="searchCity" className="form__label">Search for a city: </label>
            <input
                className="form__input searchBar"
                type="text"
                name="searchCity"
                id="searchCity"
                placeholder="Madrid"
                value={props.valueCity}
                onChange={handleSearch}
            />
            <label htmlFor="isSorted" className='form__label'>Sort List: </label>
            <input
                className='form__input checkbox'
                name="isSorted"
                type="checkbox"
                checked={props.isSorted}
                onChange={handleSorted} />
        </form>
    );
}
Filters.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleSorted: PropTypes.func.isRequired
};

export default Filters;