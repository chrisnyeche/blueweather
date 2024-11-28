import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import searchIcon from "../images/search-line.svg";

function Card() {
  const [city, setCity] = useState("Port Harcourt");
  const [weather, setWeather] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading City...");
  const [errorMessage, setErrorMessage] = useState("");

  const apiKey = "e34bae7db1e26852bb5f4dd0f0c8d05b";
  const fetchWeatherData = async (cityName) => {
    setLoadingMessage("Loading...");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${cityName}')`;
        setLoadingMessage(cityName);
      } else {
        setWeather(null);
        setErrorMessage("City not found. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to fetch weather data. Please try again later.");
      console.error("Error fetching weather data:", error);
    } finally {
      setLoadingMessage("");
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCity = e.target.elements.city.value.trim();
    if (inputCity) {
      setCity(inputCity);
    }
  };

  return (
    <main className="m-3">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-9 col-lg-4 d-flex justify-content-end mt-3 p-3 bg-card">
          <div className="card w-100 border border-white">
            <div className="search">
              <form onSubmit={handleSubmit} className="text-center">
                <div className="d-flex border rounded">
                  <input
                    type="text"
                    name="city"
                    className="search-bar p-2 w-100"
                    placeholder="Search city..."
                  />
                  <button type="submit" className="btn btn-light">
                    <img src={searchIcon} alt="Search" />
                  </button>
                </div>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                {loadingMessage && <p className="text-success">{loadingMessage}</p>}
              </form>
            </div>
            <Weather condition={weather} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Card;
