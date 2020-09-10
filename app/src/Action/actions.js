import axios from 'axios';

export const fetchWeather = () => {
  return dispatch => {
    dispatch({type: 'FETCH_WEATHER_START'})

    axios.get('https://www.metaweather.com/api/location/2357024/')
      .then(res => {
        dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: res.data})
      })
      .catch(err => {
        dispatch({ type: 'FETCH_WEATHER_ERROR',
        payload: {message: 'fetching data was unsuccessful'}})
      })
  }
}