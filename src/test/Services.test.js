import api from '../services/api'

describe("api", function () {
    test('fetchCities()', () => {
        fetch('http://testurl.com/testData').then(res => {
            expect(res.data).toEqual(api)
        })
    });
});