const ENDPOINT = 'https://api.waqi.info/map/bounds/?latlng=64.554282,-24.228128,38.935809,28.855621&token=85c0bae54393878039985ebe5ebae7977c0c8acc';

//Number of cities in the map
let nCities = 20;

const fetchCities = () => fetch(ENDPOINT)
    .then(response => response.json())
    .then(responseData => responseData.data)
    .then(response => {
        let data = [];
        for (let i = 0; i < nCities; i++) {
            data.push(response[i]);
        }
        return data;
    })
    .catch(e => alert(`Se ha detectado un error: ${e}`))

export default fetchCities;