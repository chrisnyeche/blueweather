import React from "react";
import sun from "../images/sun-foggy-line.svg";

function Weather(props) {


  const weather = props.condition;
  const { temp } = weather.main ?? "";
  const { humidity } = weather.main ?? "";
  const { feels_like } = weather.main ?? "";
  const { speed } = weather.wind ?? "";
  const { country } = weather.sys ?? "";
  const { description } = weather.weather ?? [];
  
  return (
    <div className="weather">
      <h2 className="city">City: {weather.name}</h2>
      <h4 className="temp">
        Temp: {temp} °C <img src={sun} alt="" className="icon" />
      </h4>
      <p> Feels Like: {feels_like} </p>

      <p className="weather-details">Weather Reports</p>
      <hr />
      <div className="weather-description">
        <p> Country: {country} </p>
        <div className="description">{description}</div>
      </div>
      <div className="weather-description">
        <img src="./images/temp-cold-fill.svg" alt="" className="icon" />
        <div className="">Humidity: {humidity}g.m-3 </div>
      </div>
      <div className="weather-description">
        <img src="./images/windy-line.svg" alt="" className="icon" />
        <div className="wind">Wind speed: {speed}m/s</div>
      </div>
    </div>
  );
}

export default Weather;
