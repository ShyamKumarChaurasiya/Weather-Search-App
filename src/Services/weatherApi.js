const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city) {

    // Step 1: Get latitude and longitude
    const geoResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );

    if (!geoResponse.ok) {
        throw new Error("Unable to find city");
    }

    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
        throw new Error("City not found");
    }

    const lat = geoData[0].lat;
    const lon = geoData[0].lon;

    // Step 2: Get weather using latitude and longitude
    const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!weatherResponse.ok) {
        throw new Error("Unable to get weather data");
    }

    const weatherData = await weatherResponse.json();

    return weatherData;
}