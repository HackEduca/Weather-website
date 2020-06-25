
window.onload = function back() {
    const searchbox = document.querySelector('.search-box');
    getresults(searchbox.value)
}
function getresults(query) {
    var key = 'f50f60580f5345713a7c7c7bb2b0a605';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}`)
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

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let vary = document.querySelector('.current .vary');
    vary.innerText = `${Math.round(weather.main.temp_max)}°C / ${Math.round(weather.main.temp_min)}°C`;

    console.log(weather);
}

