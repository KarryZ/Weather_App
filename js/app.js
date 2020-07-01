/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"en-lang-btn\":\"eng\",\"ru-lang-btn\":\"rus\",\"search-placeholder\":\"search city\",\"search-btn\":\"search\",\"latitude\":\"Latitude\",\"longitude\":\"Longitude\",\"feelsLike\":\"feels like\",\"wind\":\"wind\",\"speed\":\"m/s\",\"humidity\":\"humidity\",\"weekDays\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"]},\"ru\":{\"en-lang-btn\":\"анг\",\"ru-lang-btn\":\"рус\",\"search-placeholder\":\"поиск города\",\"search-btn\":\"поиск\",\"latitude\":\"Широта\",\"longitude\":\"Долгота\",\"feelsLike\":\"ощущается как\",\"wind\":\"ветер\",\"speed\":\"м/с\",\"humidity\":\"влажность\",\"weekDays\":[\"Понедельник\",\"Вторник\",\"Среда\",\"Четверг\",\"Пятница\",\"Суббота\",\"Воскресенье\"]}}");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow-down.svg": 3,
	"./bg.jpg": 4,
	"./favico.png": 5,
	"./microphone.svg": 6,
	"./spinner.svg": 7,
	"./update-button.svg": 8
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/arrow-down.svg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bg.jpg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/favico.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/microphone.svg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/spinner.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/update-button.svg";

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/app.scss
var app = __webpack_require__(2);

// EXTERNAL MODULE: ./src/language-data.json
var language_data = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/Location/Location.js
/* harmony default export */ var Location = (class {
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
    
    
  
});
// CONCATENATED MODULE: ./src/components/Panel/Panel.js
__webpack_require__(1);

/* harmony default export */ var Panel = (class {
    constructor (propsObj) {
        this.currentLang = propsObj.currentLang;
        this.currentTempuretureType = propsObj.currentTempuretureType;
        this.onsearchEvent = propsObj.onsearchEvent;
        this.onChangeLanguage = propsObj.onChangeLanguage;
        this.onChangeTempureture = propsObj.onChangeTempureture;
        this.buttonsLang = propsObj.buttonsLang;
        this.createLayout();

    }

    createLayout(){
        this.controlPanel = document.createElement('div');
        this.controlBtns = document.createElement('div');
        this.refreshBtn = document.createElement('div');
        this.refrechImg = document.createElement("img");
        this.groupBtnLang = document.createElement('div'); 
        this.EngBtn = document.createElement('div'); 
        this.RuBtn = document.createElement('div'); 
        this.groupBtnTemperature  = document.createElement('div'); 
        this.FarengeitBtn  = document.createElement('div'); 
        this.CelsiusBtn  = document.createElement('div'); 
        this.searchBox = document.createElement('div');
        this.searchInput = document.createElement('input');
        this.searchBtn = document.createElement('div');

        this.controlPanel.className = "control";
        this.controlBtns.className = "buttons";
        this.refreshBtn.className  = "btn btn-bg";
        this.refrechImg.src = "./images/spinner.svg";
        this.groupBtnLang.className = "group-button lg";
        this.EngBtn.className = "btn btn-lang";
       
        this.EngBtn.innerHTML = this.buttonsLang['en-lang-btn'];
        this.EngBtn.dataset.lang = "en";
        this.RuBtn.className ="btn inactive btn-lang";
        
        this.RuBtn.innerHTML = this.buttonsLang['ru-lang-btn'];
        this.RuBtn.dataset.lang = "ru";
        this.addChangeLangEvent([this.EngBtn, this.RuBtn]);

        this.groupBtnTemperature.className = "group-button dg";
        this.FarengeitBtn.className =  "btn";
        this.FarengeitBtn.innerHTML = "°F";
        this.FarengeitBtn.dataset.tempType = "F";
        this.CelsiusBtn.className = "btn inactive";
        this.CelsiusBtn.innerHTML = "°C";
        this.CelsiusBtn.dataset.tempType = "C";
        this.addChangeTempuretureEvent([ this.FarengeitBtn, this.CelsiusBtn]);

        this.refrechImg.alt = "spinner";
        this.searchInput.className = "search-input";
        this.searchInput.type = "text";
        this.searchInput.placeholder = this.buttonsLang["search-placeholder"];
        this.searchBox.className = "search";
        this.searchBtn.className = "btn btn-search";
        this.searchBtn.innerHTML = this.buttonsLang["search-btn"];
        this.addSearchEvent();
        

        this.refreshBtn.append(this.refrechImg);
        this.controlBtns.append(this.refreshBtn);

        this.groupBtnLang.append(this.EngBtn);
        this.groupBtnLang.append(this.RuBtn);

        this.groupBtnTemperature.append(this.FarengeitBtn);
        this.groupBtnTemperature.append(this.CelsiusBtn);

        this.controlBtns.append(this.groupBtnLang);
        this.controlBtns.append(this.groupBtnTemperature);

        this.searchBox.append(this.searchInput);
        this.searchBox.append(this.searchBtn);

        this.controlPanel.append(this.controlBtns);
        this.controlPanel.append( this.searchBox);
    }

    insert(parent) {
        parent.append(this.controlPanel);
     }

     addSearchEvent() {
        this.searchBtn.addEventListener("click", (e) => {
          e.preventDefault();
          const nodeInput = this.searchInput;
          this.currentCity = nodeInput.value;
          
          this.onsearchEvent(this.currentCity);
          nodeInput.value = "";
                  
      })
    }

    addChangeLangEvent(aLangBtns) {
        aLangBtns.forEach(langBtn => {
            langBtn.addEventListener("click", (e) => {
                e.preventDefault();
                
                this.currentLang = e.currentTarget.dataset.lang;
                this.onChangeLanguage(this.currentLang);
                
                        
            })
        });
    }

    addChangeTempuretureEvent(aTempBtns) {
        aTempBtns.forEach(tempBtn => {
            tempBtn.addEventListener("click", (e) => {
                e.preventDefault();
                
                this.currenttempType = e.currentTarget.dataset.tempType;
                e.currentTarget.classList.toggle("remove");

                this.onChangeTempureture(this.currenttempType);
                
                        
            })
        });
    }

});

