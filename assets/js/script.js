// variables
let weatherData = {};
let allWeatherData = {};

//DOM variables
let cityEl = doucment.getElementById("city-search");
let serachEl = doucment.getElementById("serach-btn");
let iconEl = doucment.getElementById("icon");
let cityNameEl = doucment.getElementById("city-name");
let tempElj = document.createElement("temp");
let humidityEl = document.getElementById("humidity");
let windSpeedEl = document.getElementById("wind-speed");
let uvIndexEl = document.createElement("uv");
let todayWeatherEl = document.getElementById("today-weather");
let cityHistory = document.getElementById("city-history");
let deleteBtnEl = document.getElementById("delete-btn");
//API key
let apiKey = "e1678151ac2117c3ce8405f408aeec0a"
    // function that will allow a user to search for the weather forecast via created url from api


//function that use geocoding api to convert lat and long to city name

// function that will fetch API key and url add 'units=imperial'

// variables for the dates

// create date on HTML

// begin weather data below

//weather icon image

// use fetch to collect specific data values via innerHTML: wind speed, temperature, humidity, uv index

/*
current.temp
current.humidity
current.uvi
current.wind-speed
current.weather-icon
current.weather-description
*/

//function to append elements by id into html

// function to make color for UV

// function to make 5 day forecast 

// create cards via bootstrap for the five day forecast

//Elements needed for 5 day forecast: temp windspeed humidity

//function to make local storage, store serached cities

// add funciton to delete local storage


// call final fucntion