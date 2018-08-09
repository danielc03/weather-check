// Initialize weather object
const weather = new Weather('Cambridge');
const ui = new UI();
const description = document.getElementById('w-desc');
const body = document.getElementsByTagName('BODY')[0];

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
    // const check = /cloud/i;
    if(/clouds/i.test(desc)){
        body.classList.add("clouds"); 
    } else if(/rain/i.test(desc)){
        body.classList.add("rain"); 
    } else if(/snow/i.test(desc) || /sleet/i.test(desc)){
        body.classList.add("snow"); 
    } else if(/drizzle/i.test(desc)){
        body.classList.add("drizzle"); 
    } else if(/thunderstorm/i.test(desc)){
        body.classList.add("thunderstorm"); 
    } else if(/clear/i.test(desc)){
        body.classList.add("clear"); 
    } else {
        body.classList.add("fog")
    }
};
setTimeout(bgSet,2000); 



