import React from "react";
import { useState, useEffect } from "react";
import Weather from "./weather";
import search from "../images/search-line.svg";

function Card() {
  const [load, setLoad] = useState("Loading City...")
   const [city, setCity] = useState("Port Harcourt");
  const [weather, setWeather] = useState([]);

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;
  let apiKey = "e34bae7db1e26852bb5f4dd0f0c8d05b";

  function handleSubmit(e) {
    e.preventDefault();
    setCity(e.target[0].value);

    if (e.key === "Enter") {
      setCity(e.target[0].value);
    }
  }

  useEffect(() => {
    (async function () {
      const response = await fetch(url + "&units=metric&appid=" + apiKey);
      const data = await response.json();
      let error = document.getElementById("error");
      let loading = document.getElementById("loading");
      if (!data) {
        loading.textContent = "Loading...";
        error.textContent = "";
      } else if (data.message) {
        error.textContent = "city not found";
        setWeather("");
      } else {
        setWeather(data);
        console.log(data);
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x1900/?"${city}"')`;
        error.textContent = "";
        loading.textContent = "";
        setLoad(city);
      }
    })();
  }, [apiKey, url, city]);

  return (
    <main className="m-3">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-9 col-lg-4 d-flex justify-content-end mt-3 p-3 flex-end bg-card">
          <div className="card w-100 border border-white">
            <div className="search">
              <form onSubmit={handleSubmit} className="text-center">
                <div className="d-flex border rounded">
                  <input type="text" id="search" className="search-bar p-2 w-100" placeholder="Search city..." />
                  <span>
                    <button type="submit" className="fs-6 ms-5">
                      <img src={search} alt="" />
                    </button>
                  </span>
                </div>
                <p id="error" className="text-danger"></p>
                <p id="loading" className="text-success"></p>
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
