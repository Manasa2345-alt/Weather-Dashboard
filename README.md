# Weather Dashboard

Application for weather dashboard using html, CSS, Javascript

![image](https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png?raw=true)

![image](https://img.shields.io/badge/HTML-%E2%9C%94-brightgreen)
![image](https://img.shields.io/badge/CSS-%E2%9C%94-brightgreen)
![image](https://img.shields.io/badge/JavaScript-%E2%9C%94-brightgreen)
![image](https://img.shields.io/static/v1?label=Responsive&message=%E2%9C%94&color=success)


## Introduction
The Weather Dashboard is a web-based application that allows users to search for the weather forecast of any city. It fetches real-time weather data from a weather and displays the current temperature, weather conditions, and an icon representing the weather. Additionally, the dashboard provides a 5-day weather forecast with detailed information about each day's weather.

## Getting Started

Follow these steps to get the **Weather Dashboard** up and running on your local machine:

### 1. **Clone or Download the Project**
   - **Clone the Repository**:
     ```bash
     git clone https://github.com/yourusername/weather-dashboard.git
     ```
   - Alternatively, you can **download** the project as a `.zip` file and extract it.

### 2. **Open the Project**
   - Open the `index.html` file in any modern web browser (e.g., Chrome, Firefox) to see the Weather Dashboard in action.

### 3. **(Optional) Get an API Key**
   - To fetch live weather data, you need to sign up for an API key from a weather data provider (like [OpenWeatherMap](https://openweathermap.org/api)).
   - After getting your API key, update the `script.js` file to include your API key where the weather API is called.

---

## Controls

 1. **Search Bar**
   - **What it does**: This is where you can type the name of any city (e.g., "New York").
   - **How to use**: Type the city name and click the **Search** button to get the weather details for that city.

 2. **Search Button**
   - **What it does**: Once you've typed a city name, click the **Search** button to fetch weather data.
   - **How to use**: This will trigger the API call and display the current weather and 5-day forecast for that city.

 3. **Current Weather Info**
   - **City Name**: Displays the name of the city you searched for.
   - **Current Temperature**: Shows the current temperature for the selected city.
   - **Weather Description**: A brief description of the weather (e.g., "Sunny", "Cloudy", "Rainy").
   - **Weather Icon**: An image representing the current weather condition (e.g., sun, rain, clouds).

 4. **5-Day Forecast**
   - **What it does**: Displays a 5-day weather forecast with details about the weather each day, such as temperature and weather condition.
   - **How to use**: Below the current weather, you'll see forecast cards for the next five days.

---


## Features
- **City Search**: Enter a city name to retrieve weather data.
- **Current Weather**: Displays the current temperature, weather description, and weather icon for the searched city.
- **5-Day Forecast**: Displays a 5-day forecast with temperature and weather conditions for each day.
- **Responsive Design**: The layout is mobile-friendly and adjusts to different screen sizes.

## Technologies Used
- **HTML**: For structuring the content.
- **CSS**: For styling the page and layout.
- **JavaScript**: For handling user input, fetching data from an API, and updating the webpage dynamically.

## How It Works

1. **User Input**: The user enters the name of a city into the search bar and clicks the "Search" button.
2. **API Request**: The app makes an API request to fetch weather data from a weather provider (e.g., OpenWeatherMap).
3. **Display Data**: The app displays the current weather details (temperature, description, and an icon) for the searched city.
4. **5-Day Forecast**: The app fetches and displays a 5-day weather forecast with temperature and weather descriptions for each day.
5. **UI Update**: All data is displayed dynamically in the app, updating in real time as the user searches for different cities.

---

## Roadmap
Upcoming features to be implemented:
- [ ] Add more categories (e.g., Food, Travel)
- [ ] Implement infinite scroll for loading more images dynamically
- [ ] Mobile enhancements for better performance
- [ ] Add image descriptions and metadata
- [ ] Option to upload images directly through the interface
- [ ] Image carousel for browsing images in modal
      
## How to run and Dvelopment copy of the project
1.**Clone the repository**:
Open Vs Code(Visual studio)app open folder and right click on map.html file in drop down you will be getting like "open with live server" click on it .

It will take you for new tab and it will be having like below image.

![image](https://github.com/Manasa2345-alt/Weather-Dashboard/blob/main/Screenshot%202024-12-30%20161614.png)


If you give any city name and click on search button it will give report on weather for 5 days show in below image.

![image](https://github.com/Manasa2345-alt/Weather-Dashboard/blob/main/Screenshot%202024-12-30%20161631.png)
This setup allows for smooth testing and debugging during development.

```bash
   git clone https://github.com/your-username/image-gallery.git

## Acknowledgments

- The weather data is fetched using an API from a weather service like OpenWeatherMap.
- Icons for weather conditions are sourced from public domain or creative commons resources.
