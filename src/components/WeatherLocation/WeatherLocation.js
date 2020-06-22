export default class {
    constructor(location, currentLang){
        this.location = location;
        this.currentLang = currentLang;
        
    }

    createLayout(){
        const locationDiv = document.createElement('div');
        locationDiv.className = "weather-location";
        locationDiv.innerHTML = `${this.location.name} ${this.location.country}`;
        return locationDiv;
    }

 
}