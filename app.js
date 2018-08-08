// Initialize weather object
const weather = new Weather('London');
const ui = new UI();


const getWeather = () => { 
    weather.getWeather()
    .then(results => {
        console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err));
}


// Get weather on load
document.addEventListener('DOMContentLoaded', getWeather);















// Farenheight to celsius converter
// function toCelsius(f) {
//     return (5/9) * (f-32);
// }
// document.getElementById("demo").innerHTML = toCelsius(77);