import { useState } from "react";

import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import ErrorMessage from "./ErrorMessage";

import { getWeather } from "../Services/weatherApi";

import "../Weather.css";

export default function Weather() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const searchWeather = async (event) => {

        event.preventDefault();

        if (!city.trim()) {
            setError("Please enter a city name");
            return;
        }

        try {

            setError("");
            setWeather(null);

            const data = await getWeather(city);

            setWeather(data);
            setCity("");

        } catch (error) {

            console.log(error);
            setError(error.message);

        }
    };

    return (
    <div className="Search">

        {/* Left Side */}
        <div className="search-section">

            <h1>
                Search for the Weather
            </h1>

            <SearchBox
                city={city}
                setCity={setCity}
                onSearch={searchWeather}
            />

            <ErrorMessage
                error={error}
            />

        </div>


        {/* Right Side */}
        <div className="weather-section">

            {weather && (
                <WeatherCard
                    weather={weather}
                />
            )}

        </div>

    </div>
);
}