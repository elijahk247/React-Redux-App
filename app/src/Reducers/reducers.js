import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from '../Action/actions'

const intialState = {
  temperatureData: [],
  fetchingData: true,
  error: '',
  time: '',
}


export const reducers = (state = intialState, action) => {
  switch(action.type) {
      case FETCH_WEATHER:
        return {
          ...state,
          fetchingData: true
        }
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        temperatureData: action.payload['consolidated_weather'],
        fetchingData: false,
        time: action.payload.time,
      }
    case FETCH_WEATHER_ERROR:
      return{
        ...state, 
        fetchingData: false,
        error: action.payload.message
      }

    default: 
      return state;
  }
}