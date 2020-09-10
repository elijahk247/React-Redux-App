import React from 'react';

const Weather = (props) => {
  return(
    <div className='weather-container'>
      {
        props.weatherData.map(data => {
          return(
            <div>
              <h3>Data</h3>
              <p>Humidity: {data.humidity}</p>
              <p>The temperature: {data.humidity}</p>
            </div>
          )
        })
      }
      <p className='time'>The time is: {props.time}</p>
    </div>
  )
}

export default Weather;