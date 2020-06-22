export default class {
    constructor(weatherData, currentTempuretureType){
        this.weatherData = weatherData;
        this.currentTempuretureType = currentTempuretureType;
        
        this.temp = this.countTemp();
        this.desc = this.weatherData.current.condition ? this.weatherData.current.condition.text : "";
    }

    countTemp(){
        return this.currentTempuretureType === "F" ? this.weatherData.current.temp_f + "°F" : this.weatherData.current.temp_c + "°C";
    }

    createLayout(){
        const weatherDiv = document.createElement('div');
        const weatherTemp = document.createElement('div');
        const weatherDesc = document.createElement('div');

        weatherDiv.className = "weather-block";
        weatherTemp.className = "weather-temp";
        weatherDesc.className = "weather-desc";

        weatherTemp.innerHTML = this.temp;
        weatherDesc.innerHTML = this.desc;

        weatherDiv.append(weatherTemp);
        weatherDiv.append(weatherDesc);
        return weatherDiv;
    }
}