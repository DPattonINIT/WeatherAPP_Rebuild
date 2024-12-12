// import { DarrylKey } from "./APIKey";

const DarrylKey = '2a81aae1fd6131a7dd0e3509c4a72374';
let userInput = document.getElementById('userInput');
let searchBtn = document.getElementById('searchBtn');
let currentCity = document.getElementById('currentCity');
let currentTemperature = document.getElementById('currentTemperature');


let currentData = "";
let weekData = "";
let userLocation = "";

async  function retrieveData(){
    userLocation = userInput.value.trim();

}



















// async function dataCall() {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=${DarrylKey}&units=imperial`);
//     const data = await response.json();
//     console.log(data)
//     currentData = data;
//     // console.log(localData);   
// }
// dataCall();

// async function weatherCall(){
// const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Paris&appid=${DarrylKey}&units=imperial`);
// const worlddata = await response.json();
// console.log(worlddata)

// }
// weatherCall();