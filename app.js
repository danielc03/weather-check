// Initialize weather object
const weather = new Weather('Cambridge');
// Initialize UI
const ui = new UI();

const description = document.getElementById('w-desc');
const body = document.getElementsByTagName('BODY')[0];

// Get weather through API
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



// BG Depending on weather conditions
const bgSet = () => {
    const desc = description.textContent.toString();
    // Changing body class depending on weather
    const check = () => {
    if(/clouds/i.test(desc)){
        body.className = "clouds"; 
    } else if(/rain/i.test(desc)){
        body.className = "rain"; 
    } else if(/snow/i.test(desc) || /sleet/i.test(desc)){
        body.className = "snow"; 
    } else if(/drizzle/i.test(desc)){
        body.className = "drizzle"; 
    } else if(/thunderstorm/i.test(desc)){
        body.className = "thunderstorm"; 
    } else if(/clear/i.test(desc)){
        body.className = "clear"; 
    } else {
        body.className = "fog";
    }
}
check();    
};
setTimeout(bgSet, 1000); 



// Change location event
document.getElementById('w-change-button').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    weather.changeLocation(city);

    // Get and display weather on location
    getWeather();
    setTimeout(bgSet, 1000);
    // Close modal
    $('#locModal').modal('hide');
})

