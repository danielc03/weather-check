class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feelsLike');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    // Insert data into the HTML
    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
    }
}