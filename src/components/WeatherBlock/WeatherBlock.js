export default class {
    constructor(weatherData, currentTempuretureType, currentLang, currentLangData){
        this.weatherData = weatherData;
        this.currentTempuretureType = currentTempuretureType;
        this.currentLang = currentLang;
        this.currentLangData = currentLangData;
        
        this.temp = this.countTemp();
        this.icon = this.weatherData.current.condition ? this.weatherData.current.condition.icon : "";
        this.desc = this.weatherData.current.condition ? this.weatherData.current.condition.text : "";
        this.feelsLike = this.countFeelsLike();
        this.wind = this.countWindMperSec();
        this.humidity = this.weatherData.current.humidity ?  `${this.currentLangData.humidity}: ${this.weatherData.current.humidity}%` :  `${this.currentLangData.humidity}: -`;
        
    }

    countTemp(){
        return this.currentTempuretureType === "F" ? this.weatherData.current.temp_f + "°" : this.weatherData.current.temp_c + "°";
    }
    countFeelsLike(){
        return this.currentTempuretureType === "F" ? `${this.currentLangData.feelsLike}: ${this.weatherData.current.feelslike_f}°` :  
        `${this.currentLangData.feelsLike}: ${this.weatherData.current.feelslike_c}°`;
    }
    countWindMperSec() {
        return this.weatherData.current.wind_mph ? `${this.currentLangData.wind}: ${(this.weatherData.current.wind_mph / 3.6).toFixed(1)} ${this.currentLangData.speed}` 
        : `${this.currentLangData.wind}: -`;
    }

    createLayout(){
        const weatherDiv = document.createElement('div');
        const weatherTemp = document.createElement('div');
        const weatherCurrentInfo = document.createElement('div');
        const weatherIco = document.createElement('img');
        const weatherDesc = document.createElement('div');
        const weatherFeels = document.createElement('div');
        const weatherWind = document.createElement('div');
        const weatherHumidity = document.createElement('div');

        weatherDiv.className = "weather-block";
        weatherTemp.className = "weather-temp";
        weatherCurrentInfo.className = "weather-current-info";
        weatherDesc.className = "weather-desc";

        weatherTemp.innerHTML = this.temp;
        weatherIco.src = this.icon;
        weatherDesc.innerHTML = this.desc;
        weatherFeels.innerHTML = this.feelsLike;
        weatherWind.innerHTML = this.wind;
        weatherHumidity.innerHTML = this.humidity;
        

        weatherDiv.append(weatherTemp);
        weatherCurrentInfo.append(weatherIco, weatherDesc, weatherFeels, weatherWind, weatherHumidity);
       // weatherCurrentInfo.append(weatherDesc);
        weatherDiv.append(weatherCurrentInfo);
        return weatherDiv;
    }
}