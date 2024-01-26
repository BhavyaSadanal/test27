const axios = require('axios');

const apiKey = '3c16bc49859fe8df49f9de636bbe2cbb';
const city = 'hyderabad'; // Replace with the desired city name

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios.get(apiUrl)
  .then(response => {
    const weatherData = response.data;
    console.log(`Weather in ${city}:`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error.message);
  });
