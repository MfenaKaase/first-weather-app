const api = {
    key:"c6ef0802b01c74cff6067a4cb0029c28",
    baseurl: "https://api.openweathermap.org/data/2.5/"
};

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    getResults(searchBox.value);
});

function setQuery(evt) {
    if (evt.keyCode == 13) {
       getResults(searchBox.value);
    }
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    let city = document.querySelector('.city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.date');
    date.innerHTML = dateBuilder(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>&deg;c</span>`;

    let weather_el = document.querySelector('.weather');
    weather_el.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${weather.main.temp_min}&deg;c / ${weather.main.temp_max}&deg;c`;


}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
    })
}