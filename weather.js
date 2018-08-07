class Weather {
    constructor(city) {
        this.apiKey = '4e901da5be1d30381361c9b249a270bd';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);
        const responseData = await response.json();

        return responseData.main;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}

// Farenheight to celsius
// function toCelsius(f) {
//     return (5/9) * (f-32);
// }
// document.getElementById("demo").innerHTML = toCelsius(77);
