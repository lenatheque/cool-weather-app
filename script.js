//Getting the current date
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
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
///
function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#precipitation").innerHTML = response.data.main.value;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "5b0bfa960cf8480fafd9ea6aed867930";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", submit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");

////
// let dateElement = document.querySelector("#date");
// let currentTime = new Date();
// dateElement.innerHTML = formatDate(currentTime);

// function showTemperature(response) {
//   console.log(response.data);
//   document.querySelector("#city").innerHTML = response.data.name;
//   document.querySelector("#tempToday").innerHTML = Math.round(
//     response.data.main.temp
//   );
// }

// function search(event) {
//   event.preventDefault();
//   let apiKey = "5b0bfa960cf8480fafd9ea6aed867930";
//   let city = document.querySelector("#city-input").value;
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(showTemperature);
// }

// // Convert temperatures
// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#fahrenheit-input");
//   temperatureElement.innerHTML = fahrenheitInput;
// }

// function convertToCelsius(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#celsius-input");
//   temperatureElement.innerHTML = celsiusInput;
// }

// let fahrenheitInput = document.querySelector("#fahrenheit-input");
// fahrenheitInput.addEventListener("click", convertToFahrenheit);

// let celsiusInput = document.querySelector("#celsius-input");
// celsiusInput.addEventListener("click", convertToCelsius);

// //Geolocation
// function showPosition(position) {
//   console.log(response.data);
//   let h1 = document.querySelector("#city");
//   h1.innerHTML = "New York";
//   console.log(position.coords.latitude);
//   console.log(position.coords.longitude);
// }

// function getCurrentPosition() {
//   navigator.geolocation.getCurrentPosition(showPosition);
// }
