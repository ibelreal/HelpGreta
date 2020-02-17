import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import CityList from './CityList';
import MapCities from './MapCities';
import fetchCities from '../services/api';
import '../stylesheets/App.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollution: [],
      searchCity: '',
      isSorted: false,
      loading: true
    }
    this.renderMapCities = this.renderMapCities.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
    this.selectedCity = this.selectedCity.bind(this);
    this.handleSorted = this.handleSorted.bind(this);
  }

  componentDidMount() {
    fetchCities().then(loadData => {
      if (!loadData) {
        return this.setState({ loading: true });
      }
      else {
        return this.setState({ pollution: loadData, loading: false });
      }
    });
  }


  //Function to search for the city
  handleSearch(searchCity) {
    this.setState({ searchCity });
  }

  //Function to sort the list of the cities
  handleSorted() {
    (this.state.isSorted === false)
      ? this.setState({ isSorted: true })
      : this.setState({ isSorted: false })
  }

  //Function to filter the cities 
  filterBySearch() {
    return (
      this.state.pollution
        .filter(city => city.station.name.toLowerCase().includes(this.state.searchCity))

    );
  }

  //Function that returns the latitude and longitude of the city
  selectedCity(uidCity) {
    let infoCity = {}
    for (let i = 0; i < this.state.pollution.length; i++) {
      if (this.state.pollution[i].uid === uidCity) {
        infoCity.lat = this.state.pollution[i].lat;
        infoCity.lon = this.state.pollution[i].lon;
        return infoCity;
      }
    }
  }


  //Render of MapCities
  renderMapCities(props) {
    let uidCity = parseInt(props.match.params.uid);
    let infoCity = this.selectedCity(uidCity);
    if (infoCity !== undefined) {
      return (
        <div className="map">
          <MapCities latCity={infoCity.lat} lonCity={infoCity.lon} />
          <CityList filterBySearch={this.filterBySearch()} isSorted={this.state.isSorted} />
        </div >
      )
    }

  }

  render() {
    return (
      <main className="home">
        <Header />
        <Filters
          handleSearch={this.handleSearch}
          valueCity={this.state.searchCity}
          handleSorted={this.handleSorted}
        />
        <Switch>
          <Route exact path='/'>
            <CityList filterBySearch={this.filterBySearch()} isSorted={this.state.isSorted} />
          </Route>
          <Route path='/cities/:uid' render={this.renderMapCities} />
        </Switch>
      </main>
    );
  }
}

export default App;