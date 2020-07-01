export default class {
    constructor(location, currentLang){
        this.location = location;
        this.currentLang = currentLang;
        
    }

    createLayout(){
        const locationDiv = document.createElement('div');
        locationDiv.className = "weather-location";
        locationDiv.innerHTML = `<h1>${this.location.name} ${this.location.country}</h1>`;
        return locationDiv;
    }

 
}