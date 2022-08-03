import "./Weathercard.css";
import React, { useState, useEffect } from "react";

function Weathercard(props) {
  let location = props.location;

  const [temperature, setTemperature] = useState();
  const [weather, setWeather] = useState();
  const [icon, setIcon] = useState();
  const [hiTemp, setHiTemp] = useState();
  const [lowTemp, setLowTemp] = useState();

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        location +
        "&appid=2f1611fd371334508c8d8b63d53a391c&units=imperial",
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        setTemperature(response.main.feels_like.toFixed(0));
        setWeather(response.weather[0].description);
        setIcon(response.weather[0].icon);
        setHiTemp(response.main.temp_max.toFixed(0));
        setLowTemp(response.main.temp_min.toFixed(0));
      })
      .catch((err) => {
        setTemperature("");
        setWeather("");
        setIcon("");
        setHiTemp("");
        setLowTemp("");
        alert("City not recognized");
      });
  }, [location]);

  return (
    <div className="weather-container">
      <div>{location}</div>
      <div className="weather-icon">
        <img
          alt="weather-icon"
          src={"http://openweathermap.org/img/w/" + icon + ".png"}
        ></img>
      </div>
      <div className="weather-info">{weather}</div>
      <div className="weather-info">Hi: {hiTemp} °F</div>
      <div className="weather-info">Low: {lowTemp} °F</div>
      <div className="weather-info">Feels Like: {temperature} °F</div>
    </div>
  );
}

export default Weathercard;
