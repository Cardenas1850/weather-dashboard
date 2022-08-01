// variables
let weatherData = {};
let allWeatherData = {};
let uvi = "";

//DOM variables
let cityEl = document.getElementById("city-input");
let searchEl = document.getElementById("search-button");
let currentIconEl = document.getElementById("weather-icon");
let cityNameEl = document.getElementById("city-given");
let tempEl = document.getElementById("temp");
let humidityEl = document.getElementById("humidity");
let windSpeedEl = document.getElementById("wind-speed");
let uvIndexEl = document.getElementById("uv-index");
let currentWeatherEl = document.getElementById("current-weather");
let fiveDayHeadEl = document.getElementById("five-day-header");
let historyEl = document.getElementById("history");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
let deleteBtnEl = document.getElementById("clear-history");
//API keys
const APIKey = "e1678151ac2117c3ce8405f408aeec0a";
    // function that will allow a user to search for the weather forecast via created url from api
function createWeather(cityName) {
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIKey}`;

//fetch data 
fetch(weatherURL)
    .then(function (response) {
    response.json().then(function (result) {
        weatherData = result;
        currentWeatherEl.classList.remove("d-none");

        //date variables

        const currentDate = new Date(weatherData.dt * 1000);
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        cityNameEl.innerHTML = weatherData.name + " (" + month + "/" + day + "/" + year + ") ";

        let weatherIcon = weatherData.weather[0].icon;
        currentIconEl.setAttribute("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
        currentIconEl.setAttribute("alt", result.weather[0].description);

        tempEl.innerHTML = "Temp" + weatherData.main.temp + " &8457";
        humidityEl.innerHTML = "Humidity" + weatherData.main.humidity + "%";
        windSpeedEl.innerHTML = "Windspeed" + weatherData.wind.speed + "MPH";

        let longitude = weatherData.coord.lon;
        let latitude = weatherData.coord.lat;
        let uvURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=imperial&appid=${APIKey}`;
        fetch(uvURL)
        .then(function(response) {
            response.json().then(function (result) {
                allWeatherData = result;
                uvi = result.current.uvi;
                let uviEl = document.createElement("span");

                if (uvi < 4) {
                    uviEl.setAttribute("class", "badge bg-success");
                } else if (uvi < 8) {
                    uviEl.setAttribute("class", "badge bg-warning");
                } else {
                    uviEl.setAttribute("class", "badge bg-danger");
                }

                uviEl.inngerHTML = uvi;
                uvIndexEl.innerHTML = "UV Index";
                uvIndexEl.append(uviEl);

                fiveDay(cityName);
            })
        });
    });
});
}

function fiveDay(cityname) {
    fiveDayHeadEl.classList.remove("d-none");
    const fiveDayEl = document.querySelectorAll(".five-day");
    for (i = 0; i < fiveDayEl.length; i++) {

        fiveDayEl[i].innerHTML = "";
        console.log(JSON.stringify(allWeatherData));
        const fiveDayDate = new Date(allWeatherData.daily[i].dt * 1000);
        const fiveDayDay = fiveDayDate.getDate();
        const fiveDayMonth = fiveDayDate.getMonth() + 1;
        const fiveDayYear = fiveDayDate.getFullYear();
        const fiveDayDateEl = document.createElement("p");
        fiveDayDateEl.setAttribute("class", "date mt-3 mb1");
        fiveDayDateEl.innerHTML = fiveDayMonth + "/" + fiveDayDay + "/" + fiveDayYear;
        fiveDayEl[i].append(fiveDayDateEl);

        const fiveDayIconEl = document.createElement("img");
        fiveDayIconEl.setAttribute("src", `https://openweathermap.org/img/wn/${allWeatherData.daily[i].weather[0].icon}@2x.png`);
        fiveDayIconEl.setAttribute("alt", allWeatherData.daily[i].weather[0].description);
        fiveDayEl[i].append(fiveDayIconEl);

        const fiveDayTempEl = document.createElement("p");
        fiveDayTempEl.innerHTML = "High:" + allWeatherData.daily[i].temp.day + "&#8457";
        console.log(allWeatherData.daily[i].temp.day);
        fiveDayEl[i].append(fiveDayTempEl);

        const fiveDayHumidityEl = document.createElement("p");
        fiveDayHumidityEl.innerHTML = "Humidity:" + allWeatherData.daily[i].humidity + "%";
        fiveDayEl[i].append(fiveDayHumidityEl);
    }
}

searchEl.addEventListener("click", function () {
    const searchInput = cityEl.value;

    if (searchInput != false) {
        createWeather(searchInput);
        deleteBtnEl.classList.remove("d-none");
        searchHistory.push(searchInput);
        localStorage.setItem("search", JSON.stringify(searchHistory));
        renderHistory();
    }
});

deleteBtnEl.addEventListener("click", function() {
    localStorage.clear();
    searchHistory = [];
    renderHistory();
});

function renderHistory() {
    historyEl.innerHTML = "";
    for (let i = 0; i < searchHistory.length; i++) {
        const storedItem = document.createElement("input");
        storedItem.setAttribute("type", "text");
        storedItem.setAttribute("readonly", true);
        storedItem.setAttribute("class", "form-control d-block bg-white p-2");
        storedItem.setAttribute("value", searchHistory[i]);
        storedItem.addEventListener("click", function() {
            createWeather(storedItem.value);
        })
        historyEl.append(storedItem);
    }
}

function checkHistroy() {
    renderHistory();
    if(searchHistory.length > 0) {
        deleteBtnEl.classList.remove("d-none");
        createWeather(searchHistory[searchHistory.length - 1]);
    }
}

window.onload = checkHistroy();