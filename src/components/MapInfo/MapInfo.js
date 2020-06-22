export default class {
    constructor(city, buttonsLang, sLatitudeInfo, sLongitudeInfo){
        this.city = city;
        this.buttonsLang =  buttonsLang;
        this.sLatitudeInfo = sLatitudeInfo;
        this.sLongitudeInfo = sLongitudeInfo;
        
        this.createMap();
        this.createLayout();
    }

    createMap() {
        //const token = 'pk.eyJ1Ijoia2FycnlqaSIsImEiOiJja2I5OGJidzcwYml4MnVwa3oxeXAxMjdxIn0.AeHac7cXn7dVwn_Jj0yqVw';
        this.mapFrame = document.createElement("iframe");
        this.mapFrame.src = `https://maps.google.com/maps?q=${this.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        this.mapFrame.width ="100%";
        this.mapFrame.height ="200";
        this.mapFrame.frameborder ="0";
    }

    createLayout(){
        this.locationDiv = document.createElement('div');
        this.locationDiv.className = "location";

        this.map = document.createElement('div');
        this.map.className = "map";
        this.map.append(this.mapFrame);

        this.coordinatesLatitude = document.createElement('div');
        this.coordinatesLatitude.className = "coordinates";
        this.coordinatesLatitude.innerHTML = `${this.buttonsLang["latitude"]}: ${this.sLatitudeInfo}`;

        this.coordinatesLongitude = document.createElement('div');
        this.coordinatesLongitude.className = "coordinates";
        this.coordinatesLongitude.innerHTML = `${this.buttonsLang["longitude"]}: ${this.sLongitudeInfo}`;

        this.locationDiv.append(this.map);
        this.locationDiv.append(this.coordinatesLatitude);
        this.locationDiv.append(this.coordinatesLongitude);
        

        return this.locationDiv;
    }
    insert(parent) {
        parent.append(this.locationDiv);
    }
}