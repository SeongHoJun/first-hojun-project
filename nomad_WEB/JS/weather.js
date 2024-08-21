const API_KEY = "1595f33030d459595fcf0482293c538e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live at", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            if (weather && city) { // 요소가 존재하는지 확인
                city.innerText = data.name;
                weather.innerText = data.weather[0].main;
            } else {
                console.error("Weather or city elements not found.");
            }
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

document.addEventListener("DOMContentLoaded", function() {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
