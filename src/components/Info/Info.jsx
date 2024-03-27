import React from 'react';
import { WiSunset } from 'react-icons/wi';


function Info({ info }) {
  if (!info || !info.main || !info.weather) {
    return <div>LOADING...</div>;
  }

  return (
    <div className='info'>
      <p className='city'>{info.name}, {info.sys && info.sys.country}</p>
      <div className='generalValue'>
       
        <p className='min-temp'>Min: {Math.floor(info.main.temp_min)}°C</p>
        <p className='max-temp'>Max: {Math.floor(info.main.temp_max)}°C</p>
        <p className='humidity'>Humidity: {info.main.humidity}%</p>
        <WiSunset className='fa-c'/>
      </div>
      <p className='weather'>{info.weather[0].description}</p>
      <div className='his'>
        <p className='hissediler'>{Math.floor(info.main.feels_like)}°C</p>
        <WiSunset className='fa-c'/>
      </div>
    </div>
  );
}

export default Info;
