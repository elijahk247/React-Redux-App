import React from 'react';
import { connect } from 'react-redux';

const Weather = (props) => {
  return(
    <div className='weather-container'>
      {
        props.temperatureData.map(data => {
          return(
            <div>
              <h3>Data</h3>
              <p>Humidity: {data.humidity}</p>
              <p>The temperature: {data['the_temp']}</p>
            </div>
          )
        })
      }
      <p className='time'>The time is: {props.time}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    temperatureData: state.temperatureData,
    time: state.time,
  }
}

// export default Weather;
export default connect(mapStateToProps, {})(Weather);