const apiKey = 'e9b11febff8051d14cbd973231ea019c'; 

// Function to fetch and display current weather
function getWeather() {
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert('City not found. Please try again.');
            } else {
                displayCurrentWeather(data);
                getForecast(city);  // Fetch and display 5-day forecast
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

// Function to display current weather
function displayCurrentWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    document.getElementById('city-name').textContent = cityName;
    document.getElementById('current-temp').textContent = `${temperature}°C`;
    document.getElementById('weather-description').textContent = description;
    document.getElementById('weather-icon').src = icon;
}

// Function to fetch 5-day weather forecast
function getForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const forecast = data.list.filter((item, index) => index % 8 === 0); // Get one forecast per day
            displayForecast(forecast);
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
            alert('Error fetching forecast data. Please try again.');
        });
}

// Function to display the 5-day forecast
function displayForecast(forecast) {
    const forecastCards = document.getElementById('forecast-cards');
    forecastCards.innerHTML = '';  // Clear existing forecast cards

    forecast.forEach(item => {
        const date = new Date(item.dt * 1000); // Convert Unix timestamp to Date
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = item.main.temp;
        const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

        const card = document.createElement('div');
        card.classList.add('forecast-card');
        card.innerHTML = `
            <p>${day}</p>
            <img src="${icon}" alt="Weather icon">
            <p>${temp}°C</p>
        `;
        forecastCards.appendChild(card);
    });
}
