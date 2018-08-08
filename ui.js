class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        // this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.minTemp = document.getElementById('w-min-temp');
        this.maxTemp = document.getElementById('w-max-temp');
        this.wind = document.getElementById('w-wind');
    }

    // Insert data into the HTML
    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp.toFixed(1)} °C`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.minTemp.textContent = `Minimum Temperature: ${weather.main.temp_min.toFixed()} °C`;
        this.maxTemp.textContent = `Maximum Temperature: ${weather.main.temp_max.toFixed(0)} °C`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} meters/s`;
    }

}