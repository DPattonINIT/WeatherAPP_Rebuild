import { DarrylKey } from "./APIKey.js";
// import { saveToLocalStorage,getFromLocalStorage } from "./localStorage.js";


// Current weather Section-----------------------------------------------------------------------------------------------------------




// Current ID---------------------------------------
let userInput = document.getElementById('userInput');
let searchBtn = document.getElementById('searchBtn');
let currentCity = document.getElementById('currentCity');
let currentTemperature = document.getElementById('currentTemperature');
let userLocation = "";
let todayTemp = document.getElementById('todayTemp');
let todayLow = document.getElementById('todayLow');
let todayWind = document.getElementById('todayWind');
let todayPrec = document.getElementById('todayPrec');
let today2date = document.getElementById('today2date');
let localStorageBtn = document.getElementById('localStorageBtn');
let userFav = document.getElementById('userFav');
const favCity2 = document.getElementById('favCity2');
const favCity3 = document.getElementById('favCity3');
const favCity4 = document.getElementById('favCity4');
const favCity5 = document.getElementById('favCity5');
let favoriteList = document.getElementById('favoriteList');






function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                
                
                currentData(lat, lon);
                weeklyData(lat, lon);
            },
            function(error) {
                console.error(error);
                alert("Geolocation is not available");
            }
    
        );
    }}

       





function saveToLocalStorage(name){
    let nameArr = getFromLocalStorage();
    if (nameArr.length >= 5) {
        alert("You can only save 5 cities as favorites.");
        return;
    }

    if (name && !nameArr.includes(name)) {
        nameArr.push(name)};
localStorage.setItem('city', JSON.stringify(nameArr))
}



function getFromLocalStorage(){
    let saveToLocalStorageData = localStorage.getItem('city')

    if(saveToLocalStorageData == null){

        return [];
    }
      return JSON.parse(saveToLocalStorageData);     
}




function removeFromLocalStorage(city){

    let localStorageData = getFromLocalStorage();
    let cityIndex = localStorageData.indexOf(city);

    localStorageData.splice(cityIndex, 1);
    localStorage.setItem('city', JSON.stringify(localStorageData));
};






function createElements(){
    let cityNames = getFromLocalStorage();
    favoriteList.innerHTML = '';
    console.log(cityNames);

    cityNames.map( city =>{
        console.log(city)
        

        let p = document.createElement('p');
        p.innerText = city;
    
        let removeBtn = document.createElement('button')
        removeBtn.type = 'button';
        removeBtn.className = "btn-close";
        removeBtn.addEventListener('click', function(){
            removeFromLocalStorage(city)
            p.remove();
           
        })
        p.appendChild(removeBtn);
        favoriteList.appendChild(p)
       
        
        
    })
}

window.onload = function () {
    createElements();  
    getGeolocation();
};

localStorageBtn.addEventListener('click', function(){
    let userLocation = userInput.value;
    saveToLocalStorage(userLocation);
    createElements()
});









function getCurrentDate() {
    const today = new Date();
    const month = today.getMonth() + 1; 
    const day = today.getDate(); 
    const year = today.getFullYear(); 
    
    return `${month}/${day}/${year}`;
}


async function currentData(city){
    userLocation = userInput.value.trim().toLowerCase();
    

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${DarrylKey}&units=imperial`);
    const data = await response.json();
    console.log(data);
    currentCity.innerText = `${data.name}, ${data.sys.country}`;
    currentTemperature.innerText = `${data.main.temp}°F`;
    todayTemp.innerText = `${data.main.temp_max}°F - H`;
    todayLow.innerText = `${data.main.temp_min}°F -Low`;
    todayWind.innerText = `${data.wind.speed} MPH - Wind`;
    today2date.innerText = getCurrentDate();
}
currentData();






// Weekly weather Section--------------------------------------------------------------------------------------------------------------






// Weekly ID -----------------------------------------
let day2header = document.getElementById('day2header');
let day2date = document.getElementById('day2date');
let day2Temp = document.getElementById('day2Temp');
let day2low = document.getElementById('day2low');
let day3header = document.getElementById('day3header');
let day3date = document.getElementById('day3date');
let day3Temp = document.getElementById('day3Temp');
let day3low = document.getElementById('day3low');
let day4header = document.getElementById('day4header');
let day4date = document.getElementById('day4date');
let day4Temp = document.getElementById('day4Temp');
let day4low = document.getElementById('day4low');
let day5header = document.getElementById('day5header');
let day5date = document.getElementById('day5date');
let day5Temp = document.getElementById('day5Temp');
let day5low = document.getElementById('day5low');
let day6header = document.getElementById('day6header');
let day6date = document.getElementById('day6date');
let day6Temp = document.getElementById('day6Temp');
let day6low = document.getElementById('day6low');



// Function to format date to M/D/Y-----------------------------------------
function formatDate(timestamp){
    const date = new Date (timestamp * 1000);
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

// Function to get day of week name------------------------------------------
function getDayOfWeek(timestamp) {
    const date = new Date(timestamp * 1000);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getDay()];  
}






// Function to access weekly API, 
async function weeklyData(city){
    userLocation = userInput.value.trim().toLowerCase();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userLocation}&appid=${DarrylKey}&units=imperial`);
    const data = await response.json();
    console.log(data);
    
    const forecastData = data.list.filter((entry, index) => (index + 1) % 8 === 0); 
    console.log(forecastData);
    forecastData.forEach((entry, index) => {
        const date = formatDate(entry.dt);  
        const temp = entry.main.temp;  
        const tempLow = entry.main.temp_min;
        const dayOfWeek = getDayOfWeek(entry.dt);  
        
        if (index === 0) {
            day2header.innerText = dayOfWeek;
            day2date.innerText = date;
            day2Temp.innerText = `${temp}°F - H`;
            day2low.innerText = `Low: ${tempLow}°F`;  
            
        }else if (index === 1) {
            day3header.innerText = dayOfWeek;
            day3date.innerText = date;
            day3Temp.innerText = `${temp}°F - H`;
            day3low.innerText = `Low: ${tempLow}°F`;
        } else if (index === 2) {
            day4header.innerText = dayOfWeek;
            day4date.innerText = date;
            day4Temp.innerText = `${temp}°F - H`;
            day4low.innerText = `Low: ${tempLow}°F`;
        } else if (index === 3) {
            day5header.innerText = dayOfWeek;
            day5date.innerText = date;
            day5Temp.innerText = `${temp}°F - H`;
            day5low.innerText = `Low: ${tempLow}°F`;
        } else if (index === 4) {
            day6header.innerText = dayOfWeek;
            day6date.innerText = date;
            day6Temp.innerText = `${temp}°F - H`;
            day6low.innerText = `Low: ${tempLow}°F`;
        }
    });
    
    
}

searchBtn.addEventListener('click', function() {
    currentData();
    weeklyData();
});







 













