import './app.scss';
require.context("Src/images/", true, /\.(png|svg|jpg|gif)$/);

import LanguageData from './language-data.json';

import Location from 'Components/Location';
import Panel from 'Components/Panel';
import Weather from 'Components/Weather';
import MapInfo from 'Components/MapInfo';

class App {
  constructor() {
    this.currentLang = "en";
    this.currentTempuretureType = "F";
    this.currentLangData = LanguageData[this.currentLang];
    const location = new Location()
      .then((locationInfo) => {
        this.locationInfo = locationInfo;
        this.currentCity = this.locationInfo.city;
        console.log(this.locationInfo);
        this.createLayout();
      }

      )

    this.onsearchEvent = (currentCity) => {
      console.log(`onSearch ${currentCity}`);

      this.weather.requestWeather(currentCity, this.currentLang, this.currentLangData, this.currentTempuretureType)
        .then((data) => {
          if (data) {
            this.currentCity = currentCity;
            this.clearLayout();
            this.createLayout();
          }

        })
    };

    this.onChangeLanguage = (selectedLanguage) => {
      this.currentLang = selectedLanguage;
      this.currentLangData = LanguageData[this.currentLang];
      this.clearLayout();
      this.createLayout();
    };

    this.onChangeTempureture = (selectedTempuretureType) => {
      this.currentTempuretureType = selectedTempuretureType;
      this.clearLayout();
      this.createLayout();
    }
  }

  clearLayout() {
    document.getElementsByTagName("body")[0].innerHTML = '';
  }

  createLayout() {
    this.panel = new Panel({
      currentLang: this.currentLang,
      currentTempuretureType: this.currentTempuretureType,
      onsearchEvent: this.onsearchEvent,
      onChangeLanguage: this.onChangeLanguage,
      onChangeTempureture: this.onChangeTempureture,
      buttonsLang: this.currentLangData
    });

    this.weather = new Weather();



    const promises = [];
    promises.push(this.weather.requestWeather(this.currentCity, this.currentLang, this.currentLangData, this.currentTempuretureType));
    Promise.all(promises).then((data) => {
      this.locationMap = new MapInfo(this.currentCity, this.currentLangData, this.weather.weatherData.location.lat, this.weather.weatherData.location.lon);
      const body = document.querySelector('body');
      const container = document.createElement('div');
      const main = document.createElement('div');
      main.className = "main";
      body.classList.add('page');
      container.classList.add('page__container');
      body.append(container);


      this.panel.insert(container);
      this.weather.insert(main);
      this.locationMap.insert(main);

      container.append(main);
    });
  }


}

const app = new App();