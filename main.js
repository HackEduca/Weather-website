const api = {
    key: "f50f60580f5345713a7c7c7bb2b0a605",
    base: "https://api.openweathermap.org/data/2.5/"
  }

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

const searchbox1 = document.querySelector('.search-box1');
searchbox1.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value,searchbox1.value);
    }
  }
function getResults(query,queryl) {
    fetch(`${api.base}weather?lat=${query}&lon=${queryl}&units=metric&APPID=${api.key}`)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
         displayResults(data);
    })
    .catch(function() {});
}


function displayResults (weather) {
    
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let vary = document.querySelector('.current .vary');
    vary.innerText = `${Math.round(weather.main.temp_max)}°C / ${Math.round(weather.main.temp_min)}°C`;

    console.log(weather);
}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }