export default class {
    constructor() {
        return this.getCurrentLocation()
        
      }
    
      getCurrentLocation() {
        this.currentToken = "803e8cff31df63";
        return fetch(`https://ipinfo.io/json?token=${this.currentToken}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.locationInfo = data;
            return this.locationInfo;
          })
      }
    
    
  
}