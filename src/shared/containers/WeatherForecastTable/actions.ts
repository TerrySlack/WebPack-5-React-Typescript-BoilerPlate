export const GET_WEATHER_DATA = "SET_WEATHER_DATA";
export const SET_WEATHER_DATA = "SET_WEATHER_DATA";
interface ActionTypes {
  SET_WEATHER_DATA: undefined;
}

export interface MessageAction {
  type: keyof ActionTypes;
  payload: any[];
}

export type WeatherActionsTypes = MessageAction;

export const setWeatherData = (data: any[]): WeatherActionsTypes => ({
  type: SET_WEATHER_DATA,
  payload: data,
});

export const getWeatherData = () => async (dispatch: any) => {
  // What's the url to hit whatever 3rd party for the weather data?
  const response = await fetch("weatherforecast");

  // I don't know the shape of data.  Assuming it's an array for now.  You'll have to debug and see
  // the structure and get the array out of it.
  const data = await response.json();

  // save to the store
  dispatch({
    type: SET_WEATHER_DATA,
    payload: data,
  });
};
