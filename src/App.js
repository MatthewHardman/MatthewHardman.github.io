import './App.css';
import Weathercard from './Components/Weathercard';
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";

function App() {
  const [location1, setLocation1] = useState('Birmingham');
  const [location2, setLocation2] = useState('London');
  const [location3, setLocation3] = useState('Cairo');

  const findLocation1 = () => {
    setLocation1 ((document.getElementById('city-1')).value);
  }

  const findLocation2 = () => {
    setLocation2 ((document.getElementById('city-2')).value);
  }

  const findLocation3 = () => {
    setLocation3 ((document.getElementById('city-3')).value);
  }

  return (
    <div className='container'>
      <div id='header'>
        Weather App!
      </div>
      <div className='weather-card' id='weather-card-1'>
        <div className='input'>
          <input type='text' id='city-1' placeholder='Add city'/>
          <button type='button' onClick={findLocation1}>Add</button>
        </div>
        <Weathercard location={location1}/>
      </div>
      <div className='weather-card' id='weather-card-2'>
      <div className='input'>
        <input type='text' id='city-2' placeholder='Add city'/>
        <button type='button' onClick={findLocation2}>Add</button>
      </div>
        <Weathercard location={location2}/>
      </div>
      <div className='weather-card' id='weather-card-3'>
      <div className='input'>
        <input type='text' id='city-3' placeholder='Add city'/>
        <button type='button' onClick={findLocation3}>Add</button>
      </div>
        <Weathercard location={location3}/>
      </div>
      <div id='footer'>
        <div>Created by Matthew Hardman </div>
        <FaGithub />
      </div>
    </div>
  );
}

export default App;
