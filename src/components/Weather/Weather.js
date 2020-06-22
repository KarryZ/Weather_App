import WeatherLocation from 'Components/WeatherLocation';
import WeatherDate from 'Components/WeatherDate';
import WeatherBlock from 'Components/WeatherBlock';
import WeatherFuture from 'Components/WeatherFuture';

export default class {
    constructor () {
      this.weatherData = {};
          
    }


    createLayout(){
        this.weatherPanel = document.createElement('div');
        this.weatherPanel.className = "weather";
        const location = new WeatherLocation( this.weatherData.location, this.currentLang)
        const locationText = location.createLayout();
        this.weatherPanel.append(locationText);

        const date = new WeatherDate();
        const dateText = date.createLayout();
        this.weatherPanel.append(dateText);

        const weatherBlock = new WeatherBlock(this.weatherData, this.currentTempuretureType);
        const weatherBlockText = weatherBlock.createLayout();
        this.weatherPanel.append(weatherBlockText);

        const weatherFuture = new WeatherFuture(this.weatherData.forecast);
        const weatherFutureText = weatherFuture.createLayout();
        this.weatherPanel.append(weatherFutureText);
     }

    insert(parent) {
        parent.append(this.weatherPanel);
    }

    requestWeather(currentCity, currentLang, currentTempuretureType) {
      this.currentLang = currentLang;
      this.currentTempuretureType = currentTempuretureType;
      let apiKey = "2003c596cad643f8969163048200106";
  
      return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currentCity}&days=3&lang=${currentLang}`)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          return data;
        })
        .then( (data) => {
          this.weatherData = data;
          console.log(this.weatherData);
          this.createLayout();
          return this.weatherData;
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        })
  
    }
}