// CONCATENATED MODULE: ./src/components/WeatherLocation/WeatherLocation.js
/* harmony default export */ var WeatherLocation = (class {
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

 
});
// CONCATENATED MODULE: ./src/components/WeatherDate/WeatherDate.js
/* harmony default export */ var WeatherDate = (class {
    constructor(){
        this.newDate = "6/8/2020";
    }

    createLayout(){
        const dateDiv = document.createElement('div');
        dateDiv.className = "weater-date";
        dateDiv.innerHTML =  `<h2>${this.newDate}</h2>`;
        return dateDiv;
    }
});
// CONCATENATED MODULE: ./src/components/WeatherBlock/WeatherBlock.js
/* harmony default export */ var WeatherBlock = (class {
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
});
// CONCATENATED MODULE: ./src/components/WeatherFuture/WeatherFuture.js
/* harmony default export */ var WeatherFuture = (class {
    constructor(forecast, currentTempuretureType, currentLang, currentLangData){
        this.forecast = forecast;
        this.currentTempuretureType = currentTempuretureType;
        this.currentLang = currentLang;
        this.currentLangData = currentLangData;
    }

    createLayout(){
        const dateContainer = document.createElement('div');
        dateContainer.className = "weather-future";
        this.forecast.forecastday.forEach(element => {
            const futureDiv = document.createElement('div');
            futureDiv.className = "future";

            const dayDiv = document.createElement('div');
            dayDiv.className = "day";
            dayDiv.innerHTML = this.receiveCurrentDate(element.date);

            const infoDiv = document.createElement('div');
            infoDiv.className = "future-info";

            const dayTemp =  document.createElement('div');
            dayTemp.className ="day-temp";
            dayTemp.innerHTML = this.countTempByType(element.day);

            const iconInfo =  document.createElement('img');
            iconInfo.src = element.day.condition.icon;

            futureDiv.append(dayDiv);
            infoDiv.append(dayTemp, iconInfo);
            futureDiv.append(infoDiv);
            dateContainer.append(futureDiv);
        });

        return dateContainer;
    }

    countTempByType(dayTemp){
        return this.currentTempuretureType === "F" ? `${dayTemp.avgtemp_f}°` :  `${dayTemp.avgtemp_c}°`;
    }

    receiveCurrentDate(sDate){
        let dayNumb = new Date(Date.parse(sDate)).getDay();
        let weekDay = this.currentLangData.weekDays[dayNumb-1];
        return weekDay;
    }
});
// CONCATENATED MODULE: ./src/components/Weather/Weather.js





/* harmony default export */ var Weather = (class {
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

        const weatherBlock = new WeatherBlock(this.weatherData, this.currentTempuretureType, this.currentLang, this.currentLangData);
        const weatherBlockText = weatherBlock.createLayout();
        this.weatherPanel.append(weatherBlockText);

        const weatherFuture = new WeatherFuture(this.weatherData.forecast, this.currentTempuretureType, this.currentLang, this.currentLangData);
        const weatherFutureText = weatherFuture.createLayout();
        this.weatherPanel.append(weatherFutureText);
     }

    insert(parent) {
        parent.append(this.weatherPanel);
    }

    requestWeather(currentCity, currentLang, currentLangData, currentTempuretureType) {
      this.currentLang = currentLang;
      this.currentLangData = currentLangData;
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
});
// CONCATENATED MODULE: ./src/components/MapInfo/MapInfo.js
/* harmony default export */ var MapInfo = (class {
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
});
// CONCATENATED MODULE: ./src/app.js

__webpack_require__(1);








class app_App {
  constructor() {
    this.currentLang = "en";
    this.currentTempuretureType = "F";
    this.currentLangData = language_data[this.currentLang];
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
      this.currentLangData = language_data[this.currentLang];
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

const app_app = new app_App();

/***/ })
/******/ ]);