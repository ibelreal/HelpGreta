import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import CityList from './CityList';
import MapCities from './MapCities';
import '../stylesheets/App.scss'
import fetchCities from '../services/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollution: [],
      searchCity: '',
      loading: true
    }
    this.renderMapCities = this.renderMapCities.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
    this.selectedCity = this.selectedCity.bind(this);
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
        <div>
          <MapCities latCity={infoCity.lat} lonCity={infoCity.lon} />
          <CityList filterBySearch={this.filterBySearch()} />
        </div >
      )
    }

  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Filters handleSearch={this.handleSearch} valueCity={this.state.searchCity} />
        <Switch>
          <Route exact path='/'>
            <CityList filterBySearch={this.filterBySearch()} />
          </Route>
          <Route path='/cities/:uid' render={this.renderMapCities} />
        </Switch>
      </div>
    );
  }
}

export default App;