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
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement = innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 6; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
    <div class="col-2">
      <h3>${formatHours(forecast.dt * 1000)}</h3>
      <img
        src="http://openweathermap.org/img/wn/${
          forecast.weather[0].icon
        }@2x.png"
      />
      <div class="weather-forecast-temperature">
        <strong>${Math.round(forecast.main.temp_max)}°</strong>
        ${Math.round(forecast.main.temp_min)}°
      </div>
    </div>
  `;
  }
}

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
