require.context("Src/images/", true, /\.(png|svg|jpg|gif)$/);

export default class {
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

}
