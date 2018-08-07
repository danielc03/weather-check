// Initialize weather object
const weather = new Weather('London');


const getWeather = () => { 
    weather.getWeather()
    .then(results => console.log(results))
    .catch(err => console.log(err));
}


// Get weather on load
document.addEventListener('DOMContentLoaded', getWeather);