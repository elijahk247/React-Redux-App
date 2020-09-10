const intialState = {
  temperatureData: [],
  fetchingData: false,
  error: '',
  time: '',
}


export const reducers = (state = intialState, action) => {
  switch(action.type) {
    case 'FETCH_WEATHER_START':
        return {
          ...state,
          fetchingData: true
        }
    case 'FETCH_WEATHER_SUCCESS':
      return {
        ... state,
        fetchingData: false,
        temperatureData: action.payload.consolidated_weather,
        time: action.payload.time,
      }
    case 'FETCH_WEATHER_ERROR':
      return{
        ...state, 
        fetchingData: false,
        error: action.payload.message
      }

    default: 
      return state;
  }
}