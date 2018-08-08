// Initialize weather object
const weather = new Weather('Cambridge');
const ui = new UI();
const description = document.getElementById('w-desc');

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
// const bgSet = () => {
//     const desc = description.textContent.toString();
//     // const check = /cloud/i;
//     if(/cloud/i.test(desc)){
//         document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/black-rain-abstract-dark-power_1127-2380.jpg?size=338&ext=jpg')"; 
//         console.log('yes')
//     }
// }
// setTimeout(bgSet,2000); 



// Farenheight to celsius converter
// function toCelsius(f) {
//     return (5/9) * (f-32);
// }
// document.getElementById("demo").innerHTML = toCelsius(77);