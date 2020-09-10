import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { fetchWeather } from './Action/actions';
import Weather from './Components/Weather';

// function App() {
function App(fetchWeather, fetchingData, error) {
  useEffect(() => {
    fetchWeather()
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
