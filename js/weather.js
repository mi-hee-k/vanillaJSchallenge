const API_KEY = "dea20206cb94e57389988a1717d67755";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather p");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:nth-child(3)");
      city.innerText = `${data.name}`;
      weather.innerText = ` ${data.weather[0].main}`;
      temp.innerText = `${data.main.temp}도`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
