//Getting the current date and time
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${formatHours(timestamp)}`;
}

let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

// FORECAST API
function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weekly-forecast").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#precipitation").innerHTML = response.data.main.value;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let iconElement = document.querySelector("#icon-today");

// function searchCity(city) {
//   let apiKey = "5b0bfa960cf8480fafd9ea6aed867930";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(displayWeatherCondition);
//   console.log(apiUrl);
//   //Make an API call to OpenWeather API
//   //Once I get the HTTP response, we display the city name and the temperature.
// }
// function submit(event) {
//   event.preventDefault();
//   let city = document.querySelector("#city-input").value;
//   searchCity(city);
// }

// function searchLocation(position) {
//   let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(displayWeatherCondition);
// }

// function getCurrentLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(searchLocation);
// }

// function showFahrenheitTemp(event) {
//   event.preventDefault();
//   fahrenheitLink.classList.add("active");
//   celsiusLink.classList.remove("active");
//   let temperatureElement = document.querySelector("#temp-now");
//   temperatureElement.innerHTML = Math.round(fahrenheitTemperature);

//   let tempFeelElement = document.querySelector("#temp-feel");
//   tempFeelElement.innerHTML = Math.round(fahrenheitFeel);
//   let tempFeelUnit = document.querySelector("#temp-feel-unit");
//   tempFeelUnit.innerHTML = `°F`;

//   let windElement = document.querySelector("#wind-now");
//   windElement.innerHTML = Math.round(windSpeed);
//   let windUnitElement = document.querySelector("#wind-unit");
//   windUnitElement.innerHTML = ` mph`;
// }
// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", showCelsiusTemp);

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", showFahrenheitTemp);

// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = 66;
// }

// function convertToCelsius(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = 19;
// }

// let dateElement = document.querySelector("#date");
// let currentTime = new Date();
// dateElement.innerHTML = formatDate(currentTime);

// let searchForm = document.querySelector("#search-form");
// searchForm.addEventListener("submit", submit);

// let currentLocationButton = document.querySelector("#current-location-button");
// currentLocationButton.addEventListener("click", getCurrentLocation);

// searchCity("New York");
