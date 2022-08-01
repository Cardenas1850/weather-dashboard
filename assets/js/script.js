// variables
let weatherData = {};
let allWeatherData = {};

//DOM variables
let cityEl = document.getElementById("city-input");
let searchEl = document.getElementById("search-button");
let currentIconEl = document.getElementById("weather-icon");
let cityNameEl = document.getElementById("city-given");
let tempEl = document.getElementById("temp");
let humidityEl = document.getElementById("humidity");
let windspeedEl = document.getElementById("windspeed");
let uvIndexEl = document.getElementById("uv-index");
let currentWeatherEl = document.getElementById("current-weather");
let fiveDayHeadEl = document.getElementById("five-day-header");
let historyEl =  document.getElementById("history");
let serachHistory = JSON.parse(localStorage.getItem("search")) || [];
let deleteBtnEl = document.getElementById("clear-history");
//API keys
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