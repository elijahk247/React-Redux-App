import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR'

export const fetchWeather = () => {
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
}