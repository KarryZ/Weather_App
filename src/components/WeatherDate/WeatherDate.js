export default class {
    constructor(){
        this.newDate = "6/8/2020";
    }

    createLayout(){
        const dateDiv = document.createElement('div');
        dateDiv.className = "weater-date";
        dateDiv.innerHTML =  `<h2>${this.newDate}</h2>`;
        return dateDiv;
    }
}