export default class {
    constructor(forecast){
        this.forecast = forecast;
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
            dayTemp.innerHTML = element.day.maxtemp_f;

            const iconInfo =  document.createElement('img');
            iconInfo.src = element.day.condition.icon;

            futureDiv.append(dayDiv);
            futureDiv.append(infoDiv);
            futureDiv.append(dayTemp);
            futureDiv.append(iconInfo);
            dateContainer.append(futureDiv);
        });

        return dateContainer;
    }

    receiveCurrentDate(sDate){
        return new Date(Date.parse(sDate));
    }
}