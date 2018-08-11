class Storage {
    constructor() {
        this.city;
        this.defaultCity = 'Cambridge';
    }
    //Get existing location from LS
    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        return {
            city: this.city
        }
    }

    // Set local storage with new location
    setLocationData(city) {
        localStorage.setItem('city', city);
    }
};