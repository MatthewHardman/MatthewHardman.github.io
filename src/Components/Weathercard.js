//import './Weathercard.css'
import React, {useState, useEffect } from 'react';

function Weathercard(props){
    
  let location = props.location;

    const [temperature, setTemperature] = useState();
    const [weather, setWeather] = useState();
    const [icon, setIcon] = useState();
  
    useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=2f1611fd371334508c8d8b63d53a391c&units=imperial', {mode:'cors'})
      .then((response) => response.json())
      .then((response) => {
        setTemperature(response.main.temp);
        setWeather(response.weather[0].main);
        setIcon(response.weather[0].icon)
      })
      .catch((err) => {
        alert("City not recognized");
      });
    },[location]);
  
    return (
      <div>
          <div>{location}</div>
          <div>{temperature} °F</div>
          <div>Weather: {weather}</div>
          <img alt='weather-icon' src={'http://openweathermap.org/img/w/'+icon+'.png'}></img>
      </div>
    );

}

export default Weathercard;