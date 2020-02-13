import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import CityList from './CityList';
import MapCities from './MapCities';
import '../stylesheets/App.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pollution: [],
      loading: true
    }
    this.renderMapCities = this.renderMapCities.bind(this);
  }
  componentDidMount() {

  }

  //Render of MapCities
  renderMapCities() {
    return (
      <div>
        <MapCities />
      </div>
    )


  }

  render() {
    return (
      <div className="App">
        <Header />
        <Filters />
        <Switch>
          <Route exact path='/'>
            <CityList />
          </Route>
          <Route path='/1' render={this.renderMapCities} />
          {/* path='/cities/:id' */}
        </Switch>
        {/* fetch europa  https://api.waqi.info/map/bounds/?latlng=64.554282,-24.228128,38.935809,28.855621&token=85c0bae54393878039985ebe5ebae7977c0c8acc */}
      </div>
    );
  }
}

export default App;