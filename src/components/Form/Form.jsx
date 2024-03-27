import React, { useState } from 'react';
import axios from 'axios';

function Form({ setInfo }) {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = 'c17bc3b039b1b73de4e0175c6792ff96';
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=EN`;

    try {
      const response = await axios(baseUrl);
      setInfo(response.data);
      console.log("Success!", response);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <div className='form'>
          <input
            onChange={handleChange}
            value={city}
            className='inputText'
            type='text'
            placeholder='City name'
          />
        </div>
        <div className='btnDiv'>
          <button
            type='submit'
            className='btn'
          >
            Fetch the Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
