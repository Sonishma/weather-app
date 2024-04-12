const apiKey = '865996a2e3aecd27d4b3abf0b94648f6';

const cityElement = document.getElementById('city');
const dateElement = document.getElementById('date');
const weatherIconElement = document.getElementById('weather-icon');
const mainWeatherElement = document.getElementById('main-weather');
const temperatureElement = document.getElementById('temperature');
const pressureElement = document.getElementById('pressure');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');

function searchWeather() {
    const cityInput = document.getElementById('cityInput').value;
    fetchWeather(cityInput);
}

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            cityElement.textContent = data.name;
            const currentDate = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = currentDate.toLocaleDateString('en-US', options);
            mainWeatherElement.textContent = data.weather[0].description;
            weatherIconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
            temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
            pressureElement.textContent = `Pressure: ${data.main.pressure} hPa`;
            humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
            windElement.textContent = `Wind Speed: ${data.wind.speed} m/s, Direction: ${data.wind.deg}°`;
        })
        .catch(error => console.log('Error fetching weather data:', error));
}
fetchWeather('Huntingdonshire');