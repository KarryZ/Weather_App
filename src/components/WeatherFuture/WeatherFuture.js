export default class {
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
}