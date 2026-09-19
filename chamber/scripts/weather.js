const tempDisplay = document.querySelector('#temp-value');
const weatherGraphic = document.querySelector('#current-condition-img')
const weatherSummary = document.querySelector('#condition-desc');
const outlookList = document.querySelector('#three-day-outlook');

const weatherApiKey = '0052ee555ac4a3153cb8510f4a89f804'
const manheimLat = '40.1632';
const manheimLon = '-76.3958';
const todayWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${manheimLat}&lon=${manheimLon}&units=imperial&appid=${weatherApiKey}`;
const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${manheimLat}&lon=${manheimLon}&units=imperial&appid=${weatherApiKey}`;

async function fetchCurrentConditions() {
    try {
        const apiResponse = await fetch(todayWeatherUrl);
        if (apiResponse.ok) {
            const parsedData = await apiResponse.json();
            displayTodayWeather(parsedData);
        } else {
            throw Error(await apiResponse.text());
        }
    }
    catch (networkError) {
        console.log('There was an error while attempting to fetch current weather data:', networkError);
    }
}

function displayTodayWeather(weatherData) {
    const roundedTemperature = Math.round(weatherData.main.temp);
    tempDisplay.innerHTML = roundedTemperature;
    const apiIconCode = weatherData.weather[0].icon;
    const fullIconUrl = `https://openweathermap.org/img/wn/${apiIconCode}@2x.png`;
    const conditionString = weatherData.weather[0].description;
    weatherGraphic.setAttribute('src', fullIconUrl);
    weatherGraphic.setAttribute('alt', conditionString);
    weatherSummary.textContent = conditionString;
}

async function fetchFutureForecast() {
    try {
        const forecastResponse = await fetch(forecastApiUrl);
        if (forecastResponse.ok) {
            const parsedForecast = await forecastResponse.json();
            showThreeDayForecast(parsedForecast)
        }
        else {
            throw Error(await forecastResponse.text())
        }
    } catch (forecastError) {
        console.log('There was an error while attempting to fetch forecast weather data:', forecastError);
    }
}

function showThreeDayForecast(forecastJson) {
    const middayForecasts = forecastJson.list.filter(forecastInterval => forecastInterval.dt_txt.includes('12:00:00'));
    const threeDayArray = middayForecasts.slice(0, 3);
    threeDayArray.forEach(dayInfo => {
        const jsDateObject = new Date(dayInfo.dt_txt);
        const dayString = jsDateObject.toLocaleDateString('en-US', { weekday: 'long' });
        const roundedDayTemp = Math.round(dayInfo.main.temp);
        const newListItem = document.createElement('li');
        newListItem.innerHTML = `<strong>${dayString}</strong>: ${roundedDayTemp}&deg; F`;
        outlookList.appendChild(newListItem);
    })
}

fetchCurrentConditions();
fetchFutureForecast();