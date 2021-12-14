import { SET_WEATHER_DATA, WeatherActionsTypes } from "./actions";

interface WeatherForcast {
  weatherForecast: any[];
}
const initialState: WeatherForcast = { weatherForecast: [] };

export const WeatherForecasteReducer = (
  state = initialState,
  action: WeatherActionsTypes = {
    type: "SET_WEATHER_DATA",
    payload: [],
  }
) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return [...state.weatherForecast, ...action.payload];
    default:
      return state;
  }
};
