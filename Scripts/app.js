const DarrylKey = '2a81aae1fd6131a7dd0e3509c4a72374';

let userInput = document.getElementById('userInput');
let currentCity = document.getElementById('currentCity');
let currentTemperature = document.getElementById('currentTemperature');
let currentData = "";
let weekData = "";



searchBtn.addEventListener('click', function(){
    console.log("working")
let userInput = document.getElementById('userInput').value
currentCity.innerText = currentData.name
currentTemperature.innerText = currentData.main.temp + "°F"
});









async function dataCall() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=${DarrylKey}&units=imperial`);
    const data = await response.json();
    console.log(data)
    currentData = data;
    // console.log(localData);   
}
dataCall();
