// ea350835c43f36fe80cc32a1f8036ff0
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const API_KEY = "ea350835c43f36fe80cc32a1f8036ff0";
const span_temp = document.querySelector("#temp");
const span_loc = document.querySelector("#location");
const span_weather = document.querySelector("#weather");

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const wheather = fetch(url).then(response => response.json()).then(data =>{
        const loc = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;

        span_loc.innerText = loc;
        span_weather.innerText = weather;
        span_temp.innerText = temp + '°';
    });
}

function onGeoError() {
    
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);