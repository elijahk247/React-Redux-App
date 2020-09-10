import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { fetchWeather, FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from './Action/actions';
import Weather from './Components/Weather';

import axios from 'axios'

// function App() {
function App(fetchWeather, fetchingData, error) {
  useEffect(() => {
    //fetchWeather()
    return dispatch => {
      dispatch({type: FETCH_WEATHER})
  
      axios.get('https://www.metaweather.com/api/location/2357024/')
        .then(res => {
          dispatch({ type: FETCH_WEATHER_SUCCESS, payload: res.data})
        })
        .catch(err => {
          dispatch({ type: FETCH_WEATHER_ERROR,
          payload: {message: 'fetching data was unsuccessful'}})
        })
    }
  }, [fetchWeather])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <body>
        <h1>The Weather Data</h1>
        {
          !fetchingData ? <Weather /> : <div>fetching data...</div>
        }
        {
          error !== '' ? <div> {error} </div> : null
        }
      </body>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    fetchingData: state.fetchingData,
    error: state.error,
  }
}

export default connect(mapStateToProps, {fetchWeather})(App);
// export default App;
