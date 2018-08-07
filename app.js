// Initialize weather object
const weather = new Weather('London');

weather.getWeather()
    .then(results => console.log(results))
    .catch(err => console.log(err))