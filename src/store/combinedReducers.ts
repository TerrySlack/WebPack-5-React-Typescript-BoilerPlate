import { combineReducers } from "redux";

// Import Reducers
import { WeatherForecasteReducer } from "Containers/WeatherForecastTable";

// Combine them
export default combineReducers({
  weatherForecast: WeatherForecasteReducer,
});
