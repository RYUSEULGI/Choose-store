const weather = document.querySelector('.js-weather');

const API_KEY = "cc373f34f97762e14b93a9cbfb1d87ed";
const COORDS_LS = "coords";

function getWeather(lat, lng) {
    fetch(`
    https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function (response) {     //then을 써주면 데이터가 완전히 다 들어올 때 호출한다
        return response.json()
    }).then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}ºC @${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoErr() {
    console.log('Cant access geo location');
}

function askforCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoErr); //위치경로
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if (loadedCoords === null) {
        // 위치를 알지 못하는 경우
        askforCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}
init();